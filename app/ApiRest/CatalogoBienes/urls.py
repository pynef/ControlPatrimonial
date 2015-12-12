# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers
from views import GrupoViewSet
from views import ClaseViewSet
from views import TipoViewSet
from views import CatalogoBienViewSet

router = routers.DefaultRouter()
router.register(r'grupos', GrupoViewSet)
router.register(r'clases', ClaseViewSet)
router.register(r'tipos', TipoViewSet)
router.register(r'bienes', CatalogoBienViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
