from django.forms import widgets
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from app.Contabilidad.models import Cuentas


class CuentasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuentas
        fields =  ('id', 'cuenta_nombre', 'cuenta_descripcion', 'cuenta_numero',
                    'depreciacion_nombre','depreciacion_descripcion','depreciacion_numero',
                    'depreciacion_porcentaje'
        )
