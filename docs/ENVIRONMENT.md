# Environment Configuration

This project uses environment variables to configure different aspects of the application for different environments (development, staging, production).

## Environment Files

- `.env.development` - Development environment settings (committed)
- `.env.production` - Production environment settings (committed)
- `.env.staging` - Staging environment settings (committed)
- `.env.local` - Local overrides (not committed, create from .env.local.example)

## Available Variables

### API Configuration
- `VITE_API_URL` - Backend API base URL

- `VITE_API_TIMEOUT` - API request timeout in milliseconds

### Application Settings
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version
- `VITE_APP_ENVIRONMENT` - Environment identifier

### Feature Flags
- `VITE_ENABLE_DEBUG` - Enable debug logging and tools
- `VITE_ENABLE_MOCK_AUTH` - Use mock authentication (development)
- `VITE_ENABLE_ANALYTICS` - Enable analytics tracking
- `VITE_ENABLE_ERROR_REPORTING` - Enable error reporting to external services

### Authentication Settings
- `VITE_AUTH_TOKEN_EXPIRY` - Token expiration time in milliseconds
- `VITE_AUTH_REFRESH_THRESHOLD` - Token refresh threshold in milliseconds

### UI Configuration
- `VITE_DEFAULT_THEME` - Default theme (light/dark)
- `VITE_ENABLE_THEME_TOGGLE` - Allow theme switching
- `VITE_SHOW_VERSION_INFO` - Show version information in UI

### Development Tools
- `VITE_ENABLE_REACT_DEVTOOLS` - Enable React DevTools
- `VITE_ENABLE_REDUX_DEVTOOLS` - Enable Redux DevTools
- `VITE_LOG_LEVEL` - Logging level (debug, info, warn, error)

### External Services
- `VITE_SENTRY_DSN` - Sentry error reporting DSN
- `VITE_GOOGLE_ANALYTICS_ID` - Google Analytics tracking ID
- `VITE_MIXPANEL_TOKEN` - Mixpanel analytics token

### Health Check
- `VITE_HEALTH_CHECK_INTERVAL` - Health check interval in milliseconds
- `VITE_HEALTH_CHECK_ENABLED` - Enable health checking

## Usage

### In Code
```typescript
import { envConfig } from '@/lib/env-config';

// Access configuration
const apiUrl = envConfig.api.url;
const isDebugMode = envConfig.features.enableDebug;
const appName = envConfig.app.name;
```

### Local Development
1. Copy `.env.local.example` to `.env.local`
2. Modify variables as needed for your local setup
3. The `.env.local` file will override other environment files

### Deployment
- **Development**: Uses `.env.development` automatically
- **Staging**: Set `NODE_ENV=staging` or use build command with staging config
- **Production**: Uses `.env.production` when building for production

## Environment Precedence
Vite loads environment variables in this order (higher priority overrides lower):
1. `.env.local` (always ignored by git)
2. `.env.[mode].local` (mode-specific, ignored by git)
3. `.env.[mode]` (mode-specific)
4. `.env`

## Security Notes
- Never commit sensitive data like API keys to environment files that are tracked by git
- Use `.env.local` for sensitive local development variables
- In production, set sensitive environment variables through your hosting platform
- All `VITE_` prefixed variables are exposed to the client-side code

## Validation
The application validates required environment variables on startup and will:
- Log warnings for missing optional variables in development
- Throw errors for missing required variables in production
- Display environment configuration in development console