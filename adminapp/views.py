from rest_framework import generics

from .models import (Horario, Laboratorio, Pabellon, Polideportivo,
                     ReservaLaboratorio, ReservaPolideportivo, Usuario)
from .serializers import (HorarioSerializer, LaboratorioSerializer,
                          PabellonSerializer, PolideportivoSerializer,
                          ReservaLaboratorioSerializer,
                          ReservaPolideportivoSerializer, UsuarioSerializer)


class UsuarioListView(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PolideportivoListView(generics.ListCreateAPIView):
    queryset = Polideportivo.objects.all()
    serializer_class = PolideportivoSerializer

class PabellonListView(generics.ListCreateAPIView):
    queryset = Pabellon.objects.all()
    serializer_class = PabellonSerializer

class LaboratorioListView(generics.ListCreateAPIView):
    queryset = Laboratorio.objects.all()
    serializer_class = LaboratorioSerializer

class HorarioListView(generics.ListCreateAPIView):
    queryset = Horario.objects.all()
    serializer_class = HorarioSerializer

class ReservaPolideportivoListView(generics.ListCreateAPIView):
    queryset = ReservaPolideportivo.objects.all()
    serializer_class = ReservaPolideportivoSerializer

class ReservaLaboratorioListView(generics.ListCreateAPIView):
    queryset = ReservaLaboratorio.objects.all()
    serializer_class = ReservaLaboratorioSerializer