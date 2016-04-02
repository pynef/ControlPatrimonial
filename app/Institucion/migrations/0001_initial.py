# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-01 22:07
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Ambiente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('piso', models.IntegerField()),
                ('nombre', models.CharField(max_length=64)),
                ('capacidad', models.IntegerField(blank=True, null=True)),
                ('capacidad_adicional', models.IntegerField(blank=True, null=True)),
                ('observacion', models.TextField(blank=True, null=True)),
                ('is_aula', models.NullBooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(blank=True, max_length=64, null=True)),
                ('workstation_ip', models.CharField(blank=True, max_length=64, null=True)),
            ],
            options={
                'db_table': 'Ambiente',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Institucion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=64)),
                ('slug', models.SlugField(max_length=16, unique=True)),
                ('razon_social', models.CharField(max_length=128)),
                ('direccion_fiscal', models.CharField(max_length=64)),
                ('email', models.CharField(max_length=64)),
                ('ruc', models.CharField(max_length=15)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(blank=True, max_length=64, null=True)),
                ('workstation_ip', models.CharField(blank=True, max_length=64, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Local',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=64)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('ubicacion', models.CharField(blank=True, max_length=6, null=True)),
                ('direccion', models.CharField(max_length=128)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(blank=True, max_length=64, null=True)),
                ('workstation_ip', models.CharField(blank=True, max_length=64, null=True)),
                ('institucion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.Institucion')),
            ],
            options={
                'db_table': 'Local',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Puesto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.CharField(max_length=64)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(blank=True, max_length=64, null=True)),
                ('workstation_ip', models.CharField(blank=True, max_length=64, null=True)),
                ('colaborador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Colaborador', to=settings.AUTH_USER_MODEL)),
                ('institucion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Institucion', to='Institucion.Institucion')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Use', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Sede',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=64)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('ubicacion', models.CharField(blank=True, max_length=6, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('create_at', models.DateTimeField(auto_now=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('workstation_name', models.CharField(blank=True, max_length=64, null=True)),
                ('workstation_ip', models.CharField(blank=True, max_length=64, null=True)),
                ('institucion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.Institucion')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'Sede',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='TipoAmbiente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=15)),
                ('descripcion', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'TipoAmbiente',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='local',
            name='sede',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.Sede'),
        ),
        migrations.AddField(
            model_name='local',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='institucion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.Institucion'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='local',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.Local'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='sede',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.Sede'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='tipo_ambiente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Institucion.TipoAmbiente'),
        ),
        migrations.AddField(
            model_name='ambiente',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
