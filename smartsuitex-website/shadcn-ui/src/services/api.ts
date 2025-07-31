// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
const API_TIMEOUT = 10000; // 10 seconds
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true' || !import.meta.env.VITE_API_BASE_URL;

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// API Error Class
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// API Client Class
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string, timeout: number) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('authToken');

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          response.status,
          errorData.message || `HTTP ${response.status}`,
          errorData
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      if (error.name === 'AbortError') {
        throw new ApiError(408, 'Request timeout');
      }
      
      throw new ApiError(500, 'Network error');
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${this.baseURL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return this.request<T>(url.pathname + url.search);
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PATCH request
  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_BASE_URL, API_TIMEOUT);

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
    OAUTH: {
      GOOGLE: '/auth/google',
      GITHUB: '/auth/github',
      LINKEDIN: '/auth/linkedin',
    },
  },

  // User Management
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    CHANGE_PASSWORD: '/users/change-password',
    UPLOAD_AVATAR: '/users/avatar',
  },

  // Dashboard
  DASHBOARD: {
    OVERVIEW: '/dashboard/overview',
    STATS: '/dashboard/stats',
    ACTIVITIES: '/dashboard/activities',
  },

  // CRM
  CRM: {
    CONTACTS: '/crm/contacts',
    LEADS: '/crm/leads',
    DEALS: '/crm/deals',
    PIPELINES: '/crm/pipelines',
  },

  // Projects
  PROJECTS: {
    LIST: '/projects',
    CREATE: '/projects',
    UPDATE: (id: string) => `/projects/${id}`,
    DELETE: (id: string) => `/projects/${id}`,
    TASKS: (id: string) => `/projects/${id}/tasks`,
  },

  // Inventory
  INVENTORY: {
    PRODUCTS: '/inventory/products',
    CATEGORIES: '/inventory/categories',
    SUPPLIERS: '/inventory/suppliers',
    STOCK: '/inventory/stock',
  },

  // HR
  HR: {
    EMPLOYEES: '/hr/employees',
    DEPARTMENTS: '/hr/departments',
    ATTENDANCE: '/hr/attendance',
    PAYROLL: '/hr/payroll',
  },

  // Analytics
  ANALYTICS: {
    SALES: '/analytics/sales',
    USERS: '/analytics/users',
    PERFORMANCE: '/analytics/performance',
  },

  // Billing
  BILLING: {
    SUBSCRIPTION: '/billing/subscription',
    INVOICES: '/billing/invoices',
    PAYMENT_METHODS: '/billing/payment-methods',
    USAGE: '/billing/usage',
  },

  // Support
  SUPPORT: {
    TICKETS: '/support/tickets',
    ARTICLES: '/support/articles',
    CATEGORIES: '/support/categories',
  },

  // Email
  EMAIL: {
    SEND: '/email/send',
    TEMPLATES: '/email/templates',
    SUBSCRIBE: '/email/subscribe',
    UNSUBSCRIBE: '/email/unsubscribe',
  },
} as const;

