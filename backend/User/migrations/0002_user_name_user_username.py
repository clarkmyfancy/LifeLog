# Generated by Django 4.0.2 on 2022-02-24 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='temp', max_length=50),
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='temp_username', max_length=50),
        ),
    ]
