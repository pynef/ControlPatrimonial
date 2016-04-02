# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from app.RecursosHumanos.models import Trabajador
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente
from app.Contabilidad.models import CuentaContable
from app.CatalogoBienes.models import CatalogoBien
from app.Proveedor.models import Proveedor


class TipoMedida(models.Model):
    '''
    Son los tipos de medida que se usaran como kilogramos, unidades, decenas, ciento, etc.
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
    No me acuerdo para que esta clase de objecto
    '''
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
    orden_compra = models.CharField(max_length=24)
    guia_remision = models.CharField(max_length=24)
    numero_factura = models.CharField(max_length=24,blank=True, null=True)
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
    ingreso = models.ForeignKey(Ingreso)
    catalogo = models.ForeignKey(CatalogoBien)
    tipo_medida = models.ForeignKey(TipoMedida)
    cantidad = models.IntegerField()
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


class DisposicionBienDetalle(models.Model):
    ''' Detalle de la disposicion del bien '''
    detalle_ingreso = models.ForeignKey(DetalleIngreso)
    cantidad = models.IntegerField()
    fecha  = models.DateField(auto_now=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self.detalle_ingreso,self.cantidad)

    class Meta:
        managed = True
        db_table = 'DisposicionBienDetalle'


class DisposicionBien(models.Model):
    sede = models.ForeignKey(Sede)
    local = models.ForeignKey(Local)
    ambiente = models.ForeignKey(Ambiente)
    fecha = models.DateField(auto_now=True)
    solicitante = models.ForeignKey(Trabajador)
    guia = models.ForeignKey(Ingreso)
    #transferencia de almacen de patrimonio a un area especifica
    detalle_disposicion = models.ForeignKey(DisposicionBienDetalle)
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
        db_table = 'DisposicionBien'


_estado = ((1,'Bueno'),(2,'Regular'),(3,'De baja'))
class Bien(models.Model):
    '''
    Es el bien en si con codoficacion su marca, modelo, placa y otras especificaciones
    '''
    ambiente = models.ForeignKey(Ambiente)
    descripcion = models.CharField(max_length=300)
    codigo = models.IntegerField(blank=True, null=True)
    catalogo = models.ForeignKey(CatalogoBien)
    marca = models.CharField(max_length=200,blank=True, null=True)
    modelo = models.CharField(max_length=200,blank=True, null=True)
    numero_serie = models.CharField(max_length=200,blank=True, null=True)
    dimension = models.CharField(max_length=200,blank=True, null=True)
    color = models.CharField(max_length=200,blank=True, null=True)
    otro_detalle = models.TextField(blank=True, null=True)
    usuario = models.ForeignKey(Trabajador)
    local = models.ForeignKey(Local)
    ambiente = models.ForeignKey(Ambiente)
    saldo_inicial = models.DecimalField(decimal_places=2, max_digits=6)
    estado = models.TextField(max_length=1, choices= _estado)# bueno e regular
    fecha_revaluacion = models.DateField(auto_now=True)
    #Saber el estado del bien si ya esta en uso, almacen, rebaluado,de baja etc
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self.codigo,self.catalogo.nombre)

    class Meta:
        managed = True
        db_table = 'Bien'



class ActivoFijo(models.Model):
    '''
    Reporte del libro de activos fijos por mes, anual,
    Donde se almacenara el historico del libro
    Para generar el libro anual
    '''
    bien = models.ForeignKey(Bien)
    anio = models.IntegerField()
    mes = models.IntegerField()
    saldo_inicial = models.DecimalField(decimal_places=2, max_digits=6)
    adquisiciones_adicionales = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    mejoras = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    retiros = models.CharField(max_length=50, blank=True, null=True)
    otros_ajustes = models.CharField(max_length=50, blank=True, null=True)
    valor_revaluado = models.CharField(max_length=150, blank=True, null=True)
    efectuada = models.CharField(max_length=150, blank=True, null=True)
    valor_ajustado_2014 = models.CharField(max_length=150, blank=True, null=True)
    fecha_adquisicion = models.DateField()
    fecha_inicio = models.DateField()
    tipo_depreciacion_metodo = models.CharField(max_length=200) # lo que se usa es linea recta en todo el libro
    tipo_depreciacion_nro_doc = models.CharField(max_length=200) # lo que se usa es linea recta en todo el libro
    porcentaje_depreciacion = models.IntegerField()
    depreciacion_acumulada_cierre_anterior = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    valor_depre_ejercicio_sin_revaluacion = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    valor_depre_relacionada_bajas = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    valor_depre_relacionada_otros = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    depreciacion_acumulada_actual = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    valor_neto = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    valor_depreciacion_de_revaluacion = models.DecimalField(decimal_places=2, max_digits=6,blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self.codigo,self.catalogo.nombre)

    class Meta:
        managed = True
        db_table = 'ActivoFijo'


# class AsignacionBien(models.Model):
#     nombre = models.CharField(max_length=128)
#     descripcion = models.TextField()
#     # inventario = models.ForeignKey(Inventario)
#     ambiente = models.ForeignKey(Ambiente)
#     is_active = models.BooleanField(default=True)
#     create_at = models.DateTimeField(auto_now=True)
#     update_at = models.DateTimeField(auto_now=True)
#     user = models.ForeignKey(User,blank=True, null=True)
#     workstation_name = models.CharField(max_length=64,blank=True, null=True)
#     workstation_ip = models.CharField(max_length=64,blank=True, null=True)
#
#     def __str__(self):
#         return '{0}'.format(self.nombre)
#
#     class Meta:
#         managed = True
#         db_table = 'AsignacionBien'


class TrasladoBien(models.Model):
    solicitante = models.ForeignKey(User, related_name="solicitante")
    bien = models.ForeignKey(Bien)
    descripcion = models.TextField()
    origen = models.ForeignKey(Ambiente, related_name="origen")
    destino = models.ForeignKey(Ambiente)
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




class BajaBien(models.Model):
    bien = models.ForeignKey(Bien)
    ambiente = models.ForeignKey(Ambiente,blank=True, null=True)
    observacion = models.CharField(max_length=100,blank=True, null=True)
    motivo = models.TextField(blank=True, null=True)
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
        db_table = 'BajaBien'

#
