from rest_framework import serializers

from .models import (Horario, Laboratorio, Pabellon, Polideportivo,
                     ReservaLaboratorio, ReservaPolideportivo, Usuario)


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['codigo', 'contrasena']

class PolideportivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Polideportivo
        fields = ['nombre']

class PabellonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pabellon
        fields = ['nombre']

class LaboratorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratorio
        fields = ['nombre', 'pabellon']

class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = ['hora_inicio', 'hora_fin']
class ReservaLaboratorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservaLaboratorio
        fields = ['laboratorio', 'fecha', 'Horario']

class ReservaPolideportivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservaPolideportivo
        fields = ['polideportivo', 'fecha', 'Horario']
