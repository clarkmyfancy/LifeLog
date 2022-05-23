import django
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from knox import views as knox_views

from Goals.views import GoalViewSet
from JournalEntry.views import JournalEntryViewSet
from Tasks.views import TaskViewSet
from User.views import UserViewSet

from accounts.views import LoginAPI, RegisterAPI




router = routers.DefaultRouter()

router.register(r'users', UserViewSet)
router.register(r'journal-entries', JournalEntryViewSet)
router.register(r'goals', GoalViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    # path('get-auth-token/', obtain_auth_token),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
