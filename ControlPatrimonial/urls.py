from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^rest/', include('ApiRest.urls')),
    url(r'^', include('FrontEnd.urls')),
    url(r'^', include('django.contrib.auth.urls')),
    # url(r'^static/(?P<path>.*)$', 'django.views.static.serve',{'document_root': settings.STATIC_ROOT}),
]
