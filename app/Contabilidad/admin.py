import socket
from django.contrib import admin

# from app.Contabilidad.models import CuentaContable, CuentaDepreciacion
from app.Contabilidad.models import Cuentas

# admin.site.register(CuentaContable)
# admin.site.register(CuentaDepreciacion)
admin.site.register(Cuentas)
