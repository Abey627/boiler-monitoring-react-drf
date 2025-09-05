-- PostgreSQL commands to set up RDMS user and databases
-- WARNING: Replace 'your_secure_password_here' with a secure password before running

-- Create additional user if doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'rdms_user') THEN
        -- Replace 'your_secure_password_here' with an actual secure password
        CREATE ROLE rdms_user WITH LOGIN PASSWORD 'your_secure_password_here';
    END IF;
END$$;

-- Create additional database if it doesn't exist
CREATE DATABASE user_accounts_db;

-- Grant necessary privileges
GRANT ALL PRIVILEGES ON DATABASE user_api_db TO rdms_user;
GRANT ALL PRIVILEGES ON DATABASE user_accounts_db TO rdms_user;

-- Note: Run this script manually when PostgreSQL is up using:
-- psql -U postgres -f create_rdms_user.sql
