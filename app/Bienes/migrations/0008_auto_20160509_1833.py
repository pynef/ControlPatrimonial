# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-05-09 23:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Bienes', '0007_bien_fecha_activa'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bien',
            name='estado',
            field=models.CharField(blank=True, choices=[(1, b'Bueno'), (2, b'Regular'), (3, b'De baja')], max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='trasladobien',
            name='destino',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destino', to='Institucion.Ambiente'),
        ),
        migrations.AlterField(
            model_name='trasladobien',
            name='solicitante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='solicitante', to='RecursosHumanos.Trabajador'),
        ),
    ]
