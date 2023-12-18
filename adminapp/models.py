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
        return f"{self.nombre} - {self.pabellon}"
    
class Horario(models.Model):
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.hora_inicio.strftime('%H:%M')} a {self.hora_fin.strftime('%H:%M')}"

class ReservaLaboratorio(models.Model):
    laboratorio = models.ForeignKey(Laboratorio, on_delete=models.CASCADE, default=0)
    fecha = models.DateField()
    Horario = models.ForeignKey(Horario, on_delete=models.CASCADE)
    Usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f"{self.laboratorio.nombre} - {self.Horario} - {self.Usuario.codigo}"

class ReservaPolideportivo(models.Model):
    polideportivo = models.ForeignKey(Polideportivo, on_delete=models.CASCADE, default=0)
    fecha = models.DateField()
    Horario = models.ForeignKey(Horario, on_delete=models.CASCADE)
    Usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f"{self.polideportivo.nombre} - {self.Horario} - {self.Usuario.codigo}"
