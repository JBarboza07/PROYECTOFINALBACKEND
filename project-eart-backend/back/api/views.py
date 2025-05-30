from rest_framework.generics import ListCreateAPIView,RetrieveDestroyAPIView
from models import Publicaciones,Reacciones,Comentarios,CustomUser,Mensajes
from .serializers import PublicacionesSerializer,ReaccionesSerializer,ComentariosSeriaizer,CustomUserSerializer,MensajesSerilizer

class PublicacionesListCreateVew(ListCreateAPIView):
      queryset =Publicaciones.objects.all()
      serializer_class =PublicacionesSerializer

class ReaccionesListCreateview(ListCreateAPIView):
      queryset =Reacciones.objects.all()
      serializer_class =ReaccionesSerializer

class ComentariosListCreateview(ListCreateAPIView):
      queryset =Comentarios.objects.all()
