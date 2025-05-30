from django.urls import path
from .views import PublicacionesListCreateVew


urlpatterns = [
 
        path('Publicaciones/',PublicacionesListCreateVew.as_view(), name='Publicaciones-listar-crear')

]