#!/bin/bash

# Exit on error
set -e

# Wait for PostgreSQL
echo "Waiting for PostgreSQL..."
until (echo > /dev/tcp/db/5432) >/dev/null 2>&1; do
    echo "Postgres is unavailable - sleeping"
    sleep 1
done

echo "PostgreSQL started"

# Make migrations for the accounts app specifically
echo "Making migrations for accounts app..."
python manage.py makemigrations accounts

# Apply migrations
echo "Applying migrations..."
python manage.py migrate

# Initialize test users
echo "Initializing test users..."
python manage.py init_test_users

# Start the application
echo "Starting application..."
python manage.py runserver 0.0.0.0:8000
