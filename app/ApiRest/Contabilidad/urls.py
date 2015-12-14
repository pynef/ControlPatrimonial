# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers
from views import CuentaContableViewSet

router = routers.DefaultRouter()
router.register(r'cuenta_contable', CuentaContableViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
