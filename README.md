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
- **Frontend:** React (TypeScript) — Modern, interactive user interface for monitoring and visualization.
- **Backend:** Django REST Framework — Secure API for user management, boiler data, and alerts.
- **IoT Simulator:** Generates dummy boiler data to simulate real-world sensor readings.
- **Docker:** Containerized setup for easy deployment and development.

## Technologies Used
- React (TypeScript)
- Django REST Framework
- Docker
- Python
- Node.js

## Folder Structure
- `frontend/` — React + TypeScript web app
- `backend/` — Django REST Framework API
- `iot_simulator/` — Dummy data generator for boiler sensors
- `docker/` — Docker configuration files

## How to Run
1. **Frontend:**
	- Navigate to `frontend` folder
	- Run `npm install` to install dependencies
	- Run `npm start` to launch the React app
2. **Backend:**
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
