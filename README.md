
## Main Modules


- **User API Service Architecture:**
	- Built with Django REST Framework for secure user management
	- **Core Components:**
		- Custom User Model with role-based access (admin, operator, viewer)
		- JWT (JSON Web Token) Authentication
		- RESTful API endpoints
	
	- **API Endpoints:**
		- POST `/api/register/` - New user registration
		- POST `/api/token/` - Obtain JWT access & refresh tokens
		- POST `/api/token/refresh/` - Refresh JWT token
		- GET `/api/me/` - Get current user profile
		- PUT `/api/me/` - Update current user profile
		- GET `/api/users/` - List users (admin-only for full list)

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

## Architecture Overview

### Current Implementation
- **Load Balancer (Nginx)**
  - Routes API requests to appropriate services
  - Handles SSL termination (planned)
  - Manages URL normalization and request preprocessing
  - Health checks for backend services

- **User Management Service**
  - Built with Django REST Framework
  - JWT-based authentication
  - Role-based access control (admin, operator, viewer)
  - PostgreSQL database backend

### Planned Services
- Dashboard API
- IoT Data Ingestion
- AI Analytics Processor
- Alert Management
- IoT Simulator

## Database Architecture

### Database Overview
The system uses PostgreSQL for data storage with a microservices-oriented database design:

- **user_accounts_db**
  - Dedicated database for the User API service
  - Handles user authentication and authorization
  - Managed by the `db_user_service_user_api` role with appropriate security permissions
  - Contains Django's default auth tables and custom user-related tables

### Database Security

The system implements a multi-layered security approach with different database users for different purposes:

#### Database Users/Roles

1. **RDMS User (Database Administrator)**
   - Username: `rdms_user`
   - Purpose: Database administration and management
   - Privileges:
     - SUPERUSER privileges (full administrative access)
     - Can create/modify/delete databases
     - Can create/modify/delete roles
     - Can manage replication
     - Can bypass row-level security
   - Use cases:
     - Database maintenance and administration
     - Managing database users and permissions
     - Creating new databases for services
     - Performing backups and restorations

2. **User API Service User**
   - Username: `db_user_service_user_api`
   - Purpose: Dedicated user for User API microservice
   - Privileges:
     - Limited to `user_accounts_db`
     - Full access to auth-related tables
     - Can create/modify tables through Django migrations
   - Use cases:
     - User authentication and authorization
     - Managing user profiles and settings
     - Handling role-based access control

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

2. **Start Services:**
   ```bash
   # From the services directory
   docker-compose up --build
   ```
   This will start:
   - Nginx load balancer
   - PostgreSQL database
   - User API service
   - Initialize test users for development

3. **Import Postman Collection:**
   - Import `postman/Boiler_Monitoring_API.postman_collection.json`
   - Import `postman/Boiler_Monitoring_Environment.postman_environment.json`
   - Select the "Boiler Monitoring Environment" in Postman

4. **Ready to Test:**
   - The system will initialize with pre-configured test users
   - See [Test Users](#test-users) section for credentials and capabilities
   - Use these accounts to test different role permissions

### Service URLs
- Frontend: http://localhost:3000 (planned)
- API Gateway (Nginx): http://localhost
- Database: localhost:5432 (internal only)

### Test Users

The system is pre-configured with three test users representing different roles:

#### 1. Administrator
- **Username:** `admin`
- **Password:** `Admin123!`
- **Email:** `admin@example.com`
- **Role:** admin
- **Capabilities:**
  - View and manage all users
  - Access all API endpoints
  - View system-wide information
  - Full administrative privileges

#### 2. Operator
- **Username:** `operator`
- **Password:** `Operator123!`
- **Email:** `operator@example.com`
- **Role:** operator
- **Capabilities:**
  - View own profile
  - Update own information
  - Limited to operator-specific functions

#### 3. Viewer
- **Username:** `viewer`
- **Password:** `Viewer123!`
- **Email:** `viewer@example.com`
- **Role:** viewer
- **Capabilities:**
  - View own profile
  - Update own information
  - Read-only access to permitted resources

These users are automatically created when you start the services and can be used to test different permission levels and functionality in the system.

### API Endpoints

All API endpoints are accessed through the Nginx load balancer at `http://localhost`.

#### Authentication Endpoints
- `POST /api/register/` - Register new user
- `POST /api/token/` - Get JWT access & refresh tokens
- `POST /api/token/refresh/` - Refresh JWT token

#### User Management Endpoints
- `GET /api/me/` - Get current user profile
- `PUT /api/me/` - Update current user profile
- `GET /api/users/` - List all users (admin only)

### Using the Postman Collection

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
This project is beginner-friendly. All code is commented in detail. Start with the frontend (`frontend/src/App.tsx` and `frontend/src/index.tsx`) to learn React basics.

## License
MIT
