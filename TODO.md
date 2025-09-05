# Project To-Do List

## Microservices Backend (Django REST Framework)

### User API (`services/user_api/`)
1. Initialize Django project for user management (registration, login, roles). [done]
2. Set up Django REST Framework. [done]
3. Implement user registration, login, and role management.
4. Add authentication (token-based or JWT).
5. Write unit tests for user endpoints.

### Dashboard API (`services/dashboard_api/`)
1. Initialize Django project for dashboard data only. [done]
2. Set up Django REST Framework. [done]
3. Build API endpoints for dashboard data.
4. Write unit tests for API endpoints.

## Frontend (React + TypeScript)
1. Clean up default React files and structure. [done]
2. Create pages/components:
   - Login/Register
   - Dashboard (real-time data, charts)
   - User profile/settings
3. Connect frontend to backend API (using Axios or Fetch).
4. Implement authentication flow (login, logout, protected routes).
5. Add data visualization (charts for dashboard data).
6. Add error handling and loading states.
7. Write comments and documentation for each component.

## IoT Simulator (planned)
1. Design a simple Python script to generate dummy boiler/sensor data.
2. Send data to backend API at regular intervals.
3. Make data realistic (temperature, pressure, etc.).
4. Document how to run and configure the simulator.

## Docker & Deployment
1. Write Dockerfile for each microservice and frontend.
2. Set up PostgreSQL service in Docker Compose. [done]
3. Create `docker-compose.yml` to run all services together.
3. Test local deployment.
4. Document deployment steps in README.

## General
1. Update README with setup and usage instructions.
2. Add code comments and docstrings.
3. Set up `.env` files for secrets/configuration.
4. Add sample data for testing/demo.
