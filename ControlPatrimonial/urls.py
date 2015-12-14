from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
<<<<<<< HEAD
    url(r'^CatalogoBienes/', include('app.ApiRest.CatalogoBienes.urls')),
    url(r'^Empresa/', include('app.ApiRest.Institucion.urls')),
    url(r'^Contabilidad/', include('app.ApiRest.Contabilidad.urls')),
=======
    url(r'^rest/', include('app.ApiRest.urls')),
    url(r'^', include('FrontEnd.urls')),
>>>>>>> 5cdde62914178e21856199b6a15c0f50d3ef7450
]
