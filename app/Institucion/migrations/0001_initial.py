# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Ambiente',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('piso', models.IntegerField()),
                ('nombre', models.CharField(max_length=64)),
                ('capacidad', models.IntegerField(null=True, blank=True)),
                ('capacidad_adicional', models.IntegerField(null=True, blank=True)),
                ('observacion', models.TextField(null=True, blank=True)),
                ('is_aula', models.NullBooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
            ],
            options={
                'db_table': 'Ambiente',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Institucion',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=64)),
                ('razon_social', models.CharField(max_length=128)),
                ('direccion_fiscal', models.CharField(max_length=64)),
                ('email', models.CharField(max_length=64)),
                ('ruc', models.CharField(max_length=15)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'db_table': 'Institucion',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Local',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=64)),
                ('descripcion', models.TextField(null=True, blank=True)),
                ('ubicacion', models.CharField(max_length=6, null=True, blank=True)),
                ('direccion', models.CharField(max_length=128)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
                ('institucion', models.ForeignKey(to='Institucion.Institucion')),
            ],
            options={
                'db_table': 'Local',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Sede',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=64)),
                ('descripcion', models.TextField(null=True, blank=True)),
                ('ubicacion', models.CharField(max_length=6)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(max_length=64, null=True, blank=True)),
                ('workstation_ip', models.CharField(max_length=64, null=True, blank=True)),
                ('institucion', models.ForeignKey(to='Institucion.Institucion')),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'db_table': 'Sede',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='TipoAmbiente',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=15)),
                ('descripcion', models.TextField(null=True, blank=True)),
            ],
            options={
                'db_table': 'TipoAmbiente',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='local',
            name='sede',
            field=models.ForeignKey(to='Institucion.Sede'),
        ),
        migrations.AddField(
            model_name='local',
            name='user',
            field=models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='institucion',
            field=models.ForeignKey(to='Institucion.Institucion'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='local',
            field=models.ForeignKey(to='Institucion.Local'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='sede',
            field=models.ForeignKey(to='Institucion.Sede'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='tipo_ambiente',
            field=models.ForeignKey(to='Institucion.TipoAmbiente'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='user',
            field=models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True),
        ),
    ]
