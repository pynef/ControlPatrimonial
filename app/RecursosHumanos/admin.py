import socket
from django.contrib import admin

from app.RecursosHumanos.models import Persona
from app.RecursosHumanos.models import PersonaTelefono
from app.RecursosHumanos.models import Trabajador
from app.RecursosHumanos.models import Area
from app.RecursosHumanos.models import Puesto
from app.RecursosHumanos.models import TrabajadorPuesto


admin.site.register(Persona)
admin.site.register(PersonaTelefono)
admin.site.register(Trabajador)
admin.site.register(Area)
admin.site.register(Puesto)
admin.site.register(TrabajadorPuesto)
