from django.urls import path
from .views import tasks_list
from . import views

urlpatterns = [
    path('', views.tasks_list, name='tasks_list'),
    path('create/', views.create_list, name='create_list'),
    path('delete/<int:id>/', views.delete_task, name='delete_task'),
    path('<int:id>', views.single_task, name='single_task'),
    path('<int:id>/complete/', views.toggle_complete, name='toggle_complete')
]

