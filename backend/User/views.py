from rest_framework import viewsets

from User.user_serializer import UserSerializer
from django.contrib.auth.models import User

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer