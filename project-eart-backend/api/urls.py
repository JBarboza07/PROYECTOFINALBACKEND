from django.urls import path
from .views import PublicacionesListCreateView,PublicacionesDetailView,ReaccionesListCreateview,ReaccionesDetailView,ComentariosListCreateview,ComentariosDetailView
from .views import CrearUsuarioView,LoginUsuarioView,UsuariosListView,UsuarioIdView

urlpatterns = [
        path('Publicaciones/',PublicacionesListCreateView.as_view(), name='Publicaciones-listar-crear'),
        path('Publicaciones/<int:pk>/',PublicacionesDetailView.as_view(), name='Publicacion-listar-actualizar'),
        path('Reacciones/',ReaccionesListCreateview.as_view(), name='Reacciones-lista-crear'),
        path('Reacciones/<int:pk>/',ReaccionesDetailView.as_view(), name='Reacciones-lista-actualizar'),
        path('Comentarios/',ComentariosListCreateview.as_view(), name='Comentarios-lista-crear'),
        path('Comentarios/<int:pk>',ComentariosDetailView.as_view(), name='Comentarios-lista-actulizar'),
        path('CustomUser/',CrearUsuarioView.as_view(), name='customUser-lista-crear'),
        path('loginUser/',LoginUsuarioView.as_view(), name='customUser-lista-crear'),
        path('users/',UsuariosListView.as_view(), name='Publicaciones-listar-crear'),
        path('user_unico/<int:id>/',UsuarioIdView.as_view(), name='Publicacion-listar-actualizar'),

]













