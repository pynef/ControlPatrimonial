# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-30 15:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Institucion', '0001_initial'),
        ('Bienes', '0002_auto_20160430_1055'),
    ]

    operations = [
        migrations.AddField(
            model_name='bien',
            name='sede',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Institucion.Sede'),
        ),
    ]
