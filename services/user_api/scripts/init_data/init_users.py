from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()

def init_users():
    # Create superadmin
    superadmin = User.objects.create_superuser(
        username='admin',
        email='admin@example.com',
        password='Admin123!',
        first_name='Super',
        last_name='Admin',
        role='admin',
        phone_number='+1234567890',
        company='Boiler Monitoring Inc.'
    )
    print(f'Created superadmin: {superadmin.username}')

    # Create operator user
    operator = User.objects.create_user(
        username='operator',
        email='operator@example.com',
        password='Operator123!',
        first_name='Test',
        last_name='Operator',
        role='operator',
        phone_number='+1987654321',
        company='Boiler Monitoring Inc.'
    )
    print(f'Created operator: {operator.username}')

    # Create viewer user
    viewer = User.objects.create_user(
        username='viewer',
        email='viewer@example.com',
        password='Viewer123!',
        first_name='Test',
        last_name='Viewer',
        role='viewer',
        phone_number='+1122334455',
        company='Client Company Ltd.'
    )
    print(f'Created viewer: {viewer.username}')

class Command(BaseCommand):
    help = 'Initialize the database with test users'

    def handle(self, *args, **kwargs):
        init_users()
