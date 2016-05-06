from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from app.Bienes.models import Bien, Ingreso, DetalleIngreso, DisposicionBien
from app.CatalogoBienes.models import CatalogoBien
from app.Institucion.models import Institucion
from serializers import BienSerializer, IngresoSerializer, DetalleIngresoSerializer, DisposicionBienSerializer
from app.Helpers.main import complete_zeros


class BienViewSet(viewsets.ModelViewSet):
    queryset = Bien.objects.all()
    serializer_class = BienSerializer

    @detail_route(methods=['get'])
    def detalle_ingreso(self, request, **kwargs):
        detalle_ingreso = self.get_object()
        detalles_ingreso = Bien.objects.filter(detalle_ingreso=detalle_ingreso)
        self.queryset = detalles_ingreso
        self.serializer_class = BienSerializer

        serializers = BienSerializer(instance=self.queryset, many=True)
        return Response(serializers.data)

class BienDisponibleViewSet(viewsets.ModelViewSet):
    queryset = Bien.objects.filter(almacen=True,is_active=True).order_by('-create_at')
    serializer_class = BienSerializer

class DisposicionBienViewSet(viewsets.ModelViewSet):
    queryset = DisposicionBien.objects.all().order_by('-create_at')
    serializer_class = DisposicionBienSerializer


class IngresoViewSet(viewsets.ModelViewSet):
    ''' Nota de Ingres o Nota de Entrada '''
    queryset = Ingreso.objects.all().order_by('-create_at')
    serializer_class = IngresoSerializer

    @detail_route(methods=['get'])
    def detalles(self, request, **kwargs):
        nota_ingreso = self.get_object()
        detalles = DetalleIngreso.objects.filter(ingreso=nota_ingreso.id)
        self.queryset = detalles
        self.serializer_class = DetalleIngresoSerializer

        serializers = DetalleIngresoSerializer(instance=self.queryset, many=True)
        return Response(serializers.data)

    @detail_route(methods=['post'])
    def savedetalles(self, request, **kwargs):
        nota_ingreso = self.get_object()
        detalles =  request.data['detalles']
        for detalle in detalles:
            cat_id = detalle['catalogo']['id']
            det  = DetalleIngreso()
            det.ingreso = nota_ingreso
            det.catalogo = CatalogoBien.objects.get(id=cat_id);
            det.cantidad = detalle['cantidad']
            det.precio_unitario = detalle['precio_unitario']
            det.tipo_moneda = detalle['tipo_moneda']
            try:
                det.save()
            except:
                print 'lloramos'
            # si pasa
        print request.POST.get('detalles')
        detalles = DetalleIngreso.objects.filter(ingreso=nota_ingreso)
        self.queryset = detalles
        self.serializer_class = DetalleIngresoSerializer

        serializers = DetalleIngresoSerializer(instance=self.queryset, many=True)
        return Response(serializers.data)



class DetalleIngresoViewSet(viewsets.ModelViewSet):
    ''' Detalle de la nota de ingreso/entrada '''
    queryset = DetalleIngreso.objects.all()
    serializer_class = DetalleIngresoSerializer

    @detail_route(methods=['post'])
    def generar(self, request, **kwargs):
        detalle = self.get_object()
        if not detalle.pendiente:
            return Response({'detail' : "Ya se Genero los Bienes de este Detalle", 'args' : []},
                     status = 500)
        catalogo = detalle.catalogo
        cc = catalogo.cuenta_contable.cuenta_numero
        clase = complete_zeros(2, str(catalogo.clase.id))
        grupo = complete_zeros(2, str(catalogo.clase.grupo.id))
        base_code = '{0}.{1}{2}'.format(cc, clase, grupo)
        bien = Bien.objects.filter(
                codigo__contains=base_code).order_by('-codigo').first()
        if(bien):
            last_code = bien.codigo[len(bien.codigo)-4:len(bien.codigo)]
        else:
            last_code = 0
        print last_code
        last_number = int(last_code)+1

        for i in range(0, detalle.cantidad):
            code = '{0}.{1}'.format(
                        base_code, complete_zeros(4, str(last_number+i)))
            # guardamos el bien
            b = Bien()
            b.codigo = code
            b.detalle_ingreso = detalle
            b.catalogo = catalogo
            b.institucion = Institucion.objects.get(id=1)
            b.estado = 1
            b.save()
            print code
        detalle.pendiente = False
        detalle.save()
        self.queryset = Bien.objects.filter(detalle_ingreso = detalle)
        serializers = BienSerializer(instance=self.queryset, many=True)
        return Response(serializers.data)
