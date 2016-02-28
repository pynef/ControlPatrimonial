from django.contrib.auth.models import User,Group
from app.CatalogoBienes.models import Grupo, Clase
from app.Institucion.models import Institucion, Sede, Local, Ambiente, TipoAmbiente



grupo1 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Agricola y Pesquero',
)

grupo2 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Aire Acondicionado y Refrigeracion',
)


grupo3 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Licencias',
)


grupo4 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Aseo y Limpieza',
)


grupo5 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Cocina y Comedor',
)

grupo6 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Cultura y Arte',
)


grupo7 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Electricidad y Electronica',
)


grupo8 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Hospitalizacion',
)


grupo9 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Instrumento de Medicion',
)


grupo10 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Maquinaria, Vehiculos y otros',
)


grupo11 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Oficina',
)


grupo12 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Recreacion y Deporte',
)


grupo13 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Seguridad Industrial',
)


grupo14 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Telecomunicaciones',
)


grupo15 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Inmuebles',
)


grupo16 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Telas en general',
)


grupo17 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Propaganda Tubos Metalicos',
)


grupo18 = Grupo.objects.create(
    institucion = Institucion.objects.get(pk=1),
    nombre = 'Computo - Procesamiento de datos',
)
