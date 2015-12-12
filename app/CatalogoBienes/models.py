from django.db import models
from django.contrib.auth.models import User
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente
from app.Contabilidad.models import CuentaContable


"""Patrimonio"""
class Grupo(models.Model):
    institucion = models.ForeignKey(Institucion)
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'Grupo'


class Clase(models.Model):
    institucion = models.ForeignKey(Institucion)
    grupo = models.ForeignKey(Grupo)
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'Clase'


class TipoCatalogoBien(models.Model):
    institucion = models.ForeignKey(Institucion)
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TipoCatalogoBien'


class CatalogoBien(models.Model):
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    clase = models.ForeignKey(Clase)
    tipo_catalogo_bien = models.ForeignKey(TipoCatalogoBien)
    cuenta_contable = models.ForeignKey(CuentaContable)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'CatalogoBien'
