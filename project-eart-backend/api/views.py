from rest_framework.generics import ListCreateAPIView,RetrieveUpdateAPIView
from .models import Publicaciones,Reacciones,Comentarios,Usuario
from .serializers import PublicacionesSerializer,ReaccionesSerializer,ComentariosSeriaizer
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response


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

class CrearUsuarioView(APIView):
      def post(self,request):
            nombre_usuario = request.data.get("username")
            clave_usuario = request.data.get("password")
            correo_usuario = request.data.get("email")
            fechaNacimiento = request.data.get("fechaNacimiento")

            usuario = User.objects.create_user(
                  username=nombre_usuario,
                  email=correo_usuario,
                  password=clave_usuario
            )

            Usuario.objects.create(
                  usuario = usuario,
                  fechaNacimiento = fechaNacimiento
            )

            return Response({"creado":"USUARIO CREADO CON EXITO"})