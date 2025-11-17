// API Configuration
// This file centralizes API URL configuration for different environments

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

// In development, if no API URL is set, default to relative URLs (same-origin)
// In production, VITE_API_URL should be set to your production domain
const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  if (API_BASE_URL) {
    return `${API_BASE_URL}/${cleanEndpoint}`;
  }
  
  // Fallback to relative URL (same-origin request)
  return `/${cleanEndpoint}`;
};

// Export the API URL getter
export { getApiUrl, API_BASE_URL };

// Get environment info
export const getEnvironmentInfo = () => {
  const isDevelopment = import.meta.env.DEV;
  const isProduction = import.meta.env.PROD;
  const environment = import.meta.env.MODE || 'development';

  return {
    baseUrl: API_BASE_URL,
    environment,
    isDevelopment,
    isProduction,
    timeout: 10000, // 10 seconds default timeout
  };
};

// Debug API configuration (only in development)
export const logApiConfig = () => {
  if (import.meta.env.DEV) {
    const config = getEnvironmentInfo();
    console.log('🔧 API Configuration:');
    console.log(`   Base URL: ${config.baseUrl}`);
    console.log(`   Environment Mode: ${config.environment}`);
    console.log(`   Is Development: ${config.isDevelopment}`);
    console.log(`   Is Production: ${config.isProduction}`);
    console.log(`   API Timeout: ${config.timeout}ms`);
  }
};