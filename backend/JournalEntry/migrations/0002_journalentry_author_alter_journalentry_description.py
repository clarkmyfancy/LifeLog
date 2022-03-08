# Generated by Django 4.0.2 on 2022-02-24 21:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0002_user_name_user_username'),
        ('JournalEntry', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='journalentry',
            name='author',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='User.user'),
        ),
        migrations.AlterField(
            model_name='journalentry',
            name='description',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
