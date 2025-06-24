from .models import Publicaciones,Reacciones,Comentarios,Mensajes
from rest_framework import serializers
from django.contrib.auth.models import User

class PublicacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Publicaciones
        fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'


class ReaccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reacciones
        fields = '__all__'

class ComentariosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comentarios
        fields = '__all__'

class MensajesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Mensajes
        fields = '__all__'