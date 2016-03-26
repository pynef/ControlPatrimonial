from django.contrib import admin

from app.Bienes.models import TipoMedida
from app.Bienes.models import TipoAlmacen
from app.Bienes.models import Ingreso
from app.Bienes.models import DetalleIngreso
from app.Bienes.models import AltaBien
from app.Bienes.models import DisposicionBien
from app.Bienes.models import AsignacionBien
from app.Bienes.models import TrasladoBien


admin.site.register(TipoMedida)
admin.site.register(TipoAlmacen)
admin.site.register(Ingreso)
admin.site.register(DetalleIngreso)
admin.site.register(AltaBien)
admin.site.register(DisposicionBien)
admin.site.register(AsignacionBien)
admin.site.register(TrasladoBien)
