-- PostgreSQL commands to set up RDMS user and databases
-- WARNING: Replace 'your_secure_password_here' with a secure password before running

-- Create additional user if doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'rdms_user') THEN
        -- Create RDMS user with superuser privileges for full database administration
        CREATE ROLE rdms_user WITH 
            LOGIN 
            PASSWORD 'Rdms#2025@SecureDB!Pass'
            SUPERUSER    -- Can do anything
            CREATEDB    -- Can create databases
            CREATEROLE  -- Can create/alter/drop roles
            REPLICATION -- Can initiate streaming replication
            BYPASSRLS;  -- Can bypass row-level security
    END IF;
END$$;

-- Additional safety measure: ensure the role has all privileges on the default database
GRANT ALL PRIVILEGES ON DATABASE user_accounts_db TO rdms_user;

-- Note: Run this script manually when PostgreSQL is up using:
-- psql -U postgres -f create_rdms_user.sql
