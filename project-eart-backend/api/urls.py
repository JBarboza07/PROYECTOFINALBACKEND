from django.urls import path
from .views import PublicacionesListCreateVew,PublicacionesDetailView,ReaccionesListCreateview,ReaccionesDetailView,ComentariosListCreateview,ComentariosDetailView
from .views import CrearUsuarioView


urlpatterns = [
        path('Publicaciones/',PublicacionesListCreateVew.as_view(), name='Publicaciones-listar-crear'),
        path('Publicaciones/<int:pk>',PublicacionesDetailView.as_view(), name='Publicacion-listar-actualizar'),
        path('Reacciones/',ReaccionesListCreateview.as_view(), name='Reacciones-lista-crear'),
        path('Reacciones/<int:pk>',ReaccionesDetailView.as_view(), name='Reacciones-lista-actualizar'),
        path('Comentarios/',ComentariosListCreateview.as_view(), name='Comentarios-lista-crear'),
        path('Comentarios/<int:pk>',ComentariosDetailView.as_view(), name='Comentarios-lista-actulizar'),
        path('CustomUser/',CrearUsuarioView.as_view(), name='customUser-lista-crear'),

]














harold