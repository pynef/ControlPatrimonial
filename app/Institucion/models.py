from django.db import models
from django.contrib.auth.models import User



class TipoAmbiente(models.Model):
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TipoAmbiente'


"""Empresa"""
class Institucion(models.Model):
    nombre = models.CharField(max_length=64)
    razon_social = models.CharField(max_length=128)
    direccion_fiscal = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    ruc = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self.nombre,self.ruc)

    class Meta:
        managed = True
        db_table = 'Institucion'


class Sede(models.Model):
    institucion = models.ForeignKey(Institucion)
    nombre = models.CharField(max_length=64)
    descripcion = models.TextField(blank=True, null=True)
    ubicacion = models.CharField(max_length=6)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self.institucion.nombre,self.nombre)

    class Meta:
        managed = True
        db_table = 'Sede'


class Local(models.Model):
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede)
    nombre = models.CharField(max_length=64)
    descripcion = models.TextField(blank=True, null=True)
    ubicacion = models.CharField(max_length=6,blank=True, null=True)
    direccion = models.CharField(max_length=128)
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
        db_table = 'Local'


class Ambiente(models.Model):
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede)
    local = models.ForeignKey(Local)
    tipo_ambiente = models.ForeignKey(TipoAmbiente)
    piso = models.IntegerField()
    nombre = models.CharField(max_length=64)
    capacidad = models.IntegerField(blank=True, null=True)
    capacidad_adicional = models.IntegerField(blank=True, null=True)
    observacion = models.TextField(blank=True, null=True)
    is_aula = models.NullBooleanField(default=False)
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
        db_table = 'Ambiente'
