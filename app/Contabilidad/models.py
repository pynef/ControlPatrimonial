from django.db import models


"""Contabilidad"""
class CuentaContable(models.Model):
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    numero_cuenta = models.IntegerField()
    depreciacion = models.BooleanField(default=False)
    cuenta_depreciacion = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return '{0}'.format(self.nombre)

    class Meta:
        managed = True
        db_table = 'CuentaContable'
