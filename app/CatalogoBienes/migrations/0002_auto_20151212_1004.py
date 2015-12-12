# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Institucion', '0001_initial'),
        ('CatalogoBienes', '0001_initial'),
    ]

    operations = [
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
            model_name='catalogobien',
            name='institucion',
            field=models.ForeignKey(default=1, to='Institucion.Institucion'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='catalogobien',
            name='tipo_catalogo_bien',
            field=models.ForeignKey(default=1, to='CatalogoBienes.TipoCatalogoBien'),
            preserve_default=False,
        ),
    ]
