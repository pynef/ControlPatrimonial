from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.Proveedor.models import Proveedor


class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ('id', 'institucion', 'nombre', 'razon_social', 'direccion_fiscal', 'email', 'ruc', 'duenio')


class ProveedorTelefonosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ('id', 'institucion', 'proveedor', 'numero', 'operador')
