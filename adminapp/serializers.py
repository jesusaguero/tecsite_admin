from rest_framework import serializers

from .models import (Laboratorio, Pabellon, Polideportivo,
                     ReservaPolideportivo, Usuario)


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

class ReservaPolideportivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservaPolideportivo
        fields = ['laboratorio', 'fecha', 'hora_inicio', 'hora_fin']
