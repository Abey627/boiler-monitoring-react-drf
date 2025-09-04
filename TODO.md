# Project To-Do List

## Backend (Django REST Framework)
1. Initialize Django project in `backend` folder.
2. Set up Django REST Framework.
3. Create user management (registration, login, roles).
4. Design models for boiler, sensor, and alerts.
5. Build API endpoints for:
   - User management
   - Boiler data (CRUD)
   - Sensor data (CRUD)
   - Alerts (CRUD)
6. Add authentication (token-based or JWT).
7. Write unit tests for API endpoints.

## Frontend (React + TypeScript)
1. Clean up default React files and structure.
2. Create pages/components:
   - Login/Register
   - Dashboard (real-time data, charts)
   - Boiler details
   - Alerts/notifications
   - User profile/settings
3. Connect frontend to backend API (using Axios or Fetch).
4. Implement authentication flow (login, logout, protected routes).
5. Add data visualization (charts for sensor data).
6. Add error handling and loading states.
7. Write comments and documentation for each component.

## IoT Simulator
1. Design a simple Python script to generate dummy boiler/sensor data.
2. Send data to backend API at regular intervals.
3. Make data realistic (temperature, pressure, etc.).
4. Document how to run and configure the simulator.

## Docker & Deployment
1. Write Dockerfile for backend and frontend.
2. Create `docker-compose.yml` to run all services together.
3. Test local deployment.
4. Document deployment steps in README.

## General
1. Update README with setup and usage instructions.
2. Add code comments and docstrings.
3. Set up `.env` files for secrets/configuration.
4. Add sample data for testing/demo.
