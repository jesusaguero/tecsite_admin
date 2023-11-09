from django.contrib import admin

from .models import (Laboratorio, Pabellon, Polideportivo,
                     ReservaPolideportivo, Usuario)

admin.site.register(Usuario)
admin.site.register(Polideportivo)
admin.site.register(Pabellon)
admin.site.register(Laboratorio)
admin.site.register(ReservaPolideportivo)
