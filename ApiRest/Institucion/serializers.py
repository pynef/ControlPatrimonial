from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.Institucion.models import Institucion, Sede, Local, Ambiente, TipoAmbiente


class TipoAmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoAmbiente
        fields = ('id', 'nombre', 'descripcion')
        read_only_fields = ('created_at', 'updated_at',)


class InstitucionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institucion
        fields = ('id', 'nombre', 'razon_social', 'direccion_fiscal', 'email', 'ruc')
        read_only_fields = ('created_at', 'updated_at',)


class SedeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sede
        fields = ('id', 'nombre', 'descripcion', 'ubicacion', 'institucion')
        read_only_fields = ('created_at', 'updated_at',)


class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = ('id', 'nombre', 'descripcion', 'ubicacion', 'institucion', 'sede')
        read_only_fields = ('created_at', 'updated_at',)


class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = ('id', 'nombre', 'piso', 'institucion', 'sede', 'local', 'tipo_ambiente')
        read_only_fields = ('created_at', 'updated_at',)
