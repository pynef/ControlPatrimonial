# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente
from app.Contabilidad.models import CuentaContable


"""Patrimonio"""
class Grupo(models.Model):
    '''
    Los catalogos de bienes se cataloga por grupos.
    '''
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
    '''
    Los grupos tienen clases definidas.
    '''
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
        return '{0} - {1}'.format(self.grupo, self.nombre)

    class Meta:
        managed = True
        db_table = 'Clase'


class TipoCatalogoBien(models.Model):
    '''
    Son los tipo de los catalogo de bienes que son 2: bien e inmueble
    '''
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
    '''
    Los catalogos de bienes son las clasificaciones que hace la institucion
    segun la necesidades que requiere.
    '''
    institucion = models.ForeignKey(Institucion)
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    clase = models.ForeignKey(Clase)
    tipo_catalogo_bien = models.ForeignKey(TipoCatalogoBien)
    cuenta_contable = models.ForeignKey(CuentaContable)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'CatalogoBien'
