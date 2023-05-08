from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.utils import timezone
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes

@api_view(['POST'])
def login(request):
    if request.content_type != 'application/json':
        return Response("La solicitud no está en formato JSON válido")

    data= JSONParser().parse(request)

    username=data['username']
    password=data['password']
    try:
        user=User.objects.get(username=username)
    except User.DoesNotExist:
        return Response("usuario no existe")
    pass_valido=check_password(password,user.password)

    if not pass_valido:
        return Response("contraseña incorrecta")
    token, created=Token.objects.get_or_create(user=user)
    return Response(token.key)

