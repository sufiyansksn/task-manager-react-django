from django.db import models

# Create your models here.
class Tasks(models.Model):
    titles = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    
