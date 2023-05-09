from django.urls import path,include

from .views import *
from .form import ClientForm
from django.conf import settings
from django.conf.urls.static import static
from turtle import settiltangle
from rest_api.views import *
from rest_api.viewslogin import login
#from debugapp import views

#para agregar nuevas path de url hay que agregar una coma al diccionario urlpatterns y seguir el formato descrito
urlpatterns = [
    path('index/', index,name="index"),
    path('Contacto', Contacto, name="Contacto"),
    path('', iniciarsesion, name="iniciarsesion"),
    path('productos/', productos, name="productos"),
    path('Crearcuenta/', register, name="Crearcuenta"),
    path('Catalogodepedidos/', Catalogodepedidos, name="Catalogodepedidos"),

    path('EditarPerfil_copy/', profile, name="EditarPerfil_copy"),
    path('admin/', admin, name="admin"),    
    path('users/count/', users_count, name='users_count'),
    path('user/<int:user_id>/last-login/', last_login_api, name='last_login_api'),
    path('login/',login,name="login"),

]
urlpatterns+= static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
