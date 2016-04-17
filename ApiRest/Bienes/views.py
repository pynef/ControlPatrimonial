from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.Bienes.models import Bien, Ingreso, DetalleIngreso
from serializers import BienSerializer, IngresoSerializer, DetalleIngresoSerializer


class BienViewSet(viewsets.ModelViewSet):
    queryset = Bien.objects.all()
    serializer_class = BienSerializer


class IngresoViewSet(viewsets.ModelViewSet):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer


class DetalleIngresoViewSet(viewsets.ModelViewSet):
    queryset = DetalleIngreso.objects.all()
    serializer_class = DetalleIngresoSerializer
