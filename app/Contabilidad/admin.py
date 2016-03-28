import socket
from django.contrib import admin

from app.Contabilidad.models import CuentaContable, CuentaDepreciacion

admin.site.register(CuentaContable)
admin.site.register(CuentaDepreciacion)
