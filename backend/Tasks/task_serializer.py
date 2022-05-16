from rest_framework import serializers

from Tasks.models import Task

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = [
            'creator', 
            'date_created', 
            'title',
            'is_on_success_list',
            'is_urgent',
            'is_important',
            'ideal_complete_before_datetime', 
            'actual_completion_datetime',
        ]
