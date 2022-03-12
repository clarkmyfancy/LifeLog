import datetime
from django.db import models

class Goal(models.Model):
    date_created = models.DateTimeField(default=datetime.datetime.now())
    content = models.CharField(max_length=500)


    def __str__(self):
        return self.content
