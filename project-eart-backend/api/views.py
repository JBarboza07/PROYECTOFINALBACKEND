from rest_framework.generics import ListCreateAPIView,RetrieveUpdateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView,RetrieveAPIView
from .models import Publicaciones,Reacciones,Comentarios,Usuario
from .serializers import PublicacionesSerializer,ReaccionesSerializer,ComentariosSerializer,UsuariosSerializer
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken
from rest_framework.permissions import BasePermission

class PermisosVistas(BasePermission):
      def has_permission(self, request, view):

            usuario = request.user # obtenemos la verificación que el usuario está autenticado

            grupos_usuarios = usuario.groups.values_list('name', flat=True) # obtenemos todos los grupos de la BD

            metodo = request.method # obtenemos el método de la petición

            """
                  VALIDACIONES DE PERMISOS PARA LAS VISTAS
            """

            if "usuario" in grupos_usuarios and metodo in ["GET","POST"]:
                  return True
            
            if "administrador" in grupos_usuarios and metodo in ["GET","POST","PUT","PATCH","DELETE"]:
                  return True
            


            return False
      
class PermisosVistas2(BasePermission):
      def has_permission(self, request, view):

            usuario = request.user # obtenemos la verificación que el usuario está autenticado

            grupos_usuarios = usuario.groups.values_list('name', flat=True) # obtenemos todos los grupos de la BD

            metodo = request.method # obtenemos el método de la petición

            """
                  VALIDACIONES DE PERMISOS PARA LAS VISTAS
            """

            if "usuario" in grupos_usuarios and metodo in ["GET","POST","DELETE"]:
                  return True
            
            if "administrador" in grupos_usuarios and metodo in ["GET","POST","PUT","PATCH","DELETE"]:
                  return True
            


            return False
                  

class PublicacionesListCreateView(ListCreateAPIView):
      permission_classes = [PermisosVistas]
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
      permission_classes = [PermisosVistas2]
      queryset =Comentarios.objects.all()
      serializer_class = ComentariosSerializer
class ComentariosDetailView(RetrieveUpdateDestroyAPIView):
        queryset =Comentarios.objects.all()
        serializer_class = ComentariosSerializer

class UsuariosListView(ListAPIView):
      queryset =User.objects.all()
      serializer_class = UsuariosSerializer


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
                  token_acceso = AccessToken.for_user(usuario)
                  token_actualizacion = RefreshToken.for_user(usuario)
                  return Response({"exito":"USUARIO AUTENTICADO CON EXITO","id":usuario.id,"token":str(token_acceso), "refresh":str(token_actualizacion)}, status=200)
            else:
                  return Response({"mensaje":"CONTRASEÑA INCORRECTOS"}, status=400)
            
class UsuarioIdView(RetrieveAPIView):
      lookup_field = 'id'
      queryset =User.objects.all()
      serializer_class = UsuariosSerializer
      