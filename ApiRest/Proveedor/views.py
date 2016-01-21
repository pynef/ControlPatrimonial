from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.Proveedor.models import Proveedor, ProveedorTelefonos
from serializers import ProveedorSerializer,ProveedorTelefonosSerializer


class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

    #telefonos
    @detail_route(methods=['get'])
    def telefonos(self, request, **kwargs):
        proveedors = self.get_object()
        los_telefonos = ProveedorTelefonos.objects.filter(proveedor=proveedors.id)
        self.queryset = los_telefonos
        self.serializer_class = ProveedorTelefonosSerializer

        serializer = ProveedorTelefonosSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)

class ProveedorTelefonosViewSet(viewsets.ModelViewSet):
    queryset = ProveedorTelefonos.objects.all()
    serializer_class = ProveedorTelefonosSerializer
