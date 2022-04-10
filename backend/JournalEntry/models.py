from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

from Goals.models import Goal

class JournalEntry(models.Model):
    author = models.ForeignKey(to=User, default=1, on_delete=models.DO_NOTHING)
    date = models.DateTimeField(default=timezone.now)

    related_goal = models.ForeignKey(to=Goal, on_delete=models.CASCADE, null=True)
    category = models.CharField(max_length=50, default="", blank=True)
    topic_area = models.CharField(max_length=120, default="", blank=True)
    subtopic_area = models.CharField(max_length=120, default="", blank=True)
    duration = models.PositiveIntegerField()
    description = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.description