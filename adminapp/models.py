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
        return f"{self.nombre} - {self.pabellon_nombre}"
    
class Horario(models.Model):
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.hora_inicio.strftime('%H:%M')} a {self.hora_fin.strftime('%H:%M')}"

class ReservaLaboratorio(models.Model):
    laboratorio_nombre = models.CharField(max_length=255)
    fecha = models.DateField()
    Horario = models.ForeignKey(Horario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.laboratorio.nombre} - {self.fecha} - {self.horario}"

class ReservaPolideportivo(models.Model):
    polideportivo_nombre = models.CharField(max_length=255)
    fecha = models.DateField()
    Horario = models.ForeignKey(Horario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.polideportivo.nombre} - {self.fecha} - {self.horario}"
