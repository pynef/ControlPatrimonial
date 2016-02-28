# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-28 22:57
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Bienes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='almacen',
            name='create_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 28, 11000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='almacen',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='almacen',
            name='update_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 35, 883000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='almacen',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='almacen',
            name='workstation_ip',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='almacen',
            name='workstation_name',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='altabien',
            name='create_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 37, 795000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='altabien',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='altabien',
            name='update_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 39, 443000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='altabien',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='altabien',
            name='workstation_ip',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='altabien',
            name='workstation_name',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='asignacionbien',
            name='create_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 41, 163000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='asignacionbien',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='asignacionbien',
            name='update_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 43, 107000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='asignacionbien',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='asignacionbien',
            name='workstation_ip',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='asignacionbien',
            name='workstation_name',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='create_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 44, 899000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='update_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 49, 835000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='workstation_ip',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='disposicionbien',
            name='workstation_name',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='inventario',
            name='create_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 52, 19000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='inventario',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='inventario',
            name='update_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 54, 115000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='inventario',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='inventario',
            name='workstation_ip',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='inventario',
            name='workstation_name',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='trasladobien',
            name='create_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 56, 56, 75000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trasladobien',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='trasladobien',
            name='update_at',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 2, 28, 22, 57, 0, 683000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trasladobien',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='trasladobien',
            name='workstation_ip',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='trasladobien',
            name='workstation_name',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
    ]
