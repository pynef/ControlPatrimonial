from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.CatalogoBienes.models import Grupo, Clase, TipoCatalogoBien, CatalogoBien
from serializers import GrupoSerializer, ClaseSerializer, TipoSerializer, CatalogoBienSerializer


class GrupoViewSet(viewsets.ModelViewSet):
    queryset = Grupo.objects.all()
    serializer_class = GrupoSerializer


class ClaseViewSet(viewsets.ModelViewSet):
    queryset = Clase.objects.all()
    serializer_class = ClaseSerializer

    @detail_route(methods=['get'])
    def bien(self, request, **kwargs):
        clase = self.get_object()
        los_bienes = CatalogoBien.objects.filter(clase=clase.id)
        self.queryset = los_bienes
        self.serializer_class = CatalogoBienSerializer

        serializer = CatalogoBienSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)

    @detail_route(methods=['get'])
    def grupo(self, request, **kwargs):
        clase = self.get_object()
        los_grupos = Grupo.objects.filter(clase=clase.id)
        self.queryset = los_grupos
        self.serializer_class = GrupoSerializer

        serializer = GrupoSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)


class TipoViewSet(viewsets.ModelViewSet):
    queryset = TipoCatalogoBien.objects.all()
    serializer_class = TipoSerializer

    @detail_route(methods=['get'])
    def bien(self, request, **kwargs):
        tipo = self.get_object()
        los_bienes = CatalogoBien.objects.filter(tipo_catalogo_bien=tipo.id)
        self.queryset = los_bienes
        self.serializer_class = CatalogoBienSerializer

        serializer = CatalogoBienSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)


class CatalogoBienViewSet(viewsets.ModelViewSet):
    queryset = CatalogoBien.objects.all()
    serializer_class = CatalogoBienSerializer