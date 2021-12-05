from django.urls import path, include
from .api import CoursesCreateApi, CoursesListApi, LecturesCreateApi, LecturesListApi

app_name = 'courses'

urlpatterns = [
    # path("", include('courses.urls')),
    path('', CoursesListApi.as_view()),
    path('<int:id>', CoursesListApi.as_view()),
    path('create_course', CoursesCreateApi.as_view()),
    path('create_lecture', LecturesCreateApi.as_view()),
    path('lectures', LecturesListApi.as_view()),
]