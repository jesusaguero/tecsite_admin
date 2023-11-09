from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('adminapp/', include('adminapp.urls')),
    # otras URLS para la parte administrativa
]