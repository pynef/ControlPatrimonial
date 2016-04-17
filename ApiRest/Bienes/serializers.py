from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.Bienes.models import Bien, Ingreso, DetalleIngreso


class BienSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bien
        fields = ('id', 'catalogo', 'codigo', 'descripcion',
         'marca', 'modelo','numero_serie','dimension','color','otro_detalle')
        read_only_fields = ('created_at', 'updated_at',)


class IngresoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingreso
        fields = ('id', 'proveedor', 'orden_compra', 'guia_remision','tipo_moneda','tipo_cambio',
         'condicion', 'proveedor', 'pendiente','total','condicion','tipo_moneda','pendiente',
         'tipo_comprobante','numero_comprobante')
        read_only_fields = ('created_at', 'updated_at',)


class DetalleIngresoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleIngreso
        fields = ('id', 'ingreso', 'catalogo', 'tipo_medida',
         'cantidad', 'tipo_moneda', 'precio_unitario', 'pendiente')
        read_only_fields = ('created_at', 'updated_at',)
