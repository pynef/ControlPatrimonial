# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-28 05:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RecursosHumanos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='codigo',
            field=models.CharField(blank=True, max_length=32, null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='email',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='genero',
            field=models.CharField(blank=True, choices=[(b'M', b'Masculino'), (b'F', b'Femenino')], default=b'M', max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='tipo_documento',
            field=models.CharField(blank=True, choices=[(b'D', b'DNI')], default=b'D', max_length=1, null=True),
        ),
    ]