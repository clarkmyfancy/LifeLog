from django.db import models
from django.utils import timezone

from User.models import User
from Goals.models import Goal

class JournalEntry(models.Model):
    author = models.ForeignKey(to=User, default=1, on_delete=models.DO_NOTHING)
    date = models.DateTimeField(default=timezone.now)
    duration = models.PositiveIntegerField()
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500, blank=True)
    category = models.CharField(max_length=50, default="", blank=True)
    related_goal = models.ForeignKey(to=Goal, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title