from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# Create your views here.
@csrf_exempt
def login(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        username = body.get("username")
        password = body.get("password")

        user = authenticate(
            username=username,
            password=password
        )

        if user is not None:
            return JsonResponse({
                "message": "Login Successful"
            })

        return JsonResponse({
            "message": "Invalid Username or Password"
        })
    
    return JsonResponse({
        "message" : 'Only POST Allowed '
    })


@csrf_exempt
def register(request):
    if request.method == 'POST':

        body = json.loads(request.body)
        username = body.get("username")
        email = body.get("email")
        password = body.get("password")

        if User.objects.filter(username=username).exists():
            return JsonResponse(
            {
                "message": "Username already exists"
            },
            status=400
        )

        User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return JsonResponse({
            "message": "User Registered Successfully"
        })

    return JsonResponse({
        "message" : 'Only POST Allowed '
    })
