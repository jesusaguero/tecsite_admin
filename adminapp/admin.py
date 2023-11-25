from django.contrib import admin

from .models import (Laboratorio, Pabellon, Polideportivo, ReservaLaboratorio,
                     ReservaPolideportivo, Usuario)

admin.site.register(Usuario)
admin.site.register(Polideportivo)
admin.site.register(Pabellon)
admin.site.register(Laboratorio)
admin.site.register(ReservaPolideportivo)
admin.site.register(ReservaLaboratorio)
