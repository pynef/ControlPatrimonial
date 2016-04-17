from django.db import models
from django.contrib.auth.models import User
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente

GENERO_CHOICES = (
    ('M', 'Masculino'),
    ('F', 'Femenino'),
)
TIPO_DOCUMENTO_CHOICES = (
    ('D', 'DNI'),
)

"""Persona"""
class Persona(models.Model):
    '''
    Es un campo general, donde se registra a toda persona.
    '''
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede, blank=True, null=True)
    local = models.ForeignKey(Local, blank=True, null=True)
    codigo = models.CharField(max_length=32, blank=True, null=True)
    apellido_paterno = models.CharField(max_length=64)
    apellido_materno = models.CharField(max_length=64)
    nombres = models.CharField(max_length=64)
    tipo_documento = models.CharField(max_length=1, choices=TIPO_DOCUMENTO_CHOICES, default='D', blank=True, null=True)
    nro_documento = models.IntegerField()
    fecha_nacimiento = models.DateField(blank=True, null=True)
    ubigeo = models.CharField(max_length=6,blank=True, null=True)
    direccion = models.CharField(max_length=128,blank=True, null=True)
    referencia_direccion = models.TextField(blank=True, null=True)
    estado_civil = models.CharField(max_length=1, blank=True, null=True)
    genero = models.CharField(max_length=1, choices=GENERO_CHOICES, default='M', blank=True, null=True)
    grado_academico = models.CharField(max_length=1, blank=True, null=True)
    imagen = models.CharField(max_length=256,blank=True, null=True)
    img_documento = models.CharField(max_length=256,blank=True, null=True)
    tipo = models.CharField(max_length=1, blank=True, null=True)
    email = models.CharField(max_length=64, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombres)

    class Meta:
        managed = True
        db_table = 'Persona'


class PersonaTelefono(models.Model):
    '''
    Toda persona cuenta con n numero telefonicos para hacer el contacto directo.
    '''
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede)
    local = models.ForeignKey(Local)
    persona = models.ForeignKey(Persona)
    numero = models.CharField(max_length=16)
    operador = models.CharField(max_length=1)
    descriptor = models.CharField(max_length=32,blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True,blank=True, null=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{0}'.format(self.numero)

    class Meta:
        managed = True
        db_table = 'PersonaTelefono'


class Area(models.Model):
    '''
    Son las diferentes areas que pueda tener la institucion como: area de TI,
    area de contabilidad, area de RRHH, etc.
    '''
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede, blank=True, null=True)
    local = models.ForeignKey(Local,blank=True, null=True)
    nombre = models.CharField(max_length=64)
    descripcion = models.TextField(blank=True, null=True)  # This field type is a guess.
    modulos = models.CharField(max_length=64,blank=True, null=True)
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
        db_table = 'Area'


class Puesto(models.Model):
    '''
    Son los cargos que hay en el area como: gerente, sub-gerente, jefe de area,
    asistente, etc.
    '''
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede, blank=True, null=True)
    local = models.ForeignKey(Local, blank=True, null=True)
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(blank=True, null=True)  # This field type is a guess.
    area = models.ForeignKey(Area)
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
        db_table = 'Puesto'


# class TrabajadorPuesto(models.Model):
#     '''
#     Es la asigacion del trabajador a un puesto.
#     '''
#     institucion = models.ForeignKey(Institucion)
#     sede = models.ForeignKey(Sede)
#     local = models.ForeignKey(Local)
#     ambiente = models.ForeignKey(Ambiente)
#     trabajador = models.ForeignKey(Trabajador)
#     puesto = models.ForeignKey(Puesto)
#     is_active = models.BooleanField(default=True)
#     create_at = models.DateTimeField(auto_now=True)
#     update_at = models.DateTimeField(auto_now=True)
#     user = models.ForeignKey(User,blank=True, null=True)
#     workstation_name = models.CharField(max_length=64,blank=True, null=True)
#     workstation_ip = models.CharField(max_length=64,blank=True, null=True)
#
#     def __str__(self):
#         return '{0}'.format(self.trabajador)
#
#     class Meta:
#         managed = True
#         db_table = 'TrabajadorPuesto'



"""Recursos Humanos"""
class Trabajador(models.Model):
    '''
    Son las personas que laboran en la institucion.
    '''
    institucion = models.ForeignKey(Institucion)
    sede = models.ForeignKey(Sede)
    local = models.ForeignKey(Local)
    ambiente = models.ForeignKey(Ambiente)
    persona = models.ForeignKey(Persona)
    codigo  = models.CharField(max_length=256,blank=True, null=True)
    puesto = models.ForeignKey(Puesto, blank=True, null=True)
    nro_aportantes = models.IntegerField(blank=True, null=True)
    nro_dependientes = models.IntegerField(blank=True, null=True)
    ingreso_familiar = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    vivienda_tipo = models.CharField(max_length=64,blank=True, null=True)
    vivienda_nro_habitantes = models.IntegerField(blank=True, null=True)
    vivienda_servicio = models.CharField(max_length=256,blank=True, null=True)
    vivienda_situacion = models.CharField(max_length=64,blank=True, null=True)
    vivienda_material = models.CharField(max_length=64,blank=True, null=True)
    enfermedades = models.CharField(max_length=256,blank=True, null=True)
    enfermedad_cronica = models.CharField(max_length=256,blank=True, null=True)
    discapacidad = models.CharField(max_length=256,blank=True, null=True)
    alergia = models.CharField(max_length=256,blank=True, null=True)
    objetivo_personal = models.TextField(blank=True, null=True)  # This field type is a guess.
    tipo_contrato = models.CharField(max_length=128, blank=True, null=True)
    tipo = models.CharField(max_length=1, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User,blank=True, null=True)
    workstation_name = models.CharField(max_length=64,blank=True, null=True)
    workstation_ip = models.CharField(max_length=64,blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.persona)

    class Meta:
        managed = True
        db_table = 'Trabajador'
