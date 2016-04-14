from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.RecursosHumanos.models import Persona, PersonaTelefono, Trabajador, Area, Puesto, TrabajadorPuesto


class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id', 'institucion', 'nombres',
        'apellido_paterno', 'apellido_materno', 'codigo',
         'nro_documento', 'direccion')
        read_only_fields = ('created_at', 'updated_at',)


class PersonaTelefonosSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonaTelefono
        fields = ('id', 'institucion', 'persona', 'numero', 'operador')
        read_only_fields = ('created_at', 'updated_at',)



class TrabajadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = ('id', 'institucion', 'sede',
        'local', 'ambiente', 'persona')
        read_only_fields = ('created_at', 'updated_at',)

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ('id', 'institucion', 'nombre','descripcion')
        read_only_fields = ('created_at', 'updated_at',)

class PuestoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puesto
        fields = ('id', 'institucion', 'nombre','area','descripcion')
        read_only_fields = ('created_at', 'updated_at',)

class TrabajadorPuestoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrabajadorPuesto
        fields = ('id', 'institucion', 'sede','local','ambiente','trabajador','puesto')
        read_only_fields = ('created_at', 'updated_at',)
