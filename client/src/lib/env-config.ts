/**
 * Environment Configuration Utility
 * Centralizes environment variable access and provides type safety
 */

// Helper function to parse boolean environment variables
const parseBoolean = (value: string | undefined): boolean => {
  return value?.toLowerCase() === 'true';
};

// Helper function to parse number environment variables
const parseNumber = (value: string | undefined, defaultValue: number): number => {
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
};

// Environment Configuration
export const envConfig = {
  // API Configuration
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    timeout: parseNumber(import.meta.env.VITE_API_TIMEOUT, 10000),
    key: import.meta.env.VITE_API_KEY || '',
    version: import.meta.env.VITE_API_VERSION || 'v1',
  },

  // Application Settings
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Eirvana',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    environment: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
  },

  // Feature Flags
  features: {
    enableDebug: parseBoolean(import.meta.env.VITE_ENABLE_DEBUG),
    enableMockAuth: parseBoolean(import.meta.env.VITE_ENABLE_MOCK_AUTH),
    enableAnalytics: parseBoolean(import.meta.env.VITE_ENABLE_ANALYTICS),
    enableErrorReporting: parseBoolean(import.meta.env.VITE_ENABLE_ERROR_REPORTING),
  },

  // Authentication Settings
  auth: {
    tokenExpiry: parseNumber(import.meta.env.VITE_AUTH_TOKEN_EXPIRY, 86400000), // 24 hours
    refreshThreshold: parseNumber(import.meta.env.VITE_AUTH_REFRESH_THRESHOLD, 300000), // 5 minutes
  },

  // UI Configuration
  ui: {
    defaultTheme: import.meta.env.VITE_DEFAULT_THEME || 'light',
    enableThemeToggle: parseBoolean(import.meta.env.VITE_ENABLE_THEME_TOGGLE ?? 'true'),
    showVersionInfo: parseBoolean(import.meta.env.VITE_SHOW_VERSION_INFO),
  },

  // Development Tools
  dev: {
    enableReactDevtools: parseBoolean(import.meta.env.VITE_ENABLE_REACT_DEVTOOLS),
    enableReduxDevtools: parseBoolean(import.meta.env.VITE_ENABLE_REDUX_DEVTOOLS),
    logLevel: import.meta.env.VITE_LOG_LEVEL || 'info',
  },

  // External Services
  services: {
    sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
    mixpanelToken: import.meta.env.VITE_MIXPANEL_TOKEN || '',
  },

  // Health Check
  health: {
    checkInterval: parseNumber(import.meta.env.VITE_HEALTH_CHECK_INTERVAL, 30000),
    enabled: parseBoolean(import.meta.env.VITE_HEALTH_CHECK_ENABLED ?? 'true'),
  },

  // Environment Checks
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  isStaging: import.meta.env.VITE_APP_ENVIRONMENT === 'staging',
};

// Validation function to ensure required environment variables are set
export const validateEnvironment = () => {
  const requiredVars = [
    'VITE_API_URL',
    'VITE_APP_NAME',
    'VITE_APP_VERSION',
    'VITE_API_KEY',
  ];

  const missingVars = requiredVars.filter(varName => {
    const value = import.meta.env[varName];
    return !value || value.trim() === '';
  });

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    
    if (envConfig.isProduction) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
  }

  // Validate API key format in production
  if (envConfig.isProduction && envConfig.api.key.includes('replace-in-build')) {
    throw new Error('API key must be set for production deployment');
  }
};

// Log configuration (only in development)
export const logEnvironmentConfig = () => {
  if (envConfig.features.enableDebug && envConfig.isDevelopment) {
    console.group('🔧 Environment Configuration');
    console.table({
      'App Name': envConfig.app.name,
      'App Version': envConfig.app.version,
      'Environment': envConfig.app.environment,
      'API URL': envConfig.api.url,
      'Debug Mode': envConfig.features.enableDebug,
      'Mock Auth': envConfig.features.enableMockAuth,
      'Theme Toggle': envConfig.ui.enableThemeToggle,
      'Default Theme': envConfig.ui.defaultTheme,
    });
    console.groupEnd();
  }
};

// Export individual configurations for convenience
export const { api, app, features, auth, ui, dev, services, health } = envConfig;