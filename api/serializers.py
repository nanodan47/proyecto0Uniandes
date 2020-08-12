from rest_framework import serializers
from django.contrib.auth.models import User
from . import models
from .models import Evento, User
from rest_framework.permissions import IsAuthenticated
import base64
import uuid
from django.conf import settings
import os


class UserSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()

#def una función
    def create(self, validate_data):
        instance = User()
        instance.first_name = validate_data.get('first_name')
        instance.last_name = validate_data.get('last_name')
        instance.username = validate_data.get('username')
        instance.email = validate_data.get('email')
        instance.set_password(validate_data.get('password'))
        instance.save()
        return instance

    def validate_username(self, data):
        users = User.objects.filter(username = data)
        if len(users) != 0:
            raise serializers.ValidationError("Este nombre de usuario ya existe, ingrese uno nuevo")
        else:
            return data


class EventSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        evento = Evento.objects.create(**validated_data)
        return evento

    class Meta:
        model = models.Evento
        fields = ['id', 'event_name', 'event_category', 'event_place', 'event_address', 'event_initial_date', 'event_final_date', 'event_type', 'thumbnail']
