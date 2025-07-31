// Mock API Service for Demo Purposes
// This simulates real API responses for demonstration

import { ApiResponse, PaginatedResponse } from './api';

// Mock Data
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@smartsuitex.com',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    department: 'Engineering',
    lastLogin: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@smartsuitex.com',
    role: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    department: 'Sales',
    lastLogin: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@smartsuitex.com',
    role: 'User',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    department: 'Marketing',
    lastLogin: '2024-01-14T16:45:00Z',
  },
];

const mockContacts = [
  {
    id: '1',
    name: 'Alice Cooper',
    email: 'alice@company.com',
    phone: '+1-555-0123',
    company: 'Tech Corp',
    status: 'Active',
    lastContact: '2024-01-15T14:20:00Z',
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob@startup.io',
    phone: '+1-555-0456',
    company: 'Startup Inc',
    status: 'Prospect',
    lastContact: '2024-01-14T11:30:00Z',
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol@enterprise.com',
    phone: '+1-555-0789',
    company: 'Enterprise Ltd',
    status: 'Lead',
    lastContact: '2024-01-13T09:45:00Z',
  },
];

const mockProjects = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'In Progress',
    progress: 65,
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    team: ['John Doe', 'Jane Smith'],
    budget: 50000,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    status: 'Planning',
    progress: 25,
    startDate: '2024-02-01',
    endDate: '2024-06-01',
    team: ['Mike Johnson', 'Alice Cooper'],
    budget: 75000,
  },
  {
    id: '3',
    name: 'Database Migration',
    status: 'Completed',
    progress: 100,
    startDate: '2023-12-01',
    endDate: '2024-01-15',
    team: ['John Doe'],
    budget: 25000,
  },
];

const mockProducts = [
  {
    id: '1',
    name: 'Laptop Pro X1',
    category: 'Electronics',
    stock: 45,
    price: 1299.99,
    supplier: 'Tech Supplies Inc',
    lastUpdated: '2024-01-15T08:30:00Z',
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    category: 'Accessories',
    stock: 120,
    price: 29.99,
    supplier: 'Office Depot',
    lastUpdated: '2024-01-14T16:20:00Z',
  },
  {
    id: '3',
    name: 'Monitor 27"',
    category: 'Electronics',
    stock: 18,
    price: 299.99,
    supplier: 'Display Solutions',
    lastUpdated: '2024-01-13T12:15:00Z',
  },
];

const mockInvoices = [
  {
    id: 'INV-001',
    amount: 1299.99,
    status: 'Paid',
    dueDate: '2024-01-31',
    customer: 'Tech Corp',
    items: ['Laptop Pro X1'],
  },
  {
    id: 'INV-002',
    amount: 89.97,
    status: 'Pending',
    dueDate: '2024-02-15',
    customer: 'Startup Inc',
    items: ['Wireless Mouse', 'Monitor 27"'],
  },
  {
    id: 'INV-003',
    amount: 299.99,
    status: 'Overdue',
    dueDate: '2024-01-10',
    customer: 'Enterprise Ltd',
    items: ['Monitor 27"'],
  },
];

// Mock API Service Class
class MockApiService {
  private delay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Authentication
  async login(credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string; user: any }>> {
    await this.delay(800);
    
    if (credentials.email === 'demo@smartsuitex.com' && credentials.password === 'demo123') {
      return {
        success: true,
        data: {
          token: 'mock-jwt-token-demo-' + Date.now(),
          user: mockUsers[0],
        },
      };
    }
    
    return {
      success: false,
      error: 'Invalid credentials',
    };
  }

  async register(userData: any): Promise<ApiResponse<{ token: string; user: any }>> {
    await this.delay(1000);
    
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      role: 'User',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      department: 'New',
      lastLogin: new Date().toISOString(),
    };
    
