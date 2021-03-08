from django.urls import path
from . import views

urlpatterns = [
    path("", views.temp, name="type either 'add/' or 'check/' in the end of the url"),
    path("add/", views.index, name="index"),
    path("check/", views.myuser, name="myuser"),
    path("user/", views.retrieveInfo, name="retrieveInfo"),
    path("cartLis/", views.cart, name="cart"),
    path("cartmodify/", views.cartmod, name="cartmodify"),
    path("ordersmodify/", views.ordersmod, name="orders")
]