# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url  # include,
from FrontEnd.views import HomeView
from FrontEnd.views import InstitucionView
from FrontEnd.views import TestView

urlpatterns = [
<<<<<<< HEAD
    url(r'', HomeView.as_view()),
    # only for dev enviroment
    url(r'^spects$', TestView.as_view()),
=======
    url(r'i/(?P<slug>[-\w]+)/', HomeView.as_view(), name='institucion'),
    url(r'home', InstitucionView.as_view(), name='chose'),
    # only for dev enviroment
    url(r'^spects$', TestView.as_view(), name='spects'),
>>>>>>> 792ff8b2637c03eaebe8da042134f2d3eab37abb
]
