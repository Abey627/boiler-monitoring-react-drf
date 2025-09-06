
# Boiler Monitoring Platform

## Overview
A comprehensive industrial boiler monitoring system built with React, Django REST Framework, and Docker. This portfolio project provides real-time monitoring, user management, and IoT integration capabilities for industrial boiler systems.

## Key Features
### Frontend
- Modern React application with Material-UI v5
- JWT-based authentication with automatic token refresh
- Role-based access control
- Industrial theme with semantic color coding
- Responsive dashboard with real-time updates
- Interactive data visualization

### Backend
- Django REST Framework with PostgreSQL
- Containerized microservices architecture
- Role-based user management (Admin, Operator, Viewer)
- Secure JWT authentication with token refresh
- Environment-based configuration
- Auto-migrations and hot-reload for development

### API Endpoints

#### User API
- POST `/api/users/register/` - New user registration
- POST `/api/users/token/` - Obtain JWT tokens
- POST `/api/users/token/refresh/` - Refresh JWT token
- GET `/api/users/me/` - Current user profile
- PUT `/api/users/me/` - Update profile
- GET `/api/users/list/` - List users (admin-only)

#### Dashboard API
- GET `/api/dashboard/boiler-data/` - Real-time boiler metrics
- GET `/api/dashboard/historical/` - Historical data with time range
- GET `/api/dashboard/alerts/` - System alerts and notifications
- POST `/api/dashboard/settings/` - Update dashboard preferences
Note: All Dashboard API endpoints use the same JWT token from User API

### Planned Features
- Dashboard API for real-time visualization
- IoT data ingestion for sensor collection
- AI analytics for predictive maintenance
- Alert management system
- IoT simulator for testing

## Architecture

### Services Architecture

#### Current Services
1. **User Management Service**
   - Django REST Framework backend
   - JWT authentication and RBAC
   - PostgreSQL database
   - Issues and manages JWT tokens for all services

2. **Dashboard API Service**
   - Django REST Framework backend
   - Reuses JWT tokens from User Management Service
   - Real-time data visualization endpoints
   - Role-based access using JWT claims
   - Dedicated PostgreSQL database for time-series data

3. **Frontend Application**
   - React 19.1 with TypeScript
   - Material-UI v5
   - Responsive dashboard
   - Single JWT token for all API communications
   - Automatic token refresh through User API

4. **Infrastructure**
   - Nginx load balancer
   - PostgreSQL databases
   - Docker containerization
   - Shared JWT secret via environment variables

#### Authentication Flow
1. Frontend authenticates with User API to obtain JWT
2. Same JWT token is used for Dashboard API requests
3. Dashboard API validates token using shared JWT secret
4. User roles and permissions extracted from JWT claims
5. Token refresh handled through User API only

## Database Architecture

### Overview
- PostgreSQL with microservices design
- Dedicated `user_accounts_db` for User API
- Role-based database access control
- Containerized for security

### Database Users
1. **Admin** (`rdms_user`): Full administrative access
2. **Service** (`db_user_service_user_api`): Limited privileges

### Security
- Environment variable-based credentials
- Containerized database access
- Service-specific permissions
- Automated initialization process


## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js
- Python 3.11+

### Quick Start
1. **Clone and Setup:**
   ```bash
   git clone https://github.com/Abey627/boiler-monitoring-react-drf.git
   cd boiler-monitoring-react-drf
   cd services && cp .env.example .env
   ```

2. **Start Services:**
   ```bash
   docker-compose up --build   # From services directory
   cd ../frontend
   npm install && npm start
   ```

3. **Access Applications:**
   - Frontend: http://localhost:3000
   - API Gateway: http://localhost
   - Database: localhost:5432 (internal only)

4. **Test Users:**
   | Role      | Username | Password    | Access Level |
   |-----------|----------|-------------|--------------|
   | Admin     | admin    | Admin123!   | Full access  |
   | Operator  | operator | Operator123!| Operations   |
   | Viewer    | viewer   | Viewer123!  | Read-only    |

### API Testing
- Import Postman collections from `postman/` directory
- Use provided test users to explore different role permissions

## Development Guide

### Project Structure
```
frontend/              # React frontend application
├── src/
│   ├── components/   # UI components
│   ├── contexts/     # State management
│   ├── routes/       # Navigation
│   ├── services/     # API integration
│   └── types/        # TypeScript definitions

services/             # Backend services
├── user_api/        # User management API
├── nginx/           # Load balancer
└── scripts/         # Initialization scripts
```

### Learning Path
1. **Backend Development:**
   - Configuration: `services/user_api/settings.py`
   - Data Models: `services/user_api/accounts/models.py`
   - API Endpoints: `services/user_api/accounts/views.py`

2. **Frontend Development:**
   - Main App: `frontend/src/App.tsx`
   - Authentication: `frontend/src/contexts/AuthContext.tsx`
   - API Client: `frontend/src/services/api.ts`

### Technologies
- React 19.1 with TypeScript 4.9
- Material-UI v5
- Django REST Framework
- PostgreSQL
- Docker & Docker Compose

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
MIT

1. **Authentication:**
   - Use the "Login (Get Token)" request with any test user credentials
   - The collection automatically saves the JWT token for other requests

2. **Testing Different Roles:**
   - Login as different users to test role-based access
   - Admin can see all users in `/api/users/`
   - Operator and Viewer can only see their own data

3. **Register New Users:**
   - Use the "Register User" request
   - Required fields: username, password, password2, email, first_name, last_name
   - Optional fields: role, phone_number, company

4. **Token Management:**
   - Access tokens expire after a set time
   - Use "Refresh Token" request to get a new access token
   - Keep your refresh token secure
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

This project is beginner-friendly and well-documented. Here's how to start learning from this codebase:

### Backend Learning Path
1. Start with `services/user_api/user_api/settings.py` to understand the Django configuration
2. Move to `services/user_api/accounts/models.py` to see how the user model is implemented
3. Explore `services/user_api/accounts/views.py` for API endpoint implementations
4. Study `services/user_api/accounts/urls.py` for URL routing

### Frontend Learning Path
1. Begin with `frontend/src/App.tsx` to understand the application structure
2. Look at `frontend/src/contexts/AuthContext.tsx` for authentication state management
3. Explore `frontend/src/services/api.ts` for API integration
4. Study the components in `frontend/src/components/` to learn React and Material-UI

### Architecture Understanding
1. Review `services/docker-compose.yml` for service orchestration
2. Study `services/nginx/nginx.conf` for API routing
3. Understand the database setup in `services/scripts/init-db.sql`

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
MIT
