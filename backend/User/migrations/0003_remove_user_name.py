# Generated by Django 4.0.2 on 2022-03-22 20:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0002_user_name_user_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
    ]
