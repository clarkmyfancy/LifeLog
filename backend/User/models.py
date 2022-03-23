from django.db import models

class User(models.Model):
    username = models.CharField(max_length=50, default="temp_username")

    def __str__(self):
        return self.username
