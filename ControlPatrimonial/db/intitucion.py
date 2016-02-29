from django.contrib.auth.models import User,Group
from app.CatalogoBienes.models import *
from app.Institucion.models import Institucion, Sede, Local, Ambiente, TipoAmbiente

tipo_ambiente1 = TipoAmbiente.objects.create(
    nombre = 'Aula'
)
tipo_ambiente2 = TipoAmbiente.objects.create(
    nombre = 'Oficina'
)


institucion1 = Institucion.objects.create(
    nombre = 'ICPNA',
    razon_social = 'Instituto Cultura Peruana Norte Americana',
    direccion_fiscal = 'Jr. ayacucho 169',
    email = 'icpnarc.icpnarc.edu.pe',
    ruc = '204862594511',
    is_active = True,
    create_at = '01-01-2016'
)

sede1_institucion1 = Sede.objects.create(
    institucion = institucion1,
    nombre ='Junin'
)
sede2_institucion1 = Sede.objects.create(
    institucion = institucion1,
    nombre ='Huanuco'
)
sede3_institucion1 = Sede.objects.create(
    institucion = institucion1,
    nombre ='Ayacucho'
)
sede4_institucion1 = Sede.objects.create(
    institucion = institucion1,
    nombre ='La Merced'
)


local1_sede1 = Local.objects.create(
    institucion = institucion1,
    sede = sede1_institucion1,
    nombre ='Huancayo',
    direccion ='Jr. ayacucho 169'
)

ambiente1_local1 = Ambiente.objects.create(
    institucion = institucion1,
    sede = sede1_institucion1,
    local = local1_sede1,
    tipo_ambiente = tipo_ambiente2,
    nombre = '201',
    piso = 2
)
