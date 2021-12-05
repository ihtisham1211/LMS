from rest_framework import serializers
from .models import Courses, Lectures, Attachments


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'


class LecturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lectures
        fields = '__all__'


class AttachmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachments
        fields = '__all__'
