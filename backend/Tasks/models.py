from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Task(models.Model):
    creator = models.ForeignKey(to=User, default=1, on_delete=models.DO_NOTHING)
    date_created = models.DateTimeField(default=timezone.now)

    title = models.CharField(max_length=500, default="", blank=True)
    is_on_success_list = models.BooleanField()
    is_urgent = models.BooleanField()
    is_important = models.BooleanField()
    ideal_complete_before_datetime = models.DateTimeField(auto_now=False, null=True, blank=True)
    actual_completion_datetime = models.DateTimeField(auto_now=False, null=True, blank=True)

    def __str__(self):
        return self.title