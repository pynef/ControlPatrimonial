# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-30 17:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bienes', '0004_auto_20160430_1220'),
    ]

    operations = [
        migrations.AddField(
            model_name='bien',
            name='almacen',
            field=models.BooleanField(default=True),
        ),
    ]
