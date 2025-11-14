import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../lib/api-client';

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  profile?: {
    age?: number;
    healthGoals?: string[];
    symptoms?: string[];
    preferences?: {
      notifications: boolean;
      theme: 'light' | 'dark';
      language: string;
    };
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (profileData: Partial<User['profile']>) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('eirvana_token');
      
      if (token) {
        const response = await apiClient.get<User>('/api/auth/profile');
        if (response.success && response.data) {
          setUser(response.data);
        } else {
          // Invalid token, clear it
          localStorage.removeItem('eirvana_token');
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('eirvana_token');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.post<{ user: User; token: string }>('/api/auth/login', {
        email,
        password,
      });

      if (response.success && response.data) {
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem('eirvana_token', token);
        return { success: true };
      }

      return { success: false, error: response.message || 'Login failed' };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await apiClient.post<{ user: User; token: string }>('/api/auth/register', {
        email,
        password,
        name,
      });

      if (response.success && response.data) {
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem('eirvana_token', token);
        return { success: true };
      }

      return { success: false, error: response.message || 'Registration failed' };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eirvana_token');
  };

  const updateProfile = async (profileData: Partial<User['profile']>): Promise<boolean> => {
    try {
      const response = await apiClient.put<User>('/api/auth/profile', { profile: profileData });
      
      if (response.success && response.data) {
        setUser(response.data);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Profile update failed:', error);
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateProfile,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};