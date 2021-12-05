from rest_framework import generics, mixins
from rest_framework.response import Response
from .serializer import CoursesSerializer, LecturesSerializer, AttachmentsSerializer
from .models import Courses, Lectures, Attachments


class CoursesCreateApi(generics.CreateAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer


class LecturesCreateApi(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializer


class CoursesListApi(generics.ListAPIView):
    serializer_class = CoursesSerializer
    queryset = Courses.objects.all()

    def get_queryset(self):
        query_params = self.request.query_params
        queryset = Courses.objects.filter_courses(query_params)
        return queryset


class LecturesListApi(generics.ListAPIView):
    serializer_class = LecturesSerializer
    queryset = Lectures.objects.all()

    def get_queryset(self):
        query_params = self.request.query_params
        queryset = Lectures.objects.filter_lectures(query_params)
        return queryset


class AttachmentsCreateApi(generics.CreateAPIView):
    queryset = Attachments.objects.all()
    serializer_class = AttachmentsSerializer

