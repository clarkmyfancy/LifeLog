from django.db import models
from django.utils import timezone

from User.models import User

class Goal(models.Model):
    content = models.CharField(max_length=500, default="")
    date_created = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(to=User, default=1, on_delete=models.DO_NOTHING)
    statement = models.CharField(max_length=500, default="")
    focus = models.CharField(max_length=500, default="")
    days_until_due = models.IntegerField(default=0)
    how_to_measure_success = models.CharField(max_length=200, blank=True)
    is_complete = models.BooleanField(default=False)


    def __str__(self):
        return self.content
