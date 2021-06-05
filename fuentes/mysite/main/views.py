from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(response):
    return HttpResponse("Hola mundo!")


def v1(response):
    return HttpResponse("Pagina v1!")
