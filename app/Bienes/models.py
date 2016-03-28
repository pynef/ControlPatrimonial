# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente
from app.Contabilidad.models import CuentaContable
from app.CatalogoBienes.models import CatalogoBien
from app.Proveedor.models import Proveedor


class TipoMedida(models.Model):
    '''
    '''
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(blank=True, null=True)
    def __str__(self):
        return '{0}'.format(self.nombre)
    class Meta:
        managed = True
        db_table = 'TipoMedida'


class TipoAlmacen(models.Model):
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TipoAlmacen'


class Ingreso(models.Model):
    ''' Nota de Ingreso '''
    _condiciones = ((1,'Compra'),(2,'Donación'))
    proveedor = models.ForeignKey(Proveedor)
    guia_remision = models.CharField(max_length=24)
    nombre = models.CharField(max_length=24)
    condicion = models.CharField(max_length=1, choices=_condiciones)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.catalogo_de_bien)

    class Meta:
        managed = True
        db_table = 'Ingreso'

_monedas = ((1,'Sol'),(2,'Dolar'))
class DetalleIngreso(models.Model):
    ''' Detalle de Nota de Ingreso '''
    catalogo = models.ForeignKey(CatalogoBien)
    tipo_medida = models.ForeignKey(TipoMedida)
    medida = models.DecimalField(decimal_places=2, max_digits=6)
    tipo_moneda = models.CharField(max_length=1, choices=_monedas)
    precio_unitario = models.DecimalField(decimal_places=2, max_digits=6)
    # is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.catalogo_de_bien)

    class Meta:
        managed = True
        db_table = 'DetalleIngreso'


class AltaBien(models.Model):
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    # inventario = models.ForeignKey(Inventario)
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
        db_table = 'AltaBien'


class DisposicionBien(models.Model):
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    # inventario = models.ForeignKey(Inventario)
    disposicion = models.TextField(max_length=128)
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
        db_table = 'DisposicionBien'


class AsignacionBien(models.Model):
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    # inventario = models.ForeignKey(Inventario)
    ambiente = models.ForeignKey(Ambiente)
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
        db_table = 'AsignacionBien'


class TrasladoBien(models.Model):
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    # inventario = models.ForeignKey(Inventario)
    origen = models.ForeignKey(Ambiente)
    destino = models.TextField(max_length=250)
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
        db_table = 'TrasladoBien'
