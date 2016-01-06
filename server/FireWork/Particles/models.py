from django.db import models

# Create your models here.
class ParticleLib(models.Model):
    particle_id = models.AutoField(primary_key=True ,null=False , unique=True)
    user_uuid = models.CharField(max_length=200)
    particle_name = models.CharField(max_length=200)
    particle_img = models.TextField()
    particle_data = models.TextField()
    ding_count = models.IntegerField(default=0)
    za_count = models.IntegerField(default=0)
    particle_create_time = models.DateTimeField(auto_now_add=True)