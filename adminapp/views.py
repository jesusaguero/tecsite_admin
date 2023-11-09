import json

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST


@csrf_exempt
@require_POST
def login_view(request):
    data = json.loads(request.body)
    codigo = data.get('codigo', '')
    contrasena = data.get('contrasena', '')
    
    user = authenticate(request, codigo=codigo, password=contrasena)
    
    if user is not None:
        login(request, user)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Código o contraseña incorrectos'})
