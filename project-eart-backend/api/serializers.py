from .models import Publicaciones,Reacciones,Comentarios,Mensajes
from rest_framework import serializers

class PublicacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Publicaciones
        fields = '__all__'



class ReaccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reacciones
        fields = '__all__'

class ComentariosSeriaizer(serializers.ModelSerializer):
    class Meta:
        model=Comentarios
        fields = '__all__'

class MensajesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Mensajes
        fields = '__all__'