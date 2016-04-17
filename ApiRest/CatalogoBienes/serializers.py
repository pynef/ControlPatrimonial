# -*- coding: utf-8 -*-
from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.CatalogoBienes.models import Grupo, Clase, TipoCatalogoBien, CatalogoBien
from app.Institucion.models import Institucion
from ApiRest.Contabilidad.serializers import CuentasSerializer

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = ('id', 'institucion', 'nombre', 'descripcion')
        read_only_fields = ('created_at', 'updated_at',)


class ClaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clase
        fields = ('id', 'institucion', 'grupo', 'nombre', 'descripcion')
        read_only_fields = ('created_at', 'updated_at',)


class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCatalogoBien
        fields = ('id', 'institucion', 'nombre', 'descripcion')
        read_only_fields = ('created_at', 'updated_at',)


class CatalogoBienSerializer(serializers.ModelSerializer):
    # clase = serializers.StringRelatedField(many=False)
    # tipo_catalogo_bien = serializers.StringRelatedField(many=False)
    # cuenta_contable = serializers.StringRelatedField(many=False)
    # clase = ClaseSerializer()
    # tipo_catalogo_bien = TipoSerializer()
    # cuenta_contable = CuentaContableSerializer()

    class Meta:
        model = CatalogoBien
        fields = ('id', 'institucion', 'nombre', 'descripcion', 'clase', 'tipo_catalogo_bien', 'cuenta_contable')
        read_only_fields = ('created_at', 'updated_at', 'institucion')

    def create(self, validated_data):
        print 'override create'
        id = self.context['request'].session.get('institucion', False)
        if id:
            institucion = Institucion.objects.get(id=id)
            validated_data['institucion'] = institucion
            return  CatalogoBien.objects.create(**validated_data)
        raise serializers.ValidationError("Usted no pertenece a ninguna institución.")
