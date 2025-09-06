
# Boiler Monitoring Platform

## Overview
A comprehensive industrial boiler monitoring system built with React, Django REST Framework, and Docker. This portfolio project showcases real-time monitoring, user management, and IoT integration capabilities.

### Frontend Features
- **Authentication System**
  - JWT-based authentication
  - Login and registration forms
  - Automatic token refresh
  - Persistent authentication state

- **Industrial Theme System**
  - Custom theme designed for boiler monitoring
  - Industrial color palette with semantic meanings
    - Blues for primary actions
    - Orange for warnings
    - Red for critical alerts
    - Green for normal operations
  - Consistent typography and spacing
  - Smooth animations and transitions
  - Status indicators for boiler states
  - Custom scrollbars and card effects

- **User Interface**
  - Modern Material-UI components
  - Responsive design for all screen sizes
  - Role-based access control
  - Intuitive navigation
  - Interactive dashboard cards with hover effects
  - Page transition animations

### Key Features
- Real-time boiler monitoring and visualization
- Role-based access control (Admin, Operator, Viewer)
- Secure JWT authentication
- Containerized microservices architecture
- RESTful API design
	
	- **API Endpoints:**
		- POST `/api/users/register/` - New user registration
		- POST `/api/users/token/` - Obtain JWT access & refresh tokens
		- POST `/api/users/token/refresh/` - Refresh JWT token
		- GET `/api/users/me/` - Get current user profile
		- PUT `/api/users/me/` - Update current user profile
		- GET `/api/users/list/` - List users (admin-only for full list)

	- **Security Features:**
		- JWT-based authentication
		- Password hashing and validation
		- Role-based access control (RBAC)
		- Token refresh mechanism

	- **Data Model:**
		- Extended Django's AbstractUser model
		- Custom fields:
			- role (admin/operator/viewer)
			- phone_number
			- company
		
	- **Development Setup:**
		- Containerized with Docker
		- PostgreSQL database backend
		- Auto-migrations on startup
		- Hot-reload enabled for development
		
	- **Configuration:**
		- Environment-based settings
		- Secure credential management
		- Database connection pooling
		- CORS configuration for frontend integration

- **Dashboard API:**
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

## Architecture

### Current Services

#### 1. User Management Service
- Django REST Framework backend
- JWT-based authentication
- Role-based access control
- PostgreSQL database
- Key endpoints:
  - `POST /api/users/register/` - Registration
  - `POST /api/users/token/` - Authentication
  - `GET /api/users/me/` - User profile
  - `GET /api/users/list/` - User list (admin)

#### 2. Frontend Application
- React 19.1 with TypeScript
- Material-UI v5
- Features:
  - JWT authentication
  - Role-based UI
  - Responsive dashboard
  - User management interface

#### 3. Infrastructure
- Nginx load balancer (with SSL termination planned)
- PostgreSQL database
- Docker containerization

### Planned Services
- Dashboard API for real-time data visualization
- IoT data ingestion service for sensor data collection
- AI analytics processor for predictive maintenance
- Alert management system for notifications
- IoT simulator for development and testing

## Database Architecture

### Overview
The system uses PostgreSQL with a microservices-oriented design:

- **user_accounts_db**
  - Dedicated database for the User API service
  - Handles user authentication and authorization
  - Managed by the `db_user_service_user_api` role with appropriate security permissions
  - Contains Django's default auth tables and custom user-related tables

### Security Model
- Multi-layered access control
- Service-specific database users
- Environment-based configuration
- Containerized access

### Database Users
1. **RDMS User (Admin)**
   - Full administrative access
   - Database maintenance and backups
   - User: `rdms_user`
   - Role: Database Administrator

2. **Service User**
   - Limited to service-specific database
   - Minimal required privileges
   - User: `db_user_service_user_api`
   - Role: Application Service Account

#### Security Measures
- Database credentials are managed through environment variables
- Connection strings and sensitive data are stored in `.env` files (not version controlled)
- Each service connects with minimum required privileges
- Database access is containerized and not exposed to the public network

### Connection Details

#### For Application Services
- Host: PostgreSQL container (`db`)
- Port: 5432
- Database: `user_accounts_db`
- User: `db_user_service_user_api`
- Password: Managed via environment variables

#### For Database Administration
- Host: localhost (or container `db`)
- Port: 5432
- User: `rdms_user`
- Password: Managed via environment variables
- Access: All databases
- Tools: Can use database management tools like TablePlus

