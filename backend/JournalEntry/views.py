from rest_framework import viewsets, permissions

from JournalEntry.entry_serializer import JournalEntrySerializer
from JournalEntry.models import JournalEntry

# Create your views here.
class JournalEntryViewSet(viewsets.ModelViewSet):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # def post(self, request, format=None):