// API Service Functions
export const apiService = {
  // Authentication
  auth: {
    login: async (credentials: { email: string; password: string }) => {
      return apiClient.post<ApiResponse<{ token: string; user: any }>>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      );
    },

    register: async (userData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone?: string;
    }) => {
      return apiClient.post<ApiResponse<{ token: string; user: any }>>(
        API_ENDPOINTS.AUTH.REGISTER,
        userData
      );
    },

    logout: async () => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.AUTH.LOGOUT);
    },

    forgotPassword: async (email: string) => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, {
        email,
      });
    },

    resetPassword: async (token: string, password: string) => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
        token,
        password,
      });
    },

    refreshToken: async () => {
      return apiClient.post<ApiResponse<{ token: string }>>(
        API_ENDPOINTS.AUTH.REFRESH
      );
    },

    oauth: {
      google: async (code: string) => {
        return apiClient.post<ApiResponse<{ token: string; user: any }>>(
          API_ENDPOINTS.AUTH.OAUTH.GOOGLE,
          { code }
        );
      },

      github: async (code: string) => {
        return apiClient.post<ApiResponse<{ token: string; user: any }>>(
          API_ENDPOINTS.AUTH.OAUTH.GITHUB,
          { code }
        );
      },

      linkedin: async (code: string) => {
        return apiClient.post<ApiResponse<{ token: string; user: any }>>(
          API_ENDPOINTS.AUTH.OAUTH.LINKEDIN,
          { code }
        );
      },
    },
  },

  // User Management
  users: {
    getProfile: async () => {
      return apiClient.get<ApiResponse<any>>(API_ENDPOINTS.USERS.PROFILE);
    },

    updateProfile: async (profileData: any) => {
      return apiClient.put<ApiResponse<any>>(
        API_ENDPOINTS.USERS.UPDATE_PROFILE,
        profileData
      );
    },

    changePassword: async (passwords: {
      currentPassword: string;
      newPassword: string;
    }) => {
      return apiClient.post<ApiResponse>(
        API_ENDPOINTS.USERS.CHANGE_PASSWORD,
        passwords
      );
    },

    uploadAvatar: async (file: File) => {
      const formData = new FormData();
      formData.append('avatar', file);
      
      return apiClient.post<ApiResponse<{ avatarUrl: string }>>(
        API_ENDPOINTS.USERS.UPLOAD_AVATAR,
        formData
      );
    },
  },

  // Dashboard
  dashboard: {
    getOverview: async () => {
      return apiClient.get<ApiResponse<any>>(API_ENDPOINTS.DASHBOARD.OVERVIEW);
    },

    getStats: async () => {
      return apiClient.get<ApiResponse<any>>(API_ENDPOINTS.DASHBOARD.STATS);
    },

    getActivities: async (params?: { page?: number; limit?: number }) => {
      return apiClient.get<PaginatedResponse<any>>(
        API_ENDPOINTS.DASHBOARD.ACTIVITIES,
        params
      );
    },
  },

  // CRM
  crm: {
    getContacts: async (params?: { page?: number; limit?: number; search?: string }) => {
      return apiClient.get<PaginatedResponse<any>>(
        API_ENDPOINTS.CRM.CONTACTS,
        params
      );
    },

    createContact: async (contactData: any) => {
      return apiClient.post<ApiResponse<any>>(
        API_ENDPOINTS.CRM.CONTACTS,
        contactData
      );
    },

    updateContact: async (id: string, contactData: any) => {
      return apiClient.put<ApiResponse<any>>(
        `${API_ENDPOINTS.CRM.CONTACTS}/${id}`,
        contactData
      );
    },

    deleteContact: async (id: string) => {
      return apiClient.delete<ApiResponse>(`${API_ENDPOINTS.CRM.CONTACTS}/${id}`);
    },
  },

  // Projects
  projects: {
    getProjects: async (params?: { page?: number; limit?: number; status?: string }) => {
      return apiClient.get<PaginatedResponse<any>>(
        API_ENDPOINTS.PROJECTS.LIST,
        params
      );
    },

    createProject: async (projectData: any) => {
      return apiClient.post<ApiResponse<any>>(
        API_ENDPOINTS.PROJECTS.CREATE,
        projectData
      );
    },

    updateProject: async (id: string, projectData: any) => {
      return apiClient.put<ApiResponse<any>>(
        API_ENDPOINTS.PROJECTS.UPDATE(id),
        projectData
      );
    },

    deleteProject: async (id: string) => {
      return apiClient.delete<ApiResponse>(API_ENDPOINTS.PROJECTS.DELETE(id));
    },

    getTasks: async (projectId: string, params?: { page?: number; limit?: number }) => {
      return apiClient.get<PaginatedResponse<any>>(
        API_ENDPOINTS.PROJECTS.TASKS(projectId),
        params
      );
    },
  },

  // Inventory
  inventory: {
    getProducts: async (params?: { page?: number; limit?: number; category?: string }) => {
      return apiClient.get<PaginatedResponse<any>>(
        API_ENDPOINTS.INVENTORY.PRODUCTS,
        params
      );
    },

    createProduct: async (productData: any) => {
      return apiClient.post<ApiResponse<any>>(
        API_ENDPOINTS.INVENTORY.PRODUCTS,
        productData
      );
    },

    updateProduct: async (id: string, productData: any) => {
      return apiClient.put<ApiResponse<any>>(
        `${API_ENDPOINTS.INVENTORY.PRODUCTS}/${id}`,
        productData
      );
    },

    deleteProduct: async (id: string) => {
      return apiClient.delete<ApiResponse>(`${API_ENDPOINTS.INVENTORY.PRODUCTS}/${id}`);
    },
  },

  // Billing
  billing: {
    getSubscription: async () => {
      return apiClient.get<ApiResponse<any>>(API_ENDPOINTS.BILLING.SUBSCRIPTION);
    },

    getInvoices: async (params?: { page?: number; limit?: number }) => {
      return apiClient.get<PaginatedResponse<any>>(
        API_ENDPOINTS.BILLING.INVOICES,
        params
      );
    },

    getPaymentMethods: async () => {
      return apiClient.get<ApiResponse<any[]>>(API_ENDPOINTS.BILLING.PAYMENT_METHODS);
    },

    addPaymentMethod: async (paymentData: any) => {
      return apiClient.post<ApiResponse<any>>(
        API_ENDPOINTS.BILLING.PAYMENT_METHODS,
        paymentData
      );
    },

    getUsage: async () => {
      return apiClient.get<ApiResponse<any>>(API_ENDPOINTS.BILLING.USAGE);
    },
  },

  // Email
  email: {
    sendContactForm: async (formData: {
      name: string;
      email: string;
      company?: string;
      phone?: string;
      message: string;
    }) => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.EMAIL.SEND, {
        template: 'contact-form',
        data: formData,
      });
    },

    send: async (emailData: { template: string; data: any }) => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.EMAIL.SEND, emailData);
    },

    templates: async () => {
      return apiClient.get<ApiResponse<any[]>>(API_ENDPOINTS.EMAIL.TEMPLATES);
    },

    subscribeNewsletter: async (email: string) => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.EMAIL.SUBSCRIBE, { email });
    },

    unsubscribeNewsletter: async (email: string, token: string) => {
      return apiClient.post<ApiResponse>(API_ENDPOINTS.EMAIL.UNSUBSCRIBE, {
        email,
        token,
      });
    },
  },
};

// Import mock API service
import { createMockApiWrapper } from './mockApi';

// Use mock API if configured or if no API base URL is set
const finalApiService = USE_MOCK_API ? createMockApiWrapper() : apiService;

export default finalApiService; 