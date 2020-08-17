from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from .models import Evento, User
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class UserAPI(APIView):
    def post(self,request):
        serializer = serializers.UserSerializer(data = request.data)
        serializer_class = serializers.UserSerializer
        permission_classes = (AllowAny,)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)




class EventAPI(APIView):
    permission_classes = (IsAuthenticated,)   
    def get(self, request):
        events = Evento.objects.filter(event_owner = request.user).order_by('id')
        serializer = serializers.EventSerializer(events, many = True)
        return Response(serializer.data)


    def post(self, request):
        
        try:
            User.objects.get(username=request.user)
        except User.DoesNotExist:
            raise Http404
         
        #token22 = request.META['HTTP_AUTHORIZATION']
        user_usuario = request.user
        serializer = serializers.EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(event_owner=user_usuario)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventAPIVisual(APIView):
    permission_classes = (IsAuthenticated,)   
    def get(self, request, event_id):
        try:
            events = Evento.objects.filter(pk=event_id)
        except events.DoesNotExist:
            raise Http404
        serializer = serializers.EventSerializer(events, many = True)
        return Response(serializer.data)

    def put(self, request,event_id):
        try:
            events = Evento.objects.get(pk = event_id)
        except events.DoesNotExist:
            raise Http404
        serializer = serializers.EventSerializer(events,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,event_id):
        try:
            events = Evento.objects.get(pk=event_id)
        except events.DoesNotExist:
            raise Http404

        events.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 