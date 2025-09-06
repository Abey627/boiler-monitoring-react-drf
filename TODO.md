# Project To-Do List

## Microservices Backend (Django REST Framework)

### User API (`services/user_api/`)
1. Initialize Django project for user management (registration, login, roles). [done]
2. Set up Django REST Framework. [done]
3. Set up database and user roles (RDMS). [done]
4. Implement user registration, login, and role management. [done]
5. Add authentication (token-based or JWT). [done]
6. Write unit tests for user endpoints. [done]

### Dashboard API (`services/dashboard_api/`)
1. Initialize Django project for dashboard data only. [done]
2. Set up Django REST Framework. [done]
3. Set up database access and permissions. [done]
4. Build API endpoints for dashboard data.
5. Write unit tests for API endpoints.

## Frontend (React + TypeScript)
1. Clean up default React files and structure. [done]
2. Create pages/components:
   - Login/Register [done]
   - Dashboard layout and user info [done]
   - User profile/settings [done]
   - User management for admins [done]
   - Dashboard charts and real-time data
3. Connect frontend to backend API (using Fetch). [done]
4. Implement authentication flow:
   - JWT-based authentication [done]
   - Protected routes [done]
   - Token refresh mechanism [done]
   - Logout functionality [done]
5. Add data visualization (charts for dashboard data):
   - Temperature charts
   - Pressure monitoring
   - Historical data view
6. Add error handling and loading states:
   - Form validations [done]
   - API error handling [done]
   - Loading indicators [done]
   - User feedback messages [done]
7. Material-UI Integration:
   - Responsive layout [done]
   - Theme customization [done]
   - Component styling [done]
8. Write comments and documentation:
   - Component documentation [done]
   - API service documentation [done]
   - Type definitions [done]
   - README updates [done]

## IoT Simulator (planned)
1. Design a simple Python script to generate dummy boiler/sensor data.
2. Send data to backend API at regular intervals.
3. Make data realistic (temperature, pressure, etc.).
4. Document how to run and configure the simulator.

## Docker & Deployment
1. Write Dockerfile:
   - User API service [done]
   - Dashboard API service [done]
   - Frontend application
   - IoT simulator
2. Set up PostgreSQL service in Docker Compose. [done]
3. Create `docker-compose.yml`:
   - Backend services configuration [done]
   - Frontend service integration
   - Development environment setup [done]
   - Production environment setup
4. Test deployments:
   - Local development environment [done]
   - Production build testing
   - Cross-service communication [done]
5. Documentation:
   - Development setup guide [done]
   - Production deployment guide
   - Environment configuration
   - Troubleshooting guide

## General
1. Update README:
   - Backend setup and usage [done]
   - Frontend setup and usage [done]
   - Project structure documentation [done]
   - Learning path guidelines [done]
2. Add code comments and docstrings:
   - Backend code documentation [done]
   - Frontend component documentation [done]
   - TypeScript type definitions [done]
3. Set up `.env` files for secrets/configuration:
   - Backend environment variables [done]
   - Frontend environment variables [done]
   - Development/production configurations [done]
4. Add sample data:
   - Test users for different roles [done]
   - Sample dashboard data
   - Testing/demo data sets
5. Set up database users and roles (RDMS user). [done]
6. Cross-browser testing:
   - Chrome
   - Firefox
   - Edge
7. Performance optimization:
   - Code splitting
   - Lazy loading
   - Image optimization
8. Accessibility improvements:
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
