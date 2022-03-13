from dataclasses import field
from rest_framework import serializers

from Goals.models import Goal


class GoalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Goal
        fields = [
            'content',
            'date_created',
            'statement',
            'focus',
            'days_until_due',
            'how_to_measure_success',
            'is_complete',
        ]