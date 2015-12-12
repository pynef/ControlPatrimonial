from rest_framework import status,generics,permissions
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from SistemaDeControlPatrimonial.app.Institucion.serializers import InstitucionSerializer
from SistemaDeControlPatrimonial.app.Institucion.models import Institucion, Sede

class Instituciones(APIView):
	serializer_class = InstitucionSerializer
	def get(self,request,ids=None,format=None):
		if ids != None:
			intitucions = get_object_or_404(Institucion,pk=ids)
			many = False
		else:
			intitucions = Institucion.objects.all()
			many = True
		response = self.serializer_class(intitucions, many=many)
		return Response(response.data)

	def post(self,request,format=None):
		las_intituciones = InstitucionSerializer(data=request.data)
		if las_intituciones.is_valid():
			las_intituciones.save()
			return Response(las_intituciones.data, status=status.HTTP_201_CREATED)
		return Response(las_intituciones.errors, status=status.HTTP_400_BAD_REQUEST)
instituciones = Instituciones.as_view()

