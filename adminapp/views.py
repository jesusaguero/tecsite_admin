from django.contrib.auth import authenticate, login
from django.http import JsonResponse


def login_view(request):
    if request.method == 'POST':
        codigo = request.POST.get('codigo')
        contrasena = request.POST.get('contrasena')
        
        user = authenticate(request, codigo=codigo, password=contrasena)
        
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Código o contraseña incorrectos'})
