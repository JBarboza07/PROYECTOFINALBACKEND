from django.urls import path
from .views import PublicacionesListCreateVew,PublicacionesDetailView


urlpatterns = [
 
        path('Publicaciones/',PublicacionesListCreateVew.as_view(), name='Publicaciones-listar-crear'),
        path('Publicaciones/<int:pk>',PublicacionesDetailView.as_view(), name='Publicacion-listar-actualizar')
]