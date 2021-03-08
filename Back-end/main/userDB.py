import json
from pymongo import MongoClient
from bson.json_util import dumps
from django.http import JsonResponse

from database.settings import SECRET_KEY
import jwt
import datetime

def initDB():
    URL = "mongodb://127.0.0.1:27017"
    client = MongoClient(URL)
    mydb = client["shopstop"]
    # In case users doesn't exist, mongoDB will create it for you
    return mydb
"""
# This function has no significant value. Remove it before deploying.
def readDB():
    db = initDB()
    usercoll = db.users # get collection, here users
    usercolldocuments = list(usercoll.find())
    # Following line is necessary because ObjectId is not JSON serializable
    # json_data = json.loads(dumps(usercolldocuments))
    customers = {"users": []}
    for idx in range(len(usercolldocuments)):
        customers["users"].append(usercolldocuments[idx])
        del customers["users"][idx]["_id"]
    # Now customers = {"users":[objects]}, where each object is the detail of each user
    return customers
"""
def writeDB(obj:dict):
    db = initDB()
    usercoll = db.users
    usercoll.insert_one(obj)

def verify(obj:dict):
    db = initDB()
    usercoll = db.users
    if usercoll.find(obj).count() != 1:
        return JsonResponse({"status": "NOK"})

    token = jwt.encode(
        {
            'email': obj["Email ID"],
            'password': obj["Password"],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=24*60*60)
        },
        SECRET_KEY,
        algorithm="HS256"
    )
    return JsonResponse({"status": "OK", "token": token, "Name": list(usercoll.find(obj))[0]['Name']})