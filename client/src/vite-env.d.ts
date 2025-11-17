/// <reference types="vite/client" />

interface ImportMetaEnv {
  // API Configuration
  readonly VITE_API_URL: string;
  readonly VITE_API_TIMEOUT: string;
  
  readonly VITE_API_BASE_URL: string;
  readonly VITE_PUBLIC_API_KEY: string;

  // Application Settings
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENVIRONMENT: string;

  // Feature Flags
  readonly VITE_ENABLE_DEBUG: string;
  readonly VITE_ENABLE_MOCK_AUTH: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_ERROR_REPORTING: string;

  // Authentication Settings
  readonly VITE_AUTH_TOKEN_EXPIRY: string;
  readonly VITE_AUTH_REFRESH_THRESHOLD: string;

  // UI Configuration
  readonly VITE_DEFAULT_THEME: string;
  readonly VITE_ENABLE_THEME_TOGGLE: string;
  readonly VITE_SHOW_VERSION_INFO: string;

  // Development Tools
  readonly VITE_ENABLE_REACT_DEVTOOLS: string;
  readonly VITE_ENABLE_REDUX_DEVTOOLS: string;
  readonly VITE_LOG_LEVEL: string;

  // External Services
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
  readonly VITE_MIXPANEL_TOKEN: string;

  // Health Check
  readonly VITE_HEALTH_CHECK_INTERVAL: string;
  readonly VITE_HEALTH_CHECK_ENABLED: string;

  // Standard Vite Environment Variables
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}