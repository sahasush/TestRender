#!/bin/bash

# Frontend Repository Setup Script

echo "🚀 Setting up Eirvana Frontend Repository..."

# Create necessary directories
mkdir -p src/components src/pages src/lib src/hooks public

# Copy client source if it exists
if [ -d "../../client" ]; then
    echo "📁 Copying client source code..."
    cp -r ../../client/* ./
else
    echo "⚠️  Client source not found - you may need to manually copy the frontend code"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
echo "🔧 Creating .env file..."
cat > .env << EOF
VITE_API_URL=http://localhost:4000
NODE_ENV=development
EOF

# Create .gitignore
echo "📝 Creating .gitignore..."
cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build output
dist/
build/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Cache
.cache/
*.tsbuildinfo
EOF

echo "✅ Frontend repository setup complete!"
echo "📋 Next steps:"
echo "   1. Update VITE_API_URL in .env to point to your API"
echo "   2. Run 'npm run dev' to start development server"
echo "   3. Run 'npm run build' to build for production"