# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-15 05:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RecursosHumanos', '0006_remove_puesto_all_sedes'),
    ]

    operations = [
        migrations.AddField(
            model_name='puesto',
            name='all_sedes',
            field=models.NullBooleanField(),
        ),
    ]
