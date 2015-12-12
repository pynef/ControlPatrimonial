import socket
from django.contrib import admin


from app.Proveedor.models import Proveedor
from app.Proveedor.models import ProveedorTelefonos


admin.site.register(Proveedor)
admin.site.register(ProveedorTelefonos)
