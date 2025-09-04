## Main Modules

- **User Management:**
	- Register, login, and manage users securely using Django REST Framework.
	- Role-based access for different user types (e.g., admin, operator).

- **Dashboard:**
	- Real-time visualization of boiler status and sensor data.
	- Display alerts, trends, and historical data.

- **IoT Simulator:**
	- Generates dummy boiler sensor data for development and testing.
	- Simulates temperature, pressure, and other key metrics.

- **API Backend:**
	- RESTful endpoints for frontend communication.
	- Handles data storage, retrieval, and business logic.

- **Docker Setup:**
	- Containerized services for easy deployment and local development.


# Boiler Monitoring Platform

## Purpose
This project is designed to help monitor industrial boilers in real-time. It provides a user-friendly web interface for viewing boiler status, alerts, and historical data. The platform is built as a portfolio project to showcase skills in React, Django REST Framework, Docker, and IoT simulation.

## Architecture
## Architecture
- **Nginx:** Reverse proxy and load balancer (planned)
- **Frontend User API (`services/frontend_user_api/`):** Django REST Framework microservice for user management (registration, login, roles, authentication)
- **Frontend API (`services/frontend_api/`):** Django REST Framework microservice for dashboard data only
- **IoT Ingestion (`services/iot_ingestion/`):** Real-time sensor data collection (planned)
- **AI Processor (`services/ai_processor/`):** Analytics and predictive algorithms (planned)
- **Alert Service (`services/alert_service/`):** Notification management (planned)
- **IoT Simulator:** Generates dummy boiler data to simulate real-world sensor readings (planned)
- **Docker:** Containerized setup for easy deployment and development

## Folder Structure
- `frontend/` — React + TypeScript web app
- `services/frontend_user_api/` — Django REST Framework microservice for user management
- `services/frontend_api/` — Django REST Framework microservice for dashboard data only
- `services/iot_ingestion/` — Real-time sensor data collection (planned)
- `services/ai_processor/` — Analytics and predictive algorithms (planned)
- `services/alert_service/` — Notification management (planned)
- `iot_simulator/` — Dummy data generator for boiler sensors (planned)
- `docker/` — Docker configuration files

## Folder Structure
- `backend/` — Django REST Framework API
- `iot_simulator/` — Dummy data generator for boiler sensors

## How to Run
	- Navigate to `frontend` folder
	- Run `npm install` to install dependencies
2. **Backend:**
## Main Modules
- **Frontend User API:**
	- Register, login, and manage users securely using Django REST Framework.
	- Role-based access for different user types (e.g., admin, operator).
	- Runs independently for performance and reliability.

- **Frontend API:**
	- RESTful endpoints for dashboard data only.
	- Real-time visualization and historical data management.

- **IoT Ingestion:**
	- Real-time sensor data collection (planned).

- **AI Processor:**
	- Analytics and predictive algorithms (planned).

- **Alert Service:**
	- Notification management (planned).

- **IoT Simulator:**
	- Generates dummy boiler sensor data for development and testing (planned).

- **Docker Setup:**
	- Containerized services for easy deployment and local development.
	- Navigate to `backend` folder
	- Set up a Python environment and install Django/DRF
	- Run Django server
3. **IoT Simulator:**
	- Navigate to `iot_simulator` folder
	- Run the simulator script to generate data
4. **Docker:**
	- Use Docker Compose to run all services together

## Getting Started
This project is beginner-friendly. All code is commented in detail. Start with the frontend (`frontend/src/App.tsx` and `frontend/src/index.tsx`) to learn React basics.

## License
MIT
