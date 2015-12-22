# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers


from ApiRest.CatalogoBienes.views import *
from ApiRest.Contabilidad.views import *
from ApiRest.Institucion.views import *
from ApiRest.Proveedor.views import *

#from app.ApiRest.Bienes import views
#from app.ApiRest.RecursosHumanos import views

router = routers.DefaultRouter()
#rutas de catalogo de bienes
router.register(r'grupos', GrupoViewSet)
router.register(r'clases', ClaseViewSet)
router.register(r'tipos', TipoViewSet)
router.register(r'catalogobienes', CatalogoBienViewSet)

#rutas de contabilidad
router.register(r'cuenta_contable', CuentaContableViewSet)

#rutas de institucion
router.register(r'tipo_ambiente', TipoAmbienteViewSet)
router.register(r'instituciones', InstitucionViewSet)
router.register(r'sede', SedeViewSet)
router.register(r'local', LocalViewSet)
router.register(r'ambiente', AmbienteViewSet)


#rutas de proveedor
router.register(r'proveedores', ProveedorViewSet)
router.register(r'telefono_proveedor', ProveedorTelefonosViewSet)

#rutas de bienes

#rutas de recursos humanos

urlpatterns = [
    url(r'^', include(router.urls)),
]
