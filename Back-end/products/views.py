from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from products import prod
# Create your views here.
def best_sellers(request):
    data = prod.getBest()
    return JsonResponse(data)

def men(request):
    data = prod.getMenProducts()
    return JsonResponse(data)

def women(request):
    data = prod.getWomenProducts()
    return JsonResponse(data)

def hats(request):
    data = prod.getHatProducts()
    return JsonResponse(data)