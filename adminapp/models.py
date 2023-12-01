from django.db import models


class Usuario(models.Model):
    codigo = models.CharField(max_length=50, unique=True)
    contrasena = models.CharField(max_length=25)

    def __str__(self):
        return self.codigo

class Polideportivo(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

class Pabellon(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

class Laboratorio(models.Model):
    nombre = models.CharField(max_length=255)
    pabellon = models.ForeignKey(Pabellon, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class ReservaLaboratorio(models.Model):
    laboratorio = models.ForeignKey(Laboratorio, on_delete=models.CASCADE, default=1)
    fecha = models.DateField()
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.laboratorio.nombre} - {self.fecha} - {self.hora_inicio} a {self.hora_fin}"

class ReservaPolideportivo(models.Model):
    polideportivo = models.ForeignKey(Polideportivo, on_delete=models.CASCADE, default=1)
    fecha = models.DateField()
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.polideportivo.nombre} - {self.fecha} - {self.hora_inicio} a {self.hora_fin}"
