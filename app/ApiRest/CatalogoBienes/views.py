# from django.shortcuts import render, get_object_or_404
# from django.contrib.auth.models import User
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.views import APIView

from rest_framework import generics, permissions
from SistemaDeControlPatrimonial.app.CatalogoBienes.models import Grupo, Clase, TipoCatalogoBien, CatalogoBien
from serializers import GrupoSerializer


class GrupoList(generics.ListAPIView):
    model = Grupo
    serializer_class = GrupoSerializer
    permission_classes = [
        permissions.AllowAny
    ]
