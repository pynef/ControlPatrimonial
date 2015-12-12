# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Contabilidad', '0001_initial'),
        ('Institucion', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CatalogoBien',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=128)),
                ('descripcion', models.TextField(null=True, blank=True)),
            ],
            options={
                'db_table': 'CatalogoBien',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Clase',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=128)),
                ('descripcion', models.TextField(null=True, blank=True)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
            ],
            options={
                'db_table': 'Clase',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Grupo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=128)),
                ('descripcion', models.TextField(null=True, blank=True)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
                ('institucion', models.ForeignKey(to='Institucion.Institucion')),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'db_table': 'Grupo',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='TipoCatalogoBien',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=128)),
                ('descripcion', models.TextField(null=True, blank=True)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
                ('institucion', models.ForeignKey(to='Institucion.Institucion')),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'db_table': 'TipoCatalogoBien',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='clase',
            name='grupo',
            field=models.ForeignKey(to='CatalogoBienes.Grupo'),
        ),
        migrations.AddField(
            model_name='clase',
            name='institucion',
            field=models.ForeignKey(to='Institucion.Institucion'),
        ),
        migrations.AddField(
            model_name='clase',
            name='user',
            field=models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.AddField(
            model_name='catalogobien',
            name='clase',
            field=models.ForeignKey(to='CatalogoBienes.Clase'),
        ),
        migrations.AddField(
            model_name='catalogobien',
            name='cuenta_contable',
            field=models.ForeignKey(to='Contabilidad.CuentaContable'),
        ),
        migrations.AddField(
            model_name='catalogobien',
            name='tipo_catalogo_bien',
            field=models.ForeignKey(to='CatalogoBienes.TipoCatalogoBien'),
        ),
    ]
