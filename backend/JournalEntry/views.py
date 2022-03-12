from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from JournalEntry.entry_serializer import JournalEntrySerializer
from JournalEntry.models import JournalEntry

class JournalEntryViewSet(viewsets.ModelViewSet):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer
    authentication_classes = [TokenAuthentication,]
