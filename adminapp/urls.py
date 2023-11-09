from django.urls import path

from .views import (LaboratorioListView, PabellonListView,
                    PolideportivoListView, ReservaPolideportivoListView,
                    UsuarioListView)

urlpatterns = [
    path('api/usuarios/', UsuarioListView.as_view(), name='usuario-list'),
    path('api/polideportivos/', PolideportivoListView.as_view(), name='polideportivo-list'),
    path('api/pabellones/', PabellonListView.as_view(), name='pabellon-list'),
    path('api/laboratorios/', LaboratorioListView.as_view(), name='laboratorio-list'),
    path('api/reservas/', ReservaPolideportivoListView.as_view(), name='reserva-list'),
]
