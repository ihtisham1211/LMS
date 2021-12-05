from django.db import models


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class BaseFields(TimeStampedModel):
    title = models.CharField(max_length=255)
    detail = models.CharField(max_length=500, null=True)
    # created_by = models.ForeignKey(Users, on_delete=models.SET_NULL)
    start_date = models.DateTimeField(null=True)
    end_date = models.DateTimeField(null=True)

    class Meta:
        abstract = True


class Noticeboard(BaseFields):
    image = models.FileField(null=True)


class Alerts(BaseFields):
    pass


class Events(BaseFields):
    image = models.FileField(null=True)


class Newsletters(BaseFields):
    file = models.FileField(null=True)


class Class(TimeStampedModel):
    name = models.CharField(max_length=255)
    duration = models.DurationField(null=True)
    # tutor = models.ForeignKey(Users, on_delete=models.SET_NULL, null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)