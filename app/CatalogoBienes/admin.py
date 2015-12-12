from django.contrib import admin

from app.CatalogoBienes.models import Grupo
from app.CatalogoBienes.models import Clase
from app.CatalogoBienes.models import TipoCatalogoBien
from app.CatalogoBienes.models import CatalogoBien

admin.site.register(Grupo)
admin.site.register(Clase)
admin.site.register(TipoCatalogoBien)
admin.site.register(CatalogoBien)
