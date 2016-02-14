# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url  # include,
from FrontEnd.views import HomeView
from FrontEnd.views import TestView

urlpatterns = [
    url(r'', HomeView.as_view()),
    # only for dev enviroment
    url(r'^spects$', TestView.as_view()),
]
