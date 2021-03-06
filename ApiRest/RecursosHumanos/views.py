from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from app.RecursosHumanos.models import Persona, PersonaTelefono, Trabajador, Area, Puesto
from app.Proveedor.models import Proveedor
from serializers import PersonaSerializer, PersonaTelefonosSerializer,  TrabajadorSerializer
from serializers import AreaSerializer, PuestoSerializer


class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all().filter(is_active=True)
    serializer_class = PersonaSerializer

    #telefonos
    @detail_route(methods=['get'])
    def telefonos(self, request, **kwargs):
        persona = self.get_object()
        los_telefonos = PersonaTelefono.objects.filter(persona=persona.id)
        self.queryset = los_telefonos
        self.serializer_class = PersonaTelefonosSerializer

        serializer = PersonaTelefonosSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)

    #institucion
    @detail_route(methods=['get'])
    def institucion(self, request, **kwargs):
        institucion = self.get_object()
        las_personas = Persona.objects.filter(institucion=institucion.id)
        self.queryset = las_personas
        self.serializer_class = PersonaSerializer

        serializer = PersonaSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)


    # personas no trabajador_restantes
    @detail_route(methods=['get'])
    def personas_no_trabajadoras(self, request, **kwargs):
        #almacenaremos a las personas que no trabajan
        institucion = self.get_object()
        lista = []
        trabajadores = Trabajador.objects.all().filter(institucion=institucion.id).filter(is_active=True)
        for i in trabajadores:
            lista.append(i.persona.id)
        persona = Persona.objects.filter(institucion=institucion.id).exclude(id__in=lista)

        serializer = PersonaSerializer(instance=persona, many=True)
        return Response(serializer.data)

    # personas que no estan registrados como proveedores
    @detail_route(methods=['get'])
    def personas_no_proveedoras(self, request, **kwargs):
        #almacenaremos a las personas que no trabajan
        institucion = self.get_object()
        lista = []
        proveedores = Proveedor.objects.all().filter(institucion=institucion.id).filter(is_active=True)
        for i in proveedores:
            lista.append(i.persona.id)
        persona = Persona.objects.filter(institucion=institucion.id).exclude(id__in=lista)

        serializer = PersonaSerializer(instance=persona, many=True)
        return Response(serializer.data)



class PersonaTelefonosViewSet(viewsets.ModelViewSet):
    queryset = PersonaTelefono.objects.all().filter(is_active=True)
    serializer_class = PersonaTelefonosSerializer


class TrabajadorViewSet(viewsets.ModelViewSet):
    queryset = Trabajador.objects.all().filter(is_active=True)
    serializer_class = TrabajadorSerializer


class AreaViewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all().filter(is_active=True)
    serializer_class = AreaSerializer


class PuestoViewSet(viewsets.ModelViewSet):
    queryset = Puesto.objects.all().filter(is_active=True)
    serializer_class = PuestoSerializer

    #area
    @detail_route(methods=['get'])
    def area(self, request, **kwargs):
        area = self.get_object()
        puestos = Puesto.objects.filter(area=area.id)
        self.queryset = puestos
        self.serializer_class = PuestoSerializer

        serializer = PuestoSerializer(instance=self.queryset, many=True)
        return Response(serializer.data)

# class TrabajadoresRestantesViewSet(viewsets.ModelViewSet):
#     queryset = Trabajador.objects.all().filter(is_active=True)
#     @detail_route(methods=['get'])
#     def trabajadores_faltantes(self, request, **kwargs):
#         personas = Personas.objects.all().filter(is_active=True)
#         trabajadores = Trabajador.objects.all().filter(is_active=True)
#         print type(personas)
#         print type(trabajadores)
#         # self.queryset = trabajadores
#         # self.serializer_class = TrabSerializer
#
#         serializer = TrabSerializer(instance = trabajadores, many=True)
#         return Response(serializer.data)


# class TrabajadorPuestoViewSet(viewsets.ModelViewSet):
#     queryset = TrabajadorPuesto.objects.all().filter(is_active=True)
#     serializer_class = TrabajadorPuestoSerializer
