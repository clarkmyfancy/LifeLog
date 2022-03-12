from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from User.views import UserViewSet
from JournalEntry.views import JournalEntryViewSet
from Goals.views import GoalViewSet



router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'journal-entries', JournalEntryViewSet)
router.register(r'goals', GoalViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('get-auth-token/', obtain_auth_token)
]
