import socket
from django.contrib import admin
from app.Institucion.models import TipoAmbiente
from app.Institucion.models import Institucion
from app.Institucion.models import Sede
from app.Institucion.models import Local
from app.Institucion.models import Ambiente
from app.Institucion.models import Puesto


admin.site.register(TipoAmbiente)
admin.site.register(Institucion)
admin.site.register(Sede)
admin.site.register(Local)
admin.site.register(Ambiente)
admin.site.register(Puesto)

# class InstitucionAdmin(admin.ModelAdmin):
# 	list_display = ('nombre',
# 					'razon_social',
# 					'direccion_fiscal',
# 					'email',
# 					'ruc',
# 					'user',
# 					'workstation_name',
# 					'workstation_ip',)
# 	exclude = ('user', 'workstation_name', 'workstation_ip',)

# 	def save_model(self, request, obj, form, change):
# 		obj.user = request.user
# 		obj.workstation_name = socket.gethostname()
# 		obj.workstation_ip = socket.gethostbyname(socket.gethostname())
# 		obj.save()

# admin.site.register(Institucion, InstitucionAdmin)
