from django.contrib import admin

from app.Bienes.models import TipoMedida
from app.Bienes.models import DisposicionBienDetalle
from app.Bienes.models import Ingreso
from app.Bienes.models import DetalleIngreso
from app.Bienes.models import BajaBien
from app.Bienes.models import DisposicionBien
from app.Bienes.models import Bien
# from app.Bienes.models import TrasladoBien
from app.Bienes.models import ActivoFijo



admin.site.register(TipoMedida)
admin.site.register(DisposicionBienDetalle)
admin.site.register(Ingreso)
admin.site.register(DetalleIngreso)
admin.site.register(BajaBien)
admin.site.register(DisposicionBien)
admin.site.register(Bien)
# admin.site.register(TrasladoBien)
admin.site.register(ActivoFijo)
