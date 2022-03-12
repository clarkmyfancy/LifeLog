from rest_framework import viewsets

from Goals.models import Goal
from Goals.serializer import GoalSerializer

class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
