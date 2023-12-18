from django.urls import path

from .views import (HorarioDetailView, HorarioListView, LaboratorioDetailView,
                    LaboratorioListView, PabellonDetailView, PabellonListView,
                    PolideportivoDetailView, PolideportivoListView,
                    ReservaLaboratorioDetailView, ReservaLaboratorioListView,
                    ReservaPolideportivoDetailView,
                    ReservaPolideportivoListView, UsuarioDetailView,
                    UsuarioListView)

urlpatterns = [
    path('api/usuarios/', UsuarioListView.as_view(), name='usuario-list'),
    path('api/usuarios/<int:pk>/', UsuarioDetailView.as_view(), name='usuario-detail'),
    path('api/polideportivos/', PolideportivoListView.as_view(), name='polideportivo-list'),
    path('api/polideportivos/<int:pk>/', PolideportivoDetailView.as_view(), name='polideportivo-detail'),
    path('api/pabellones/', PabellonListView.as_view(), name='pabellon-list'),
    path('api/pabellones/<int:pk>/', PabellonDetailView.as_view(), name='pabellon-detail'),
    path('api/laboratorios/', LaboratorioListView.as_view(), name='laboratorio-list'),
    path('api/laboratorios/<int:pk>/', LaboratorioDetailView.as_view(), name='laboratorio-detail'),
    path('api/horarios/', HorarioListView.as_view(), name='horario-list'),
    path('api/horarios/<int:pk>/', HorarioDetailView.as_view(), name='horario-detail'),
    path('api/reservapolideportivos/', ReservaPolideportivoListView.as_view(), name='reservapolideportivo-list'),
    path('api/reservapolideportivos/<int:pk>/', ReservaPolideportivoDetailView.as_view(), name='reservapolideportivo-detail'),
    path('api/reservalaboratorios/', ReservaLaboratorioListView.as_view(), name='reservalaboratorio-list'),
    path('api/reservalaboratorios/<int:pk>/', ReservaLaboratorioDetailView.as_view(), name='reservalaboratorio-detail'),
]
