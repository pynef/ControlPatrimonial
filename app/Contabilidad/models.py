from django.db import models
from django.contrib.auth.models import User

"""Contabilidad"""
class CuentaDepreciacion(models.Model):
    '''
    Las cuentas contables de depreciacion que siempre va enlazado con una cuenta contable
    '''
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True, null=True)
    numero_cuenta = models.IntegerField()
    porcentaje = models.IntegerField()
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64, blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self. numero_cuenta, self.nombre)

    class Meta:
        managed = True
        db_table = 'CuentaDepreciacion'


class CuentaContable(models.Model):
    '''
    Las cuentas contables que se usaran en el sistema asi como el numero de
    cuenta de la depreciacion que va enlazada a unas cuentas contables.
    '''
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    numero_cuenta = models.IntegerField()
    depreciacion = models.ForeignKey(CuentaDepreciacion)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self. numero_cuenta, self.nombre)

    class Meta:
        managed = True
        db_table = 'CuentaContable'


class Cuentas(models.Model):
    '''
    Las cuentas contables que se usaran en el sistema asi como el numero de
    cuenta de la depreciacion que va enlazada a unas cuentas contables.
    '''
    cuenta_nombre = models.CharField(max_length=128)
    cuenta_descripcion = models.TextField(blank=True, null=True)
    cuenta_numero = models.IntegerField()
    depreciacion_nombre = models.CharField(max_length=128, blank=True, null=True)
    depreciacion_descripcion = models.TextField(blank=True, null=True)
    depreciacion_numero = models.IntegerField(blank=True, null=True)
    depreciacion_porcentaje = models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64, blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self. cuenta_numero, self.cuenta_nombre)

    class Meta:
        managed = True
        db_table = 'Cuentas'