### Database Initialization
- Database and roles are automatically created during container startup
- Two-phase initialization process:
  1. `init-db.sql` creates service user and initial database
  2. `create_rdms_user.sql` sets up the database administrator role
- Django migrations handle schema creation and updates
- Environment-specific setup (local/production) handled through environment variables


## How to Run

### Prerequisites
- Docker and Docker Compose installed
- Node.js for frontend development
- Python 3.11+ for local development

### Setup Instructions

1. **Environment Setup:**
   ```bash
   # Clone the repository
   git clone https://github.com/Abey627/boiler-monitoring-react-drf.git
   cd boiler-monitoring-react-drf

   # Copy environment template
   cd services
   cp .env.example .env
   # Edit .env with your desired configuration
   ```

2. **Start Backend Services:**
   ```bash
   # From the services directory
   docker-compose up --build
   ```
   This will start:
   - Nginx load balancer
   - PostgreSQL database
   - User API service
   - Initialize test users for development

3. **Start Frontend Application:**
   ```bash
   # From the frontend directory
   npm install
   npm start
   ```
   The frontend will be available at http://localhost:3000

3. **Import Postman Collection:**
   - Import `postman/Boiler_Monitoring_API.postman_collection.json`
   - Import `postman/Boiler_Monitoring_Environment.postman_environment.json`
   - Select the "Boiler Monitoring Environment" in Postman

4. **Ready to Test:**
   - The system will initialize with pre-configured test users
   - See [Test Users](#test-users) section for credentials and capabilities
   - Use these accounts to test different role permissions

### Service URLs
- Frontend: http://localhost:3000
- API Gateway (Nginx): http://localhost
- Database: localhost:5432 (internal only)

### Frontend Application

The frontend is built with React, TypeScript, and Material-UI, providing a modern and responsive user interface.

#### Features
- **Authentication System**
  - JWT-based authentication
  - Login and registration forms
  - Automatic token refresh
  - Persistent authentication state

- **User Interface**
  - Modern Material-UI components
  - Responsive design for all screen sizes
  - Role-based access control
  - Intuitive navigation

- **Dashboard**
  - User information overview
  - Role-specific content
  - Interactive cards with hover effects
  - Real-time updates

- **User Management**
  - User list with search functionality (admin only)
  - User profile management
  - Role-based permissions
  - Responsive data tables

#### Frontend Setup

1. **Install Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Environment Setup:**
   ```bash
   # Create .env file
   echo "REACT_APP_API_URL=http://localhost/api" > .env
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

#### Frontend Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx      # Main dashboard view
│   │   ├── Layout.tsx         # Application layout with navigation
│   │   ├── LoginForm.tsx      # User login form
│   │   ├── RegisterForm.tsx   # User registration form
│   │   ├── UserList.tsx       # User management (admin only)
│   │   └── UserProfile.tsx    # User profile management
│   ├── contexts/
│   │   └── AuthContext.tsx    # Authentication state management
│   ├── routes/
│   │   └── AppRoutes.tsx      # Application routing
│   ├── services/
│   │   └── api.ts            # API service integration
│   ├── types/
│   │   └── auth.ts           # TypeScript type definitions
│   └── App.tsx               # Root component
```

#### Key Technologies
- React 19.1
- TypeScript 4.9
- Material-UI v5
- React Router v6
- JWT Authentication

## Development Guide

### Test Users
| Role      | Username | Password    | Capabilities |
|-----------|----------|-------------|--------------|
| Admin     | admin    | Admin123!   | Full system access, user management |
| Operator  | operator | Operator123!| Operation functions, self-management |
| Viewer    | viewer   | Viewer123!  | Read-only access, self-management |

### Project Structure
```
frontend/
├── src/
│   ├── components/    # UI components
│   ├── contexts/      # State management
│   ├── routes/        # Navigation
│   ├── services/      # API integration
│   ├── theme/         # Theme configuration and styles
│   └── types/         # TypeScript definitions

services/
├── user_api/         # User management service
├── nginx/            # Load balancer
└── scripts/          # Database initialization
```

These users are automatically created when you start the services and can be used to test different permission levels and functionality in the system.

### Learning Path
1. **Backend:**
   - Start: `services/user_api/settings.py`
   - Models: `services/user_api/accounts/models.py`
   - APIs: `services/user_api/accounts/views.py`

2. **Frontend:**
   - Entry: `frontend/src/App.tsx`
   - Auth: `frontend/src/contexts/AuthContext.tsx`
   - API: `frontend/src/services/api.ts`

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
