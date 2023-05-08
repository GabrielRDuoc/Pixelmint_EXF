from django.contrib import admin
from .models import Categoria
from .models import Producto
from .models import Usuario
from .models import carrito
from .models import item

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Usuario)
admin.site.register(carrito)
admin.site.register(item)