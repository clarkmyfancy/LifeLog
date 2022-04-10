from rest_framework import serializers

from JournalEntry.models import JournalEntry

class JournalEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JournalEntry
        fields = [
            'author', 
            'date', 
            'related_goal',
            'category',
            'topic_area',
            'subtopic_area',
            'duration', 
            'description',
        ]