from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.Contabilidad.models import CuentaContable


class CuentaContableSerializer(serializers.ModelSerializer):
    class Meta:
        model = CuentaContable
        fields = ('id', 'nombre', 'descripcion', 'numero_cuenta')
