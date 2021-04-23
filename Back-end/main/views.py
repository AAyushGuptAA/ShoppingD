from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import jwt

from main import userDB
from main import utils
from database.settings import SECRET_KEY
# Create your views here.

def temp(request):
    return HttpResponse(request.method)

@csrf_exempt
def index(request):

    """
    if request.method == "GET":
        data = userDB.readDB()
        # Here data should be python dictionary.
        return JsonResponse(data)

    elif request.method == "POST":
    """
    data = json.loads(request.body)
    userDB.writeDB(obj = data)
    # return HttpResponse("Post response: {}".format(data))
    return HttpResponse("Success")

@csrf_exempt
def myuser(request):
    data = json.loads(request.body)
    status = userDB.verify(obj = data)
    return status

@csrf_exempt
@utils.requireLogin
def retrieveInfo(request, obj):
    db = userDB.initDB()
    usercoll = db.users
    user = {"Email ID": obj["email"], "Password": obj["password"]}
    if usercoll.find(user).count() == 1:
        # Send required user data to client.
        userinfo = list(usercoll.find(user))
        del userinfo[0]["_id"]
        return JsonResponse({"status": "OK", "data": userinfo[0]})
    return JsonResponse({"status": "NOK"})

@csrf_exempt
@utils.requireLogin
def cart(request, obj):
    db = userDB.initDB()
    usercoll = db.users
    user = {"Email ID": obj["email"], "Password": obj["password"]}
    if usercoll.find(user).count() == 1:
        # Send required user data to client.
        userinfo = list(usercoll.find(user))
        del userinfo[0]["_id"]
        return JsonResponse({"data": userinfo[0]})
    return JsonResponse({"status": "Error"})

@csrf_exempt
def cartmod(request):
    obj = json.loads(request.body)
    db = userDB.initDB()
    usercoll = db.users
    data = jwt.decode(obj["usernumber"], SECRET_KEY, algorithms="HS256")
    user = {"Email ID": data["email"], "Password": data["password"]}
    if obj["todo"]=="add":
        usercoll.update_one({'Password': user["Password"]}, {'$set':{'Cart': obj["cart"]}})
    return JsonResponse({'Success':'OK'})

@csrf_exempt
def ordersmod(request):
    obj = json.loads(request.body)
    db = userDB.initDB()
    usercoll = db.users
    data = jwt.decode(obj["usernumber"], SECRET_KEY, algorithms="HS256")
    user = {"Email ID": data["email"], "Password": data["password"]}
    if obj["todo"]=="add":
        usercoll.update_one({'Password': user["Password"]}, {'$set':{'Orders': obj["orders"], 'Cart': []}})
    return JsonResponse({'Success':'OK'})