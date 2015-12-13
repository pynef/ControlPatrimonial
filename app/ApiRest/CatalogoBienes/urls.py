# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers
from views import GrupoViewSet
from views import ClaseViewSet
from views import TipoViewSet
# from views import CatalogoBienViewSet
#from views import BienesPorClase

router = routers.DefaultRouter()
router.register(r'grupos', GrupoViewSet)
router.register(r'clases', ClaseViewSet)
router.register(r'tipos', TipoViewSet)
#router.register(r'bienes', CatalogoBienViewSet)
#router.register(r'bienes/clase/(?P<id>\d+)$', BienesPorClase)

urlpatterns = [
    url(r'^', include(router.urls)),
]
