
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


# Boiler Monitoring Platform

## Purpose
This project is designed to help monitor industrial boilers in real-time. It provides a user-friendly web interface for viewing boiler status, alerts, and historical data. The platform is built as a portfolio project to showcase skills in React, Django REST Framework, Docker, and IoT simulation.


## How to Run
1. **Frontend:**
	- Navigate to `frontend` folder
	- Run `npm install` to install dependencies
	- Run `npm start` to launch the React app
2. **Frontend User API:**
	- Navigate to `services/frontend_user_api` folder
	- Set up a Python environment and install Django/DRF
	- Run Django server
3. **Frontend API:**
	- Navigate to `services/frontend_api` folder
	- Set up a Python environment and install Django/DRF
	- Run Django server
4. **IoT Simulator:**
	- Navigate to `iot_simulator` folder
	- Run the simulator script to generate data (planned)
5. **Docker:**
	- Use Docker Compose to run all services together
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
