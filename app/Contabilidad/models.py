from django.db import models


"""Contabilidad"""
class CuentaContable(models.Model):
    '''
    Las cuentas contables que se usaran en el sistema asi como el numero de
    cuenta de la depreciacion que va enlazada a unas cuentas contables.
    '''
    nombre = models.CharField(max_length=128)
    descripcion = models.TextField(blank=True, null=True)
    numero_cuenta = models.IntegerField()
    depreciacion = models.BooleanField(default=False)
    cuenta_depreciacion = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return '{0} - {1}'.format(self. numero_cuenta, self.nombre)

    class Meta:
        managed = True
        db_table = 'CuentaContable'
