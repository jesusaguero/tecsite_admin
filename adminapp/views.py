from rest_framework import generics

from .models import (Laboratorio, Pabellon, Polideportivo,
                     ReservaPolideportivo, Usuario)
from .serializers import (LaboratorioSerializer, PabellonSerializer,
                          PolideportivoSerializer,
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

class ReservaPolideportivoListView(generics.ListCreateAPIView):
    queryset = ReservaPolideportivo.objects.all()
    serializer_class = ReservaPolideportivoSerializer
