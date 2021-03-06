from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.Institucion.models import TipoAmbiente, Institucion, Sede, Local, Ambiente
from serializers import InstitucionSerializer, SedeSerializer, LocalSerializer, AmbienteSerializer, TipoAmbienteSerializer


class InstitucionViewSet(viewsets.ModelViewSet):
    queryset = Institucion.objects.all().filter(is_active=True)
    serializer_class = InstitucionSerializer

    @detail_route(methods=['get'])
    def sedes(self, request, **kwargs):
        institucion = self.get_object()
        empresa = Sede.objects.filter(institucion=institucion.id).filter(is_active=True)
        self.queryset = empresa
        self.serializer_class = SedeSerializer

        serializer = SedeSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)


class SedeViewSet(viewsets.ModelViewSet):
    queryset = Sede.objects.all().filter(is_active=True)
    serializer_class = SedeSerializer

    @detail_route(methods=['get'])
    def locales(self, request, **kwargs):
        sede = self.get_object()
        local = Local.objects.filter(sede=sede.id).filter(is_active=True)
        self.queryset = local
        self.serializer_class = LocalSerializer

        serializer = LocalSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)


class LocalViewSet(viewsets.ModelViewSet):
    queryset = Local.objects.all().filter(is_active=True)
    serializer_class = LocalSerializer

    @detail_route(methods=['get'])
    def ambientes(self, request, **kwargs):
        local = self.get_object()
        ambiente = Ambiente.objects.filter(local=local.id).filter(is_active=True)
        self.queryset = ambiente
        self.serializer_class = AmbienteSerializer

        serializer = AmbienteSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)


class TipoAmbienteViewSet(viewsets.ModelViewSet):
    queryset = TipoAmbiente.objects.all()
    serializer_class = TipoAmbienteSerializer


class AmbienteViewSet(viewsets.ModelViewSet):
    queryset = Ambiente.objects.all().filter(is_active=True)
    serializer_class = AmbienteSerializer
