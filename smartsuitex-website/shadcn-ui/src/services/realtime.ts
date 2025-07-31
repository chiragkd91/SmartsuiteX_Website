// Real-time Service Configuration
const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL || 'ws://localhost:3001/ws';

// WebSocket Event Types
export interface WebSocketMessage {
  type: string;
  data: any;
  timestamp: number;
}

export interface RealtimeEvent {
  id: string;
  type: 'notification' | 'update' | 'alert' | 'message';
  title: string;
  message: string;
  data?: any;
  timestamp: number;
}

// Real-time Service Class
class RealtimeService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;
  private eventListeners: Map<string, Set<(data: any) => void>> = new Map();
  private isConnecting = false;

  constructor() {
    this.connect();
  }

  private connect() {
    if (this.isConnecting || this.ws?.readyState === WebSocket.OPEN) {
      return;
    }

    this.isConnecting = true;
    const token = localStorage.getItem('authToken');
    const wsUrl = token ? `${WS_BASE_URL}?token=${token}` : WS_BASE_URL;

    try {
      this.ws = new WebSocket(wsUrl);
      this.setupEventHandlers();
    } catch (error) {
      console.error('WebSocket connection failed:', error);
      this.handleReconnect();
    }
  }

  private setupEventHandlers() {
    if (!this.ws) return;

    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.isConnecting = false;
      this.reconnectAttempts = 0;
      this.emit('connected', {});
    };

    this.ws.onmessage = (event) => {
      try {
        const message: WebSocketMessage = JSON.parse(event.data);
        this.handleMessage(message);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket disconnected:', event.code, event.reason);
      this.isConnecting = false;
      this.emit('disconnected', { code: event.code, reason: event.reason });
      
      if (event.code !== 1000) {
        this.handleReconnect();
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.isConnecting = false;
    };
  }

  private handleMessage(message: WebSocketMessage) {
    const { type, data } = message;
    
    // Emit the message to all listeners
    this.emit(type, data);
    
    // Handle specific message types
    switch (type) {
      case 'notification':
        this.handleNotification(data);
        break;
      case 'dashboard_update':
        this.handleDashboardUpdate(data);
        break;
      case 'crm_update':
        this.handleCRMUpdate(data);
        break;
      case 'project_update':
        this.handleProjectUpdate(data);
        break;
      case 'inventory_update':
        this.handleInventoryUpdate(data);
        break;
      case 'billing_update':
        this.handleBillingUpdate(data);
        break;
      default:
        console.log('Unhandled WebSocket message type:', type);
    }
  }

  private handleNotification(data: any) {
    // Show notification to user
    if ('toast' in window) {
      // @ts-ignore
      window.toast?.(data.message, {
        type: data.level || 'info',
        duration: data.duration || 5000,
      });
    }
  }

  private handleDashboardUpdate(data: any) {
    // Update dashboard data
    this.emit('dashboard:update', data);
  }

  private handleCRMUpdate(data: any) {
    // Update CRM data
    this.emit('crm:update', data);
  }

  private handleProjectUpdate(data: any) {
    // Update project data
    this.emit('project:update', data);
  }

  private handleInventoryUpdate(data: any) {
    // Update inventory data
    this.emit('inventory:update', data);
  }

  private handleBillingUpdate(data: any) {
    // Update billing data
    this.emit('billing:update', data);
  }

  private handleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      this.emit('reconnect_failed', {});
      return;
    }

    this.reconnectAttempts++;
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
    
    console.log(`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts})`);
    
    setTimeout(() => {
      this.connect();
    }, delay);
  }

  // Public Methods
  public subscribe(event: string, callback: (data: any) => void) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }
    this.eventListeners.get(event)!.add(callback);
  }

  public unsubscribe(event: string, callback: (data: any) => void) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.delete(callback);
      if (listeners.size === 0) {
        this.eventListeners.delete(event);
      }
    }
  }

  public emit(event: string, data: any) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      });
    }
  }

  public send(type: string, data: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      const message: WebSocketMessage = {
        type,
        data,
        timestamp: Date.now(),
      };
      this.ws.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not connected');
    }
  }

  public disconnect() {
    if (this.ws) {
      this.ws.close(1000, 'Client disconnect');
      this.ws = null;
    }
  }

  public isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  // Specific event methods
  public onDashboardUpdate(callback: (data: any) => void) {
    this.subscribe('dashboard:update', callback);
  }

  public onCRMUpdate(callback: (data: any) => void) {
    this.subscribe('crm:update', callback);
  }

  public onProjectUpdate(callback: (data: any) => void) {
    this.subscribe('project:update', callback);
  }

  public onInventoryUpdate(callback: (data: any) => void) {
    this.subscribe('inventory:update', callback);
  }

  public onBillingUpdate(callback: (data: any) => void) {
    this.subscribe('billing:update', callback);
  }

  public onNotification(callback: (data: any) => void) {
    this.subscribe('notification', callback);
  }

  public onConnect(callback: () => void) {
    this.subscribe('connected', callback);
  }

  public onDisconnect(callback: (data: any) => void) {
    this.subscribe('disconnected', callback);
  }
}

// Create singleton instance
export const realtimeService = new RealtimeService();

// React Hook for real-time updates
export const useRealtime = () => {
  return {
    subscribe: realtimeService.subscribe.bind(realtimeService),
    unsubscribe: realtimeService.unsubscribe.bind(realtimeService),
    send: realtimeService.send.bind(realtimeService),
    isConnected: realtimeService.isConnected.bind(realtimeService),
    onDashboardUpdate: realtimeService.onDashboardUpdate.bind(realtimeService),
    onCRMUpdate: realtimeService.onCRMUpdate.bind(realtimeService),
    onProjectUpdate: realtimeService.onProjectUpdate.bind(realtimeService),
    onInventoryUpdate: realtimeService.onInventoryUpdate.bind(realtimeService),
    onBillingUpdate: realtimeService.onBillingUpdate.bind(realtimeService),
    onNotification: realtimeService.onNotification.bind(realtimeService),
    onConnect: realtimeService.onConnect.bind(realtimeService),
    onDisconnect: realtimeService.onDisconnect.bind(realtimeService),
  };
};

export default realtimeService; 