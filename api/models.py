from django.db import models
from django.contrib.auth.models import User
import uuid
from django.contrib.auth.hashers import make_password
import os
#from stringfield import StringField
# Create your models here.



class Evento(models.Model):
    #permission_classes = (IsAuthenticated,)
    def path_and_rename(self, filename):
        carpeta = 'event_thumbnails/'
        extencion = filename.split('.')[-1]
        if self.pk:
            filename = '{}.{}'.format(self.pk, extencion)
        return os.path.join(carpeta, filename)
       
    id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_owner=models.ForeignKey(User, on_delete=models.CASCADE,verbose_name="Dueño Evento")
    event_name=models.CharField(max_length=200, unique=True, verbose_name="Nombre Evento")
    event_category=models.CharField(max_length=200, choices=[('CONFERENCE', 'Conferencia'), ('SEMINAR', 'Seminario'), ('CONGRESS', 'Congreso'), ('COURSE', 'Curso')], verbose_name="Categoria Evento")
    event_place=models.CharField(max_length=200, unique=False, verbose_name="Lugar Evento")
    event_address=models.CharField(max_length=120, verbose_name="Direccion")
    event_initial_date=models.DateTimeField(max_length=120, verbose_name="Fecha Inicio")
    event_final_date=models.DateTimeField(max_length=120, verbose_name="Fecha Fin")
    event_type=models.CharField(max_length=200, unique=False, verbose_name="Tipo Evento")
    thumbnail = models.ImageField(upload_to="recipe_thumbnails", default="Static/default.jpg")
    
    def __str__(self):
        return self.event_name