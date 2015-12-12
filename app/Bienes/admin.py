from django.contrib import admin

from app.Bienes.models import TipoMedida
from app.Bienes.models import TipoAlmacen
from app.Bienes.models import Almacen
from app.Bienes.models import Inventario
from app.Bienes.models import AltaBien
from app.Bienes.models import DisposicionBien
from app.Bienes.models import AsignacionBien
from app.Bienes.models import TrasladoBien


admin.site.register(TipoMedida)
admin.site.register(TipoAlmacen)
admin.site.register(Almacen)
admin.site.register(Inventario)
admin.site.register(AltaBien)
admin.site.register(DisposicionBien)
admin.site.register(AsignacionBien)
admin.site.register(TrasladoBien)
