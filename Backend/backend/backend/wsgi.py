"""
WSGI config for backend project.
"""

import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

from django.core.management import call_command

# Run migrations automatically on startup
call_command("migrate", interactive=False)

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()