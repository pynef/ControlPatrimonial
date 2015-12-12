from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from SistemaDeControlPatrimonial.app.CatalogoBienes.models import *

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = ('id', 'institucion', 'nombre', 'descripcion')
        read_only_fields = ('created_at', 'updated_at',)
        
        def create(self, validated_data):
            return Grupo.objects.create(**validated_data)
