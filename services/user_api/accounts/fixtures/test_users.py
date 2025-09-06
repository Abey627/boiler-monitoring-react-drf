from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

TEST_USERS = [
    {
        'username': 'admin',
        'email': 'admin@example.com',
        'password': 'Admin123!',
        'first_name': 'Super',
        'last_name': 'Admin',
        'role': 'admin',
        'phone_number': '+1234567890',
        'company': 'Boiler Monitoring Inc.',
        'is_superuser': True,
        'is_staff': True
    },
    {
        'username': 'operator',
        'email': 'operator@example.com',
        'password': 'Operator123!',
        'first_name': 'Test',
        'last_name': 'Operator',
        'role': 'operator',
        'phone_number': '+1987654321',
        'company': 'Boiler Monitoring Inc.',
        'is_superuser': False,
        'is_staff': False
    },
    {
        'username': 'viewer',
        'email': 'viewer@example.com',
        'password': 'Viewer123!',
        'first_name': 'Test',
        'last_name': 'Viewer',
        'role': 'viewer',
        'phone_number': '+1122334455',
        'company': 'Client Company Ltd.',
        'is_superuser': False,
        'is_staff': False
    }
]
