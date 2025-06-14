from rest_framework.generics import ListCreateAPIView,RetrieveUpdateAPIView,RetrieveUpdateDestroyAPIView
from .models import Publicaciones,Reacciones,Comentarios,Usuario
from .serializers import PublicacionesSerializer,ReaccionesSerializer,ComentariosSeriaizer
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth import authenticate

class PublicacionesListCreateVew(ListCreateAPIView):
      queryset =Publicaciones.objects.all()
      serializer_class = PublicacionesSerializer

class PublicacionesDetailView(RetrieveUpdateDestroyAPIView):
      queryset =Publicaciones.objects.all()
      serializer_class =PublicacionesSerializer

class ReaccionesListCreateview(ListCreateAPIView):
      queryset =Reacciones.objects.all()
      serializer_class = ReaccionesSerializer

class ReaccionesDetailView(RetrieveUpdateDestroyAPIView):
      queryset =Reacciones.objects.all()
      serializer_class = ReaccionesSerializer      

class ComentariosListCreateview(ListCreateAPIView):
      queryset =Comentarios.objects.all()
      serializer_class = ComentariosSeriaizer
class ComentariosDetailView(RetrieveUpdateDestroyAPIView):
        queryset =Comentarios.objects.all()
        serializer_class = ComentariosSeriaizer

class CrearUsuarioView(APIView):
      def post(self,request):
            nombre_usuario = request.data.get("username")
            correo_usuario = request.data.get("email")
            clave_usuario = request.data.get("password")
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

class LoginUsuarioView(APIView):
      def post(self,request):
            username = request.data.get("username")
            password = request.data.get("password")

            usuario = authenticate(username=username, password=password)

            if usuario is not None:
                  return Response({"exito":"USUARIO AUTENTICADO CON EXITO"})
            else:
                  return Response({"mensaje":"CONTRASEÑA INCORRECTOS"}, status=400)