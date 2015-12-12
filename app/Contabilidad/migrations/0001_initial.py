# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CuentaContable',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=128)),
                ('descripcion', models.TextField(null=True, blank=True)),
                ('numero_cuenta', models.IntegerField()),
                ('depreciacion', models.BooleanField(default=False)),
                ('cuenta_depreciacion', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'db_table': 'CuentaContable',
                'managed': True,
            },
        ),
    ]
