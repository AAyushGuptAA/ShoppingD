from functools import wraps
import jwt
from django.http import JsonResponse
from database.settings import SECRET_KEY

data = {}
def requireLogin(to_authenticate_fun):

    @wraps(to_authenticate_fun)
    def inner(request):
        token = request.headers.get('Authorization', None)

        if verify_token(token):
            # this data variable is sent to retrieveInfo function.
            return to_authenticate_fun(request, data)
        else:
            return JsonResponse({'Oops...': "Looks like you're not logged In"})
    return inner

def verify_token(token):
    try:
        global data
        data = jwt.decode(token, SECRET_KEY, algorithms="HS256")
    except:
        return None
    return True