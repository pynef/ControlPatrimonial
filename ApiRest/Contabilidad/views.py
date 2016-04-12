from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.Contabilidad.models import Cuentas
from serializers import CuentasSerializer


class CuentasViewSet(viewsets.ModelViewSet):
    queryset = Cuentas.objects.all().filter(is_active=True)
    serializer_class = CuentasSerializer
