from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.Proveedor.models import Proveedor


class ProveedorSerializer(serializers.ModelSerializer):
    #persona = serializers.StringRelatedField(many=False)
    #persona = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    persona = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='persona-id'
    )
    class Meta:
        model = Proveedor
        fields = ('id', 'institucion', 'nombre', 'razon_social', 'direccion_fiscal', 'email', 'ruc', 'persona','is_active')
        read_only_fields = ('created_at', 'updated_at',)


class ProveedorTelefonosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ('id', 'institucion', 'proveedor', 'numero', 'operador')
        read_only_fields = ('created_at', 'updated_at',)
