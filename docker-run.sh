#!/bin/bash

# Docker Development Script for Eirvana Frontend
# This script provides easy commands to run the app in Docker

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Help function
show_help() {
    echo "Eirvana Frontend Docker Manager"
    echo ""
    echo "Usage: ./docker-run.sh [command]"
    echo ""
    echo "Commands:"
    echo "  dev           Start development environment with hot reload"
    echo "  prod          Build and run production environment"
    echo "  build         Build Docker images"
    echo "  stop          Stop all containers"
    echo "  clean         Clean up containers and images"
    echo "  logs          Show container logs"
    echo "  shell         Open shell in development container"
    echo "  health        Check container health"
    echo "  help          Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  VITE_API_URL           Backend API URL (default: http://localhost:4000)"
    echo "  FRONTEND_DEV_PORT      Development port (default: 5173)"
    echo "  FRONTEND_PROD_PORT     Production port (default: 8080)"
}

# Development environment
start_dev() {
    print_status "Starting development environment..."
    
    # Check if .env.development exists and validate API key
    if [ -f .env.development ]; then
        print_status "Loading development environment variables..."
        
        # Check for API key
        if ! grep -q "VITE_API_KEY=" .env.development || grep -q "VITE_API_KEY=your-api-key-here" .env.development; then
            print_error "API key not configured in .env.development"
            print_status "Please set VITE_API_KEY to a valid API key in .env.development"
            exit 1
        fi
        
        export $(cat .env.development | grep -v '^#' | xargs)
        print_success "Environment variables loaded from .env.development"
    else
        print_warning ".env.development not found, using default environment"
        
        # Copy environment file if it doesn't exist
        if [ ! -f .env ]; then
            print_warning ".env file not found, copying from .env.local.example"
            if [ -f .env.local.example ]; then
                cp .env.local.example .env
                print_warning "Please update .env with your actual API key"
            fi
        fi
    fi
    
    # Start development containers
    docker-compose --profile development up -d frontend-dev
    
    print_success "Development environment started!"
    print_status "Frontend available at: http://localhost:${FRONTEND_DEV_PORT:-5173}"
    print_status "To view logs: ./docker-run.sh logs"
}

# Production environment
start_prod() {
    print_status "Building and starting production environment..."
    
    # Check if .env.production exists and validate API key
    if [ -f .env.production ]; then
        print_status "Loading production environment variables..."
        
        # Check for API key
        if ! grep -q "VITE_API_KEY=" .env.production || grep -q "VITE_API_KEY=your-api-key-here" .env.production; then
            print_error "API key not configured in .env.production"
            print_status "Please set VITE_API_KEY to a valid API key in .env.production"
            exit 1
        fi
        
        # Additional validation for production
        api_key=$(grep "VITE_API_KEY=" .env.production | cut -d '=' -f2)
        if [[ ${#api_key} -lt 32 ]]; then
            print_error "Production API key seems too short (less than 32 characters)"
            exit 1
        fi
        
        export $(cat .env.production | grep -v '^#' | xargs)
        print_success "Production environment variables loaded"
    else
        print_error ".env.production not found"
        print_status "Please create .env.production with required variables"
        exit 1
    fi
    
    # Build production image
    docker-compose --env-file .env.production build frontend-prod
    
    # Start production container
    docker-compose --env-file .env.production --profile production up -d frontend-prod
    
    print_success "Production environment started!"
    print_status "Frontend available at: http://localhost:${FRONTEND_PROD_PORT:-8080}"
}

# Build images
build_images() {
    print_status "Building Docker images..."
    docker-compose build
    print_success "Images built successfully!"
}

# Stop containers
stop_containers() {
    print_status "Stopping all containers..."
    docker-compose down
    print_success "All containers stopped!"
}

# Clean up
cleanup() {
    print_status "Cleaning up containers and images..."
    
    # Stop and remove containers
    docker-compose down --remove-orphans
    
    # Remove images
    docker image prune -f
    
    # Remove unused volumes
    docker volume prune -f
    
    print_success "Cleanup completed!"
}

# Show logs
show_logs() {
    if [ "$2" ]; then
        docker-compose logs -f "$2"
    else
        docker-compose logs -f
    fi
}

# Open shell
open_shell() {
    print_status "Opening shell in development container..."
    docker-compose exec frontend-dev sh
}

# Health check
check_health() {
    print_status "Checking container health..."
    
    # Check development container
    if docker-compose ps frontend-dev | grep -q "Up"; then
        print_success "Development container is running"
        curl -f http://localhost:${FRONTEND_DEV_PORT:-5173} > /dev/null 2>&1 && \
            print_success "Development frontend is responding" || \
            print_warning "Development frontend is not responding"
    fi
    
    # Check production container
    if docker-compose ps frontend-prod | grep -q "Up"; then
        print_success "Production container is running"
        curl -f http://localhost:${FRONTEND_PROD_PORT:-8080}/health > /dev/null 2>&1 && \
            print_success "Production frontend is healthy" || \
            print_warning "Production frontend health check failed"
    fi
}

# Main script logic
case "$1" in
    dev)
        start_dev
        ;;
    prod)
        start_prod
        ;;
    build)
        build_images
        ;;
    stop)
        stop_containers
        ;;
    clean)
        cleanup
        ;;
    logs)
        show_logs "$@"
        ;;
    shell)
        open_shell
        ;;
    health)
        check_health
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac