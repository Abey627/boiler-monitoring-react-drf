
-- Create database if it does not exist
DO $$
BEGIN
	IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'user_api_db') THEN
		CREATE DATABASE user_api_db OWNER user_account;
	END IF;
END$$;

GRANT ALL PRIVILEGES ON DATABASE user_api_db TO user_account;
