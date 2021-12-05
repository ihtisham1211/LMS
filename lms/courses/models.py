from django.db import models
from django.db.models import Q

from core.models import TimeStampedModel, BaseFields, Class


class Attachments(TimeStampedModel):
    file = models.FileField()


class CoursesManager(models.Manager):

    def filter_courses(self, query_params):
        course_id = query_params.get('id', None)
        query = Q()
        if course_id:
            query = query & Q(id=int(course_id))
        return self.filter(query)


class Courses(BaseFields):
    class_id = models.ForeignKey(Class, on_delete=models.SET_NULL, null=True, related_name='classes')
    price = models.CharField(max_length=100, default='Free', null=True)
    total_duration = models.CharField(max_length=100, null=True)
    image = models.FileField(null=True)

    objects = CoursesManager()


class LecturesManager(models.Manager):

    def filter_lectures(self, query_params):
        course_id = query_params.get('course_id', None)
        query = Q()
        if course_id:
            query = query & Q(course_id=int(course_id))
        return self.filter(query)


class Lectures(TimeStampedModel):
    course_id = models.ForeignKey(Courses, on_delete=models.CASCADE)
    attachment_id = models.ForeignKey(Attachments, on_delete=models.SET_NULL, null=True, related_name='attachments')
    audio_file = models.FileField(null=True)
    video_file = models.FileField(null=True)

    objects = LecturesManager()

