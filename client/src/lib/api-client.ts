const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';


// 🟢 ADD THIS LOGGING
if (!API_BASE_URL) {
    console.error("CRITICAL ERROR: API_BASE_URL is not set. Requests will fail.");
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor() {
    this.baseURL = API_BASE_URL.replace(/\/$/, '');
	console.log(`[DEBUG] ApiClient Base URL set to: ${this.baseURL}`);
    
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    // Add API key to headers if available (using lowercase x-api-key)
    const apiKey = import.meta.env.VITE_PUBLIC_API_KEY;
    if (apiKey) {
      this.defaultHeaders['x-api-key'] = apiKey;
    }
  }

  /**
   * Get authorization headers including JWT token if available
   */
  private getAuthHeaders(): Record<string, string> {
    const headers = { ...this.defaultHeaders };
    
    // Add JWT token if available
    const token = localStorage.getItem('eirvana_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Make HTTP request with error handling
   */
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      ...this.getAuthHeaders(),
      ...options.headers,
    };

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
		let data: any = {};
		
		const isNoContent = response.status === 204;
    //  const data = await response.json();

		if (!isNoContent) {
          try {
              // Attempt to parse JSON
              data = await response.json();
          } catch (e) {
              // Handle non-JSON or empty body (e.g., if server sent 200 with empty body)
              console.warn(`Could not parse JSON for ${url}. Response status: ${response.status}`, e);
          }
      }
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }

      return {
        data,
        message: data.message,
        success: true,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Network error';
      return {
        data: null as T,
        message: errorMessage,
        success: false,
      };
    }
  }

  // HTTP Methods
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: 'DELETE' });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
