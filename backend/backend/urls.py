from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from User.views import UserViewSet
from JournalEntry.views import JournalEntryViewSet



router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'journal-entries', JournalEntryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('auth/', obtain_auth_token)
]
