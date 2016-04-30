# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-30 15:55
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Institucion', '0001_initial'),
        ('Bienes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='disposicionbiendetalle',
            name='detalle_ingreso',
        ),
        migrations.RemoveField(
            model_name='disposicionbiendetalle',
            name='user',
        ),
        migrations.RemoveField(
            model_name='disposicionbien',
            name='detalle_disposicion',
        ),
        migrations.RemoveField(
            model_name='disposicionbien',
            name='guia',
        ),
        migrations.AddField(
            model_name='bien',
            name='institucion',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Institucion.Institucion'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='bien',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Bienes.Bien'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='institucion',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Institucion.Institucion'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='DisposicionBienDetalle',
        ),
    ]
