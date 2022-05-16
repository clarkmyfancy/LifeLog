from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from Tasks.task_serializer import TaskSerializer
from Tasks.models import Task

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    authentication_classes = [TokenAuthentication,]
