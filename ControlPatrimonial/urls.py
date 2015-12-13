from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^$', include('FrontEnd.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^CatalogoBienes/', include('app.ApiRest.CatalogoBienes.urls')),
]
