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
    El tipo de medida es para ver como se medira el bien ejemplo. kilogramos, litros, docenas
    '''
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TipoMedida'


class TipoAlmacen(models.Model):
    '''
    El tipo de almacen es si es .... o .....
    '''
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TipoAlmacen'


class Almacen(models.Model):
    '''
    Es cuando haces tu nota de ingreso de cuales son los nuevos bienes ingresados
    como una boleta
    '''
    catalogo_de_bien = models.ForeignKey(CatalogoBien)
    proveedor = models.ForeignKey(Proveedor)
    tipo_medida = models.ForeignKey(TipoMedida)
    tipo_almacen = models.ForeignKey(TipoAlmacen)
    descripcion = models.TextField()

    def __str__(self):
        return '{0}'.format(self.catalogo_de_bien)

    class Meta:
        managed = True
        db_table = 'Almacen'


class Inventario(models.Model):
    '''
    no me acuerdo pq lo puse o.O
    '''
    catalogo_de_bien = models.ForeignKey(CatalogoBien)
    descripcion = models.TextField()

    def __str__(self):
        return '{0}'.format(self.catalogo_de_bien)

    class Meta:
        managed = True
        db_table = 'Inventario'


class AltaBien(models.Model):
    '''
    Cuando el bien se da de baja. por ejemplo cuando ya esta depreciado, cuando
    se dona, se regala, etc
    '''
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    inventario = models.ForeignKey(Inventario)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'AltaBien'


class DisposicionBien(models.Model):
    '''
    uhmmmmmm
    '''
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    inventario = models.ForeignKey(Inventario)
    disposicion = models.TextField(max_length=128)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'DisposicionBien'


class AsignacionBien(models.Model):
    '''
    Cuando el bien esta en el almacen de patrimonio y se le asignara por
    primera vez a un ambiente, de la cual comienza la depreciacion
    '''
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    inventario = models.ForeignKey(Inventario)
    ambiente = models.ForeignKey(Ambiente)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'AsignacionBien'


class TrasladoBien(models.Model):
    '''
    Cuando el bien cambia de un lugar a otro.
    origen -> destino
    '''
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField()
    inventario = models.ForeignKey(Inventario)
    origen = models.ForeignKey(Ambiente)
    destino = models.TextField(max_length=250)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TrasladoBien'
