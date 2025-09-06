from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = 'Initialize test users'

    def handle(self, *args, **kwargs):
        # Create admin user
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@example.com',
                password='Admin123!',
                first_name='Super',
                last_name='Admin',
                role='admin',
                phone_number='+1234567890',
                company='Boiler Monitoring Inc.'
            )
            self.stdout.write(self.style.SUCCESS('Successfully created admin user'))

        # Create operator user
        if not User.objects.filter(username='operator').exists():
            User.objects.create_user(
                username='operator',
                email='operator@example.com',
                password='Operator123!',
                first_name='Test',
                last_name='Operator',
                role='operator',
                phone_number='+1987654321',
                company='Boiler Monitoring Inc.'
            )
            self.stdout.write(self.style.SUCCESS('Successfully created operator user'))

        # Create viewer user
        if not User.objects.filter(username='viewer').exists():
            User.objects.create_user(
                username='viewer',
                email='viewer@example.com',
                password='Viewer123!',
                first_name='Test',
                last_name='Viewer',
                role='viewer',
                phone_number='+1122334455',
                company='Client Company Ltd.'
            )
            self.stdout.write(self.style.SUCCESS('Successfully created viewer user'))
