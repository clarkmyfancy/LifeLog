from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50, default="temp")
    username = models.CharField(max_length=50, default="temp_username")

    def __str__(self):
        return self.username
