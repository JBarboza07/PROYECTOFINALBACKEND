from django.db import models
from django.contrib.auth.models import AbstractUser

class Publicaciones(models.Model):
  fechaPublicaion = models.DateField()
  timePublicacion = models.TimeField()
  publicacionFoto = models.TextField()
  publicacion = models.TextField()

class Reacciones(models.Model):
  numeroDeReacciones = models.IntegerField()

class Comentarios(models.Model):
  fechaComentarios = models.DateField()
  timeComentarios = models.TimeField()
  comentarios = models.CharField(max_length=100,blank=True)

class CustomUser(AbstractUser):
  Reacciones = models.ForeignKey(Reacciones, on_delete=models.CASCADE)
  publicaciones = models.ForeignKey(Publicaciones, on_delete=models.CASCADE)
  Comentarios = models.ForeignKey(Comentarios, on_delete=models.CASCADE)
  fechaNacimiento = models.DateField()
  
class Mensajes(models.Model):
  fechaMensajes = models.DateField()
  timeMensajes = models.TimeField()
  mensajes = models.CharField(max_length=100,blank=True)

  









# Create your models here.
