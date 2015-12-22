from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.Proveedor.models import Proveedor, ProveedorTelefonos
from serializers import ProveedorSerializer,ProveedorTelefonosSerializer


class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer


class ProveedorTelefonosViewSet(viewsets.ModelViewSet):
    queryset = ProveedorTelefonos.objects.all()
    serializer_class = ProveedorTelefonosSerializer
