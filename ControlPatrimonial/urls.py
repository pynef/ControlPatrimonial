from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = [
	url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
	url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),  # Django JET dashboard URLS
    url(r'^admin/', admin.site.urls),
    url(r'^rest/', include('ApiRest.urls')),
    url(r'^', include('FrontEnd.urls')),
    url(r'^', include('django.contrib.auth.urls'))
]
