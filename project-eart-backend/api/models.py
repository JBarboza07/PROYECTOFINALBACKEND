from django.db import models
from django.contrib.auth.models import User

class Publicaciones(models.Model):
  fechaPublicaion = models.DateField(auto_now_add=True)
  timePublicacion = models.TimeField(auto_now_add=True)
  publicacionFoto = models.TextField()
  publicacion = models.TextField()

class Reacciones(models.Model):
  numeroDeReacciones = models.IntegerField()

class Comentarios(models.Model):
  fechaComentarios = models.DateTimeField()
  comentarios = models.CharField(max_length=100,blank=True)


class Usuario(models.Model):
  usuario = models.OneToOneField(User,on_delete=models.CASCADE)
  fechaNacimiento = models.DateField()
  ImagenPerfil = models.TextField(blank=True)
class Mensajes(models.Model):
  fechaMensajes = models.DateField()
  timeMensajes = models.TimeField()
  mensajes = models.CharField(max_length=100,blank=True)

  









# Create your models here.
