import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiService } from '@/services/api';
import { ApiError } from '@/services/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithOAuth: (provider: 'google' | 'github' | 'linkedin') => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, password: string) => Promise<boolean>;
  updateProfile: (profileData: Partial<User>) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem('authToken');
    if (token) {
      loadUserProfile();
    } else {
      setIsLoading(false);
    }
  }, []);

  const loadUserProfile = async () => {
    try {
      const response = await apiService.users.getProfile();
      if (response.success && response.data) {
        setUser(response.data);
      } else {
        // Token might be invalid, clear it
        localStorage.removeItem('authToken');
      }
    } catch (error) {
      console.error('Failed to load user profile:', error);
      localStorage.removeItem('authToken');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiService.auth.login({ email, password });
      
      if (response.success && response.data) {
        localStorage.setItem('authToken', response.data.token);
        setUser(response.data.user);
        return true;
      } else {
        setError(response.error || 'Login failed');
        return false;
      }
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithOAuth = async (provider: 'google' | 'github' | 'linkedin'): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Open OAuth popup
      const popup = window.open(
        `${import.meta.env.VITE_API_BASE_URL}/auth/${provider}`,
        `${provider}_oauth`,
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );

      return new Promise((resolve) => {
        const handleMessage = async (event: MessageEvent) => {
          if (event.origin !== window.location.origin) return;
          
          if (event.data.type === 'oauth_success') {
            const { code } = event.data;
            
            try {
              let response;
              switch (provider) {
                case 'google':
                  response = await apiService.auth.oauth.google(code);
                  break;
                case 'github':
                  response = await apiService.auth.oauth.github(code);
                  break;
                case 'linkedin':
                  response = await apiService.auth.oauth.linkedin(code);
                  break;
                default:
                  throw new Error('Unsupported OAuth provider');
              }

              if (response.success && response.data) {
                localStorage.setItem('authToken', response.data.token);
                setUser(response.data.user);
                resolve(true);
              } else {
                setError(response.error || 'OAuth login failed');
                resolve(false);
              }
            } catch (error) {
              if (error instanceof ApiError) {
                setError(error.message);
              } else {
                setError('OAuth authentication failed');
              }
              resolve(false);
            } finally {
              setIsLoading(false);
            }
            
            window.removeEventListener('message', handleMessage);
            popup?.close();
          } else if (event.data.type === 'oauth_error') {
            setError(event.data.error || 'OAuth authentication failed');
            resolve(false);
            setIsLoading(false);
            window.removeEventListener('message', handleMessage);
            popup?.close();
          }
        };

        window.addEventListener('message', handleMessage);
      });
    } catch (error) {
      setError('Failed to initiate OAuth login');
      setIsLoading(false);
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiService.auth.register(userData);
      
      if (response.success && response.data) {
        localStorage.setItem('authToken', response.data.token);
        setUser(response.data.user);
        return true;
      } else {
        setError(response.error || 'Registration failed');
        return false;
      }
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    setError(null);
    
    try {
      const response = await apiService.auth.forgotPassword(email);
      return response.success;
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError('Failed to send reset email');
      }
      return false;
    }
  };

  const resetPassword = async (token: string, password: string): Promise<boolean> => {
    setError(null);
    
    try {
      const response = await apiService.auth.resetPassword(token, password);
      return response.success;
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError('Failed to reset password');
      }
      return false;
    }
  };

  const updateProfile = async (profileData: Partial<User>): Promise<boolean> => {
    setError(null);
    
    try {
      const response = await apiService.users.updateProfile(profileData);
      
      if (response.success && response.data) {
        setUser(response.data);
        return true;
      } else {
        setError(response.error || 'Failed to update profile');
        return false;
      }
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError('Failed to update profile');
      }
      return false;
    }
  };

  const logout = async () => {
    try {
      await apiService.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
      setError(null);
    }
  };

  const value = {
    user,
    login,
    loginWithOAuth,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    isLoading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 