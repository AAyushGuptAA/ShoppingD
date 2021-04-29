from django.urls import path
from . import views

urlpatterns = [
    path("best/", views.best_sellers, name="Best_Sellers"),
    path("men/", views.men, name="Men Items"),
    path("women/", views.women, name="Women Items"),
    path("hat/", views.hats, name="All Hats")
]