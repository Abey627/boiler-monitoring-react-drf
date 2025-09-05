
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
   - PostgreSQL database
   - User API service
   - Dashboard API service

3. **Frontend Development:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Service URLs
- Frontend: http://localhost:3000
- User API: http://localhost:8000
- Dashboard API: http://localhost:8001
- Database: localhost:5432

### User API Usage Examples

#### 1. Register a New User
```bash
curl -X POST http://localhost:8000/api/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "operator1",
    "password": "SecurePass123!",
    "password2": "SecurePass123!",
    "email": "operator@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "role": "operator",
    "phone_number": "+1234567890",
    "company": "Acme Industries"
  }'
```

#### 2. Obtain JWT Token
```bash
curl -X POST http://localhost:8000/api/token/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "operator1",
    "password": "SecurePass123!"
  }'
```

#### 3. Get User Profile
```bash
curl http://localhost:8000/api/me/ \
  -H "Authorization: Bearer <your_jwt_token>"
```

#### 4. Update User Profile
```bash
curl -X PUT http://localhost:8000/api/me/ \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "+1234567890",
    "company": "Acme Industries Ltd"
  }'
```

#### 5. Refresh Token
```bash
curl -X POST http://localhost:8000/api/token/refresh/ \
  -H "Content-Type: application/json" \
  -d '{
    "refresh": "<your_refresh_token>"
  }'
```
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
