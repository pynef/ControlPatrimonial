from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.CatalogoBienes.models import Grupo, Clase, TipoCatalogoBien, CatalogoBien

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
    class Meta:
        model = CatalogoBien
        fields = ('id', 'institucion', 'nombre', 'descripcion', 'clase', 'tipo_catalogo_bien', 'cuenta_contable')
        read_only_fields = ('created_at', 'updated_at',)
