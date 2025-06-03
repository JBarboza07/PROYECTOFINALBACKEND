from rest_framework.generics import ListCreateAPIView,RetrieveUpdateAPIView
from models import Publicaciones,Reacciones,Comentarios,CustomUser,Mensajes
from .serializers import PublicacionesSerializer,ReaccionesSerializer,ComentariosSerializer,CustomUserSerializer,MensajesSerilizer

class PublicacionesListCreateVew(ListCreateAPIView):
      queryset =Publicaciones.objects.all()
      serializer_class = PublicacionesSerializer

class PublicacionesDetailView(RetrieveUpdateAPIView):
      queryset =Publicaciones.objects.all()
      serializer_class =PublicacionesSerializer

class ReaccionesListCreateview(ListCreateAPIView):
      queryset =Reacciones.objects.all()
      serializer_class = ReaccionesSerializer

class ReaccionesDetailView(RetrieveUpdateAPIView):
      queryset =Reacciones.objects.all()
      serializer_class = ReaccionesSerializer      

class ComentariosListCreateview(ListCreateAPIView):
      queryset =Comentarios.objects.all()
      serializer_class = ComentariosSeriaizer
class ComentariosDetailView(RetrieveUpdateAPIView):
        queryset =Comentarios.objects.all()
        serializer_class = ComentariosSeriaizer

class CustomUserListCreateView(ListCreateAPIView):
      queryset =CustomUser.objects.all()
      serializer_class = CustomUser.objects.all()

class CustomUserDetailview(RetrieveUpdateAPIView):
      queryset =Comentarios.objects.all()
      serializer_class = CustomUser.objects.all()
