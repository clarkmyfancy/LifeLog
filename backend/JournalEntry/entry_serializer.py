from rest_framework import serializers

from JournalEntry.models import JournalEntry

class JournalEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JournalEntry
        fields = [
            'author', 
            'date', 
            'duration', 
            'title', 
            'description',
            'category',
            'related_goal'
        ]