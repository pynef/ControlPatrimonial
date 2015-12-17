from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^rest/', include('ApiRest.urls')),
    url(r'/^', include('FrontEnd.urls')),
]
