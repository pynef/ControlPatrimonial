# from django.shortcuts import render, get_object_or_404
# from django.contrib.auth.models import User
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.views import APIView

from rest_framework import generics, permissions
from rest_framework import viewsets
from app.CatalogoBienes.models import Grupo, Clase, TipoCatalogoBien, CatalogoBien
from serializers import GrupoSerializer, ClaseSerializer, TipoSerializer, CatalogoBienSerializer


class GrupoViewSet(viewsets.ModelViewSet):
    queryset = Grupo.objects.all()
    serializer_class = GrupoSerializer


class ClaseViewSet(viewsets.ModelViewSet):
    queryset = Clase.objects.all()
    serializer_class = ClaseSerializer


class TipoViewSet(viewsets.ModelViewSet):
    queryset = TipoCatalogoBien.objects.all()
    serializer_class = TipoSerializer


class CatalogoBienViewSet(viewsets.ModelViewSet):
    queryset = CatalogoBien.objects.all()
    serializer_class = CatalogoBienSerializer


class BienesPorClase(viewsets.ModelViewSet,id):
    queryset = CatalogoBien.objects.filter(clase=id)
    serializer_class = CatalogoBienSerializer
