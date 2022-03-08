import datetime
from django.db import models

from User.models import User

class JournalEntry(models.Model):
    author = models.ForeignKey(to=User, default=1, on_delete=models.DO_NOTHING)
    date = models.DateTimeField(default=datetime.datetime)
    duration = models.PositiveIntegerField()
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500, blank=True)
    category = models.CharField(max_length=50, default="", blank=True)

    def __str__(self):
        return self.title