from django.http import JsonResponse
from .models import Tasks
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
# Create your views here.


@csrf_exempt
def create_list(request):
    if request.method == "POST":
        
        body = json.loads(request.body)

        title = body.get("title")
        description = body.get("description")

        Tasks.objects.create(
            titles = title,
            description = description
        )

        return JsonResponse({
            "message": "Task Created"
        })
    
    return JsonResponse({
        "message": "Only POST request allowed"
    })


@csrf_exempt
def delete_task(request, id):
    if request.method == 'DELETE':

        task = Tasks.objects.filter(id=id)
        task.delete()

        return JsonResponse({
            "message": "Task Deleted"
        })



def tasks_list(request):
    tasks = Tasks.objects.all()

    data = []

    for task in tasks:
        data.append({
            "id": task.id,
            "title": task.titles,
            "description": task.description,
            "completed": task.completed
        })
    
    return JsonResponse(data, safe=False)


@csrf_exempt
def single_task(request, id):
    if request.method == 'PUT':
        print("PUT request received")
        body = json.loads(request.body)

        title = body.get("title")
        description = body.get("description")

        task = Tasks.objects.get(id=id)

        task.titles = title
        task.description = description
        task.save()
            

        return JsonResponse({
            "message": "Task Updated"
        })

    task = Tasks.objects.get(id=id)

    data={
        "id":task.id,
        "title": task.titles,
        "description":task.description,
        "completed":task.completed
    }

    return JsonResponse(data)

@csrf_exempt
def toggle_complete(request, id):
    if request.method == 'PUT':

        task = Tasks.objects.get(id=id)
        task.completed = not task.completed
        task.save()

        return JsonResponse({
            "message": "Task Updated",
            "completed": task.completed
        })