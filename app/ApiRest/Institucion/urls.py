# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers
from views import TipoAmbienteViewSet
from views import InstitucionViewSet
from views import SedeViewSet
from views import LocalViewSet
from views import AmbienteViewSet

router = routers.DefaultRouter()
router.register(r'tipo_ambiente', TipoAmbienteViewSet)
router.register(r'instituciones', InstitucionViewSet)
router.register(r'sede', SedeViewSet)
router.register(r'local', LocalViewSet)
router.register(r'ambiente', AmbienteViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
