# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-01 10:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('meetings', '0002_delete_temp'),
    ]

    operations = [
        migrations.CreateModel(
            name='Meetings',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('createdon', models.DateField(auto_now_add=True)),
                ('meetdate', models.DateField()),
                ('meettime', models.TimeField()),
                ('location', models.CharField(max_length=50)),
                ('meetingfor', models.CharField(max_length=150)),
            ],
        ),
    ]
