# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-01 07:27
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Temp',
        ),
    ]
