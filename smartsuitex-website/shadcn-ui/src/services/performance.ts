// Performance Monitoring Service for tracking Core Web Vitals and performance metrics

export class PerformanceService {
  private static instance: PerformanceService;
  private isInitialized = false;
  private observers: Map<string, PerformanceObserver> = new Map();

  private constructor() {}

  static getInstance(): PerformanceService {
    if (!PerformanceService.instance) {
      PerformanceService.instance = new PerformanceService();
    }
    return PerformanceService.instance;
  }

  // Initialize performance monitoring
  init() {
    if (this.isInitialized) return;
    
    this.observeCoreWebVitals();
    this.observeResourceTiming();
    this.observeNavigationTiming();
    this.observeLongTasks();
    
    this.isInitialized = true;
  }

  // Observe Core Web Vitals
  private observeCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID)
    this.observeFID();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
    
    // First Contentful Paint (FCP)
    this.observeFCP();
  }

  // Observe Largest Contentful Paint
  private observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        this.reportMetric('LCP', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('LCP', observer);
    }
  }

  // Observe First Input Delay
  private observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.reportMetric('FID', entry.processingStart - entry.startTime);
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.set('FID', observer);
    }
  }

  // Observe Cumulative Layout Shift
  private observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        this.reportMetric('CLS', clsValue);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('CLS', observer);
    }
  }

  // Observe First Contentful Paint
  private observeFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        
        this.reportMetric('FCP', firstEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['first-contentful-paint'] });
      this.observers.set('FCP', observer);
    }
  }

  // Observe Resource Timing
  private observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.reportResourceTiming(entry as PerformanceResourceTiming);
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', observer);
    }
  }

  // Observe Navigation Timing
  private observeNavigationTiming() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.reportNavigationTiming(entry as PerformanceNavigationTiming);
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      this.observers.set('navigation', observer);
    }
  }

  // Observe Long Tasks
  private observeLongTasks() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.reportLongTask(entry as PerformanceEntry);
        });
      });
      
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.set('longtask', observer);
    }
  }

  // Report metric to analytics
  private reportMetric(metricName: string, value: number) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metricName,
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital: ${metricName} = ${value}ms`);
    }
  }

  // Report resource timing
  private reportResourceTiming(entry: PerformanceResourceTiming) {
    const duration = entry.duration;
    const size = entry.transferSize || 0;
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resource_timing', {
        event_category: 'Performance',
        event_label: entry.name,
        value: Math.round(duration),
        custom_parameter_1: Math.round(size),
        non_interaction: true,
      });
    }
  }

  // Report navigation timing
  private reportNavigationTiming(entry: PerformanceNavigationTiming) {
    const loadTime = entry.loadEventEnd - entry.loadEventStart;
    const domContentLoaded = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'navigation_timing', {
        event_category: 'Performance',
        event_label: 'Page Load',
        value: Math.round(loadTime),
        custom_parameter_1: Math.round(domContentLoaded),
        non_interaction: true,
      });
    }
  }

  // Report long task
  private reportLongTask(entry: PerformanceEntry) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'long_task', {
        event_category: 'Performance',
        event_label: 'Long Task',
        value: Math.round(entry.duration),
        non_interaction: true,
      });
    }
  }

  // Get current performance metrics
  getCurrentMetrics() {
    const metrics: Record<string, number> = {};
    
    // Get navigation timing
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      metrics.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
      metrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
      metrics.firstPaint = timing.responseStart - timing.navigationStart;
    }
    
    // Get memory info (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      metrics.memoryUsed = memory.usedJSHeapSize;
      metrics.memoryTotal = memory.totalJSHeapSize;
    }
    
    return metrics;
  }

  // Measure function execution time
  measureFunction<T>(fn: () => T, name: string): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    this.reportMetric(`function_${name}`, end - start);
    
    return result;
  }

  // Measure async function execution time
  async measureAsyncFunction<T>(fn: () => Promise<T>, name: string): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    this.reportMetric(`async_function_${name}`, end - start);
    
    return result;
  }

  // Disconnect all observers
  disconnect() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

// Export singleton instance
export const performance = PerformanceService.getInstance();

// React hook for performance monitoring
export const usePerformance = () => {
  return {
    getCurrentMetrics: performance.getCurrentMetrics.bind(performance),
    measureFunction: performance.measureFunction.bind(performance),
    measureAsyncFunction: performance.measureAsyncFunction.bind(performance),
  };
}; 