from django.db import models
from django.contrib.auth.models import User
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente
from app.RecursosHumanos.models import Persona

OPERADOR_CHOICES = (
    (1, 'Claro'),
    (2, 'Movistar'),
    (3, 'Bitel'),
    (4, 'Entel'),
    (5, 'Fijo'),
)

"""Proveedores"""
class Proveedor(models.Model):
    '''
    La institucion contiene una lista de proveedores que les facilita la
    compra de los bienes, la cual esta registrado para tener un mejor control.
    '''
    institucion = models.ForeignKey(Institucion)
    nombre = models.CharField(max_length=64)
    razon_social = models.CharField(max_length=128)
    direccion_fiscal = models.CharField(max_length=64, blank=True, null=True)
    email = models.CharField(max_length=64, blank=True, null=True)
    ruc = models.IntegerField()
    persona = models.ForeignKey(Persona, related_name='persona')
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
        db_table = 'Proveedor'


class ProveedorTelefonos(models.Model):
    '''
    Los proveedores tienen n numero para contactarlos.
    '''
    institucion = models.ForeignKey(Institucion)
    proveedor = models.ForeignKey(Proveedor)
    numero = models.CharField(max_length=16)
    operador = models.CharField(max_length=1, choices=OPERADOR_CHOICES, default=5)
    descriptor = models.CharField(max_length=32,blank=True, null=True)
    create_at = models.DateTimeField(auto_now=True,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.numero)

    class Meta:
        managed = True
        db_table = 'ProveedorTelefonos'
