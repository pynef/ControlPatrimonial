# -*- coding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View
import simplejson as json


class LoginRequiredMixin(View):
    '''
       Mixin class for force login
       verified
    '''

    @classmethod
    def as_view(cls, **initkwargs):
        view = super(LoginRequiredMixin, cls).as_view(**initkwargs)
        return login_required(view)


#class HomeView(LoginRequiredMixin):
class HomeView(View):
    '''
        Class base View para la pagina principal
    '''
    #login_required = True
    template_name = 'index.html'

    def get(self, req):
        ctx = {'user': req.user}
        return render(req, 'index.html', ctx)

class TestView(View):
    '''
        Class base View para la pagina de test de jasmine
    '''
    template_name = 'index.html'

    def get(self, req):
        ctx = {'user': req.user}
        return render(req, 'test.html', ctx)
