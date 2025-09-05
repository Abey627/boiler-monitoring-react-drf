-- Database is created automatically by Docker using POSTGRES_DB env var

-- Role is created automatically by Docker using POSTGRES_USER and POSTGRES_PASSWORD env vars

-- Connect to the user_accounts_db
\c user_accounts_db;

-- Grant schema privileges
GRANT USAGE ON SCHEMA public TO db_user_service_user_api;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO db_user_service_user_api;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO db_user_service_user_api;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public 
GRANT ALL PRIVILEGES ON TABLES TO db_user_service_user_api;

ALTER DEFAULT PRIVILEGES IN SCHEMA public 
GRANT ALL PRIVILEGES ON SEQUENCES TO db_user_service_user_api;
