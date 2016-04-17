from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from app.Bienes.models import Bien, Ingreso, DetalleIngreso
from serializers import BienSerializer, IngresoSerializer, DetalleIngresoSerializer


class BienViewSet(viewsets.ModelViewSet):
    queryset = Bien.objects.all()
    serializer_class = BienSerializer


class IngresoViewSet(viewsets.ModelViewSet):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer

    @detail_route(methods=['get'])
    def detalles(self, request, **kwargs):
        nota_ingreso = self.get_object()
        detalles = DetalleIngreso.objects.filter(ingreso=nota_ingreso.id)
        self.queryset = detalles
        self.serializer_class = DetalleIngresoSerializer

        serializers = DetalleIngresoSerializer(instance=self.queryset, many=True)
        return Response(serializers.data)

    #guiaRemision
    # @list_route(methods=['get'])
    # def guiaRemision(self, request, **kwargs):
    #     gr = self.get_object()
    #     guias = Ingreso.objects.filter(guia_remision=gr.id)
    #     self.queryset = guias
    #     self.serializer_class = IngresoSerializer
    #
    #     serializer = PuestoSerializer(instance=self.queryset, many=True)
    #     return Response(serializer.data)

class DetalleIngresoViewSet(viewsets.ModelViewSet):
    queryset = DetalleIngreso.objects.all()
    serializer_class = DetalleIngresoSerializer