    return {
      success: true,
      data: {
        token: 'mock-jwt-token-new-user-' + Date.now(),
        user: newUser,
      },
    };
  }

  async logout(): Promise<ApiResponse> {
    await this.delay(300);
    return { success: true };
  }

  async forgotPassword(email: string): Promise<ApiResponse> {
    await this.delay(600);
    return { success: true, message: 'Password reset email sent' };
  }

  // User Management
  async getProfile(): Promise<ApiResponse<any>> {
    await this.delay(500);
    return {
      success: true,
      data: mockUsers[0],
    };
  }

  async updateProfile(profileData: any): Promise<ApiResponse<any>> {
    await this.delay(800);
    const updatedUser = { ...mockUsers[0], ...profileData };
    return {
      success: true,
      data: updatedUser,
    };
  }

  // Dashboard
  async getDashboardOverview(): Promise<ApiResponse<any>> {
    await this.delay(600);
    return {
      success: true,
      data: {
        totalUsers: mockUsers.length,
        totalContacts: mockContacts.length,
        totalProjects: mockProjects.length,
        totalRevenue: 1689.95,
        recentActivities: [
          { id: '1', action: 'New contact added', user: 'John Doe', time: '2 hours ago' },
          { id: '2', action: 'Project updated', user: 'Jane Smith', time: '4 hours ago' },
          { id: '3', action: 'Invoice paid', user: 'Mike Johnson', time: '1 day ago' },
        ],
      },
    };
  }

  async getDashboardStats(): Promise<ApiResponse<any>> {
    await this.delay(500);
    return {
      success: true,
      data: {
        salesGrowth: 15.5,
        userGrowth: 8.2,
        projectCompletion: 75.3,
        customerSatisfaction: 4.8,
      },
    };
  }

  // CRM
  async getContacts(params?: any): Promise<PaginatedResponse<any>> {
    await this.delay(700);
    return {
      success: true,
      data: mockContacts,
      pagination: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: mockContacts.length,
        totalPages: 1,
      },
    };
  }

  async createContact(contactData: any): Promise<ApiResponse<any>> {
    await this.delay(800);
    const newContact = {
      id: (mockContacts.length + 1).toString(),
      ...contactData,
      status: 'New',
      lastContact: new Date().toISOString(),
    };
    return {
      success: true,
      data: newContact,
    };
  }

  // Projects
  async getProjects(params?: any): Promise<PaginatedResponse<any>> {
    await this.delay(600);
    return {
      success: true,
      data: mockProjects,
      pagination: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: mockProjects.length,
        totalPages: 1,
      },
    };
  }

  async createProject(projectData: any): Promise<ApiResponse<any>> {
    await this.delay(900);
    const newProject = {
      id: (mockProjects.length + 1).toString(),
      ...projectData,
      progress: 0,
      status: 'Planning',
    };
    return {
      success: true,
      data: newProject,
    };
  }

  // Inventory
  async getProducts(params?: any): Promise<PaginatedResponse<any>> {
    await this.delay(600);
    return {
      success: true,
      data: mockProducts,
      pagination: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: mockProducts.length,
        totalPages: 1,
      },
    };
  }

  async createProduct(productData: any): Promise<ApiResponse<any>> {
    await this.delay(800);
    const newProduct = {
      id: (mockProducts.length + 1).toString(),
      ...productData,
      lastUpdated: new Date().toISOString(),
    };
    return {
      success: true,
      data: newProduct,
    };
  }

  // Billing
  async getSubscription(): Promise<ApiResponse<any>> {
    await this.delay(500);
    return {
      success: true,
      data: {
        plan: 'Professional',
        status: 'Active',
        nextBilling: '2024-02-15',
        amount: 99.99,
        features: ['CRM', 'Projects', 'Inventory', 'Analytics'],
      },
    };
  }

  async getInvoices(params?: any): Promise<PaginatedResponse<any>> {
    await this.delay(600);
    return {
      success: true,
      data: mockInvoices,
      pagination: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: mockInvoices.length,
        totalPages: 1,
      },
    };
  }

  async getPaymentMethods(): Promise<ApiResponse<any[]>> {
    await this.delay(400);
    return {
      success: true,
      data: [
        {
          id: '1',
          type: 'card',
          last4: '4242',
          brand: 'Visa',
          expiry: '12/25',
          isDefault: true,
        },
        {
          id: '2',
          type: 'card',
          last4: '5555',
          brand: 'Mastercard',
          expiry: '08/26',
          isDefault: false,
        },
      ],
    };
  }

  // Email
  async sendContactForm(formData: any): Promise<ApiResponse> {
    await this.delay(1000);
    return {
      success: true,
      message: 'Contact form submitted successfully',
    };
  }

  async subscribeNewsletter(email: string): Promise<ApiResponse> {
    await this.delay(500);
    return {
      success: true,
      message: 'Successfully subscribed to newsletter',
    };
  }
}

// Create singleton instance
export const mockApiService = new MockApiService();

// Mock API wrapper that can be used in place of real API
export const createMockApiWrapper = () => {
  return {
    auth: {
      login: mockApiService.login.bind(mockApiService),
      register: mockApiService.register.bind(mockApiService),
      logout: mockApiService.logout.bind(mockApiService),
      forgotPassword: mockApiService.forgotPassword.bind(mockApiService),
      oauth: {
        google: mockApiService.login.bind(mockApiService),
        github: mockApiService.login.bind(mockApiService),
        linkedin: mockApiService.login.bind(mockApiService),
      },
    },
    users: {
      getProfile: mockApiService.getProfile.bind(mockApiService),
      updateProfile: mockApiService.updateProfile.bind(mockApiService),
    },
    dashboard: {
      getOverview: mockApiService.getDashboardOverview.bind(mockApiService),
      getStats: mockApiService.getDashboardStats.bind(mockApiService),
    },
    crm: {
      getContacts: mockApiService.getContacts.bind(mockApiService),
      createContact: mockApiService.createContact.bind(mockApiService),
    },
    projects: {
      getProjects: mockApiService.getProjects.bind(mockApiService),
      createProject: mockApiService.createProject.bind(mockApiService),
    },
    inventory: {
      getProducts: mockApiService.getProducts.bind(mockApiService),
      createProduct: mockApiService.createProduct.bind(mockApiService),
    },
    billing: {
      getSubscription: mockApiService.getSubscription.bind(mockApiService),
      getInvoices: mockApiService.getInvoices.bind(mockApiService),
      getPaymentMethods: mockApiService.getPaymentMethods.bind(mockApiService),
    },
    email: {
      sendContactForm: mockApiService.sendContactForm.bind(mockApiService),
      subscribeNewsletter: mockApiService.subscribeNewsletter.bind(mockApiService),
    },
  };
};

export default mockApiService; 