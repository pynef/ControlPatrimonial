# -*- coding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import View
from ControlPatrimonial import settings
from app.Institucion.models import Institucion
from app.Institucion.models import Puesto
import simplejson as json

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


#class LoginRequiredMixin(View):
#    '''
#       Mixin class for force login
#       verified
#    '''
#
#    @classmethod
#    def as_view(cls, **initkwargs):
#        view = super(LoginRequiredMixin, cls).as_view(**initkwargs)
#        return login_required(view)


#class MyView(LoginRequiredMixin, View):
#    login_url = '/login/'
#    redirect_field_name = 'redirect_to'

#class HomeView(LoginRequiredMixin):

class InstitucionView(LoginRequiredMixin, View):
    '''
        Class base View para Eleccion de Institucion
    '''
    login_url = '/login/'
    redirect_to = '/home'
    template_name = 'institucion.html'

    def get(self, req):
        print 'InstitucionView'
        user = req.user
        puestos = Puesto.objects.filter(colaborador=user,
                                        institucion__is_active = True)
        print 'puestos - {0}'.format(puestos.count())
        if puestos.count() <= 0:
            return redirect(self.login_url)
        elif puestos.count() == 1:
            slug = puestos[0].institucion.slug
            url = '{0}/i/{1}'.format(self.redirect_to, slug)
            url = reverse('institucion', kwargs={'slug': slug})
            req.session['institucion'] = puestos[0].institucion.id
            print url
            return redirect(url)
        ctx = {
            'puestos': puestos,
            'user': req.user,
            'static_url': settings.STATIC_URL
        }
        return render(req, self.template_name, ctx)

    def post(self, req):
        institucion_id = req.POST.get('institucion_id')
        institucion = Institucion.objects.get(id=institucion_id)
        if institucion:
            req.session['institucion'] = institucion_id
            url = reverse('institucion', kwargs={'slug': institucion.slug})
            return redirect(url)
        return redirect(self.redirect_to)

class HomeView(LoginRequiredMixin, View):
    '''
        Class base View para la pagina principal
    '''
    login_url = '/login/'
    redirect_field_name = '/home'
    template_name = 'index.html'

    def get(self, req, slug):
        #start validation
        user =  req.user
        if not req.session.get('institucion', False):
            return redirect(self.login_url)
        institucion_id = req.session['institucion']
        institucion = Institucion.objects.get(id=institucion_id)
        if not institucion.slug == slug:
            return redirect(self.login_url)
        # end validation
        # cargar
        ctx = {
            'user': req.user,
            'static_url': settings.STATIC_URL
        }
        return render(req, 'index.html', ctx)


class TestView(View):
    '''
        Class base View para la pagina de test de jasmine
    '''
    template_name = 'specs.html'

    def get(self, req):
        ctx = {'user': req.user}
        return render(req, 'test.html', ctx)
