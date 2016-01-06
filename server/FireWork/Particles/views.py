from django.shortcuts import render
from django.shortcuts import render_to_response
from Particles.models import ParticleLib
from django.http import HttpResponse
from django.forms.models import model_to_dict

import json

def getParticleList(request):
    particle_list = ParticleLib.objects.all().order_by('-particle_create_time')[0:100]
    data_array=[]
    for obj in particle_list:
        data_array.append(model_to_dict(obj))
        pass
    encodedjson = json.dumps(data_array)
    resp=HttpResponse(encodedjson)
    resp.__setitem__("Access-Control-Allow-Origin","*")
    resp.__setitem__("Access-Control-Allow-Headers","X-Requested-With")
    resp.__setitem__("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    return resp

def addParticle(request):
    m_RawData=ParticleLib()
    m_MiscData=request.POST.dict()
    m_RawData.user_uuid=m_MiscData["user_uuid"]
    m_RawData.particle_name=m_MiscData["particle_name"]
    m_RawData.particle_img=m_MiscData["particle_img"]
    m_RawData.particle_data=m_MiscData["particle_data"]
    m_RawData.save()
    resp=HttpResponse("1")
    resp.__setitem__("Access-Control-Allow-Origin","*")
    resp.__setitem__("Access-Control-Allow-Headers","X-Requested-With")
    resp.__setitem__("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    return resp

def ding(request):
    m_MiscData=request.GET.dict()
    particle = ParticleLib.objects.get(int(m_MiscData["id"]))
    particle.ding_count=particle.ding_count1;
    particle.save()
    resp=HttpResponse("1")
    resp.__setitem__("Access-Control-Allow-Origin","*")
    resp.__setitem__("Access-Control-Allow-Headers","X-Requested-With")
    resp.__setitem__("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    return resp
