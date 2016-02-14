from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^rest/', include('ApiRest.urls')),
<<<<<<< HEAD
    url(r'^home/', include('FrontEnd.urls')),
=======
    url(r'^', include('FrontEnd.urls')),
    url(r'^', include('django.contrib.auth.urls')),
>>>>>>> 792ff8b2637c03eaebe8da042134f2d3eab37abb
    # url(r'^static/(?P<path>.*)$', 'django.views.static.serve',{'document_root': settings.STATIC_ROOT}),
]
