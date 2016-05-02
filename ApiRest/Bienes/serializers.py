from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from ApiRest.CatalogoBienes.serializers import CatalogoBienSerializer
from app.Bienes.models import Bien, Ingreso, DetalleIngreso, DisposicionBien
from app.CatalogoBienes.models import CatalogoBien
from app.Institucion.models import Institucion, Sede, Local, Ambiente
from app.RecursosHumanos.models import Trabajador, Persona
from app.Proveedor.models import Proveedor


class DisposicionBienSerializer(serializers.ModelSerializer):
    # institucion = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=Institucion.objects.all() )
    # sede = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=Sede.objects.all() )
    # local = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=Local.objects.all() )
    # ambiente = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=Ambiente.objects.all() )
    # solicitante = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombres', queryset=Persona.objects.all() )
    # bien = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=CatalogoBien.objects.all() )
    class Meta:
        model = DisposicionBien
        fields = ('id', 'institucion', 'sede', 'local',
         'ambiente', 'fecha','solicitante','bien','descripcion',
         'is_active')
        read_only_fields = ('created_at', 'updated_at',)


class BienSerializer(serializers.ModelSerializer):
    # catalogo = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=CatalogoBien.objects.all() )
    class Meta:
        model = Bien
        fields = ('id', 'catalogo', 'codigo', 'descripcion', 'almacen',
         'marca', 'modelo','numero_serie','dimension','color','otro_detalle','usuario', 'fecha_activa',
         'institucion','sede','local','ambiente','saldo_inicial','estado','fecha_revaluacion')
        read_only_fields = ('created_at', 'updated_at',)


class IngresoSerializer(serializers.ModelSerializer):
    # proveedor = serializers.StringRelatedField(many=False)
    proveedor = serializers.SlugRelatedField(many=False, read_only=False, slug_field='nombre', queryset=Proveedor.objects.all() )
    class Meta:
        model = Ingreso
        fields = ('id', 'proveedor', 'orden_compra', 'guia_remision','tipo_moneda','tipo_cambio',
         'condicion', 'proveedor', 'pendiente','total','condicion','tipo_moneda','pendiente',
         'tipo_comprobante','numero_comprobante')
        read_only_fields = ('created_at', 'updated_at',)


class DetalleIngresoSerializer(serializers.ModelSerializer):
    # catalogo = serializers.StringRelatedField(many=False, read_only=True)
    catalogo = CatalogoBienSerializer(many=False)
    class Meta:
        model = DetalleIngreso
        fields = ('id', 'ingreso', 'catalogo',
         'cantidad', 'precio_unitario', 'pendiente')
        read_only_fields = ('created_at', 'updated_at',)
