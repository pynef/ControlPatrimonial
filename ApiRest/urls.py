# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers


from ApiRest.RecursosHumanos.views import *
from ApiRest.CatalogoBienes.views import *
from ApiRest.Contabilidad.views import *
from ApiRest.Institucion.views import *
from ApiRest.Proveedor.views import *
from ApiRest.Bienes.views import *

#from app.ApiRest.Bienes import views
#from app.ApiRest.RecursosHumanos import views

router = routers.DefaultRouter()
#rutas de catalogo de bienes
router.register(r'grupos', GrupoViewSet)
router.register(r'clases', ClaseViewSet)
router.register(r'tipos', TipoViewSet)
router.register(r'catalogobienes', CatalogoBienViewSet)

#rutas de contabilidad
router.register(r'cuentas', CuentasViewSet)

#rutas de institucion
router.register(r'tipo_ambientes', TipoAmbienteViewSet)
router.register(r'instituciones', InstitucionViewSet)
router.register(r'sedes', SedeViewSet)
router.register(r'locales', LocalViewSet)
router.register(r'ambientes', AmbienteViewSet)


#rutas de proveedor
router.register(r'proveedores', ProveedorViewSet)
router.register(r'telefono_proveedor', ProveedorTelefonosViewSet)

#rutas de bienes
router.register(r'bienes', BienViewSet)
router.register(r'disposicion_bienes', DisposicionBienViewSet)
router.register(r'nota_ingreso', IngresoViewSet)
router.register(r'nota_ingreso_detalle', DetalleIngresoViewSet)


#rutas de recursos humanos
router.register(r'personas', PersonaViewSet)
router.register(r'trabajadores', TrabajadorViewSet)
router.register(r'areas', AreaViewSet)
router.register(r'puestos', PuestoViewSet)
# router.register(r'trabajador_puesto', TrabajadorPuestoViewSet)
router.register(r'trabajador_telefonos', PersonaTelefonosViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
