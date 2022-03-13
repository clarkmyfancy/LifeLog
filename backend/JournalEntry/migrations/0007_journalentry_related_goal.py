# Generated by Django 4.0.2 on 2022-03-13 03:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Goals', '0003_goal_days_until_due_goal_focus_and_more'),
        ('JournalEntry', '0006_alter_journalentry_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='journalentry',
            name='related_goal',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Goals.goal'),
        ),
    ]
