from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class TipoAmbiente(models.Model):
    '''
    Los tipo de ambientes son las variedades que usa la institucion asi como
    salones, oficinas, etc.
    '''
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'TipoAmbiente'


"""Empresa"""
class Institucion(models.Model):
    '''
    La institucion es el nombre de la empresa, la cual se dara los privilegios
    a la hora de logearse.
    '''
    nombre = models.CharField(max_length=64)
    slug = models.SlugField(max_length=16, unique=True)
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

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.nombre).upper();
        super(Institucion, self).save(*args, **kwargs)

    '''
    class Meta:
        managed = True
        # db_table = 'Institucion'
    '''

class Sede(models.Model):
    '''
    La institucion tiene un lugar que es la sede.
    '''
    institucion = models.ForeignKey(Institucion)
    nombre = models.CharField(max_length=64)
    descripcion = models.TextField(blank=True, null=True)
    ubicacion = models.CharField(max_length=6,blank=True, null=True)
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
    '''
    Las sedes puede tener n locacales.
    '''
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
    '''
    Los ambientes son los lugares donde se le asignara los bienes de la empresa
    teniendo en cuenta los locales.
    '''
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


class Puesto(models.Model):
    '''
        Usuarios y roles por institucion
    '''
    institucion = models.ForeignKey(Institucion, related_name='Institucion')
    colaborador = models.ForeignKey(User, related_name='Colaborador')
    rol = models.CharField(max_length=64)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True, related_name='Use')
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return 'rol'
