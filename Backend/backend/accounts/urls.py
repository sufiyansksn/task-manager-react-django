from django.urls import path
from .import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('token/', TokenObtainPairView.as_view(), name='TokenObtainPairView'),
]
