from django import forms
from django.forms import ModelForm
from .models import Usuario

class ClientForm(ModelForm):
    class Meta:
        model = Usuario
        fields =['idUsuario','Nombre','Apellido','Correo','Direccion','Contraseña','confirmContraseña']

        widget = {
            'idUsuario':forms.TextInput(attrs={'class':'form-control'}),
            'Nombre': forms.TextInput(attrs={'class':'form-control'}),
            'Apellido': forms.TextInput(attrs={'class':'form-control'}),
            'Correo': forms.TextInput(attrs={'class':'form-control'}),
            'Direccion': forms.Select(attrs={'class':'form-control'}),
            'Contraseña': forms.Select(attrs={'class':'form-control'}),
            'confirmContraseña': forms.Select(attrs={'class':'form-control'}),
        }