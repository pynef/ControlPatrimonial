# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url  # include,
from FrontEnd.views import HomeView

urlpatterns = patterns('panel.views',
    url(r'^$', HomeView.as_view()),
)
