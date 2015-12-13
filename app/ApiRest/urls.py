# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from rest_framework import routers
from app.ApiRest.CatalogoBienes import views
#from app.ApiRest.Bienes import views
#from app.ApiRest.Contabilidad import views
#from app.ApiRest.Institucion import views
#from app.ApiRest.Proveedor import views
#from app.ApiRest.RecursosHumanos import views


router = routers.DefaultRouter()
router.register(r'grupos', views.GrupoViewSet)
router.register(r'clases', views.ClaseViewSet)
router.register(r'tipos', views.TipoViewSet)
router.register(r'catalogobienes', views.CatalogoBienViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]