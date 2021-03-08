import json
from pymongo import MongoClient
from bson.json_util import dumps

def initDB():
    URL = "mongodb://127.0.0.1:27017"
    client = MongoClient(URL)
    mydb = client["shopstop"]
    return mydb

def getBest():
    db = initDB()
    prodcoll = db.bestProducts
    prodcolldocuments = list(prodcoll.find())
    # prodcolldocuments is a "list" of documents in bestProducts collection
    json_data = json.loads(dumps(prodcolldocuments))
    # json_data is pretty much same as prodcolldocuments
    products = {"best": []}
    for idx in range(len(json_data)):
        products["best"].append(json_data[idx])
        # Iterate over each document and add it to products["best"] list.
    return products

def getMenProducts():
    db = initDB()
    mencoll = db.mens
    mencolldocs = list(mencoll.find())
    products = {"hats": mencolldocs[0]["hats"], "jackets": mencolldocs[1]["jackets"], "suits": mencolldocs[2]["suits"]}
    return products

def getWomenProducts():
    db = initDB()
    womencoll = db.women
    womencolldocs = list(womencoll.find())
    products = {"hats": womencolldocs[0]["hats"], "jackets": womencolldocs[1]["jackets"], "tops": womencolldocs[2]["tops"]}
    return products

def getHatProducts():
    db = initDB()
    womencoll = db.women
    womencolldocs = list(womencoll.find())
    mencoll = db.mens
    mencolldocs = list(mencoll.find())
    products = {"hats":{"men":mencolldocs[0]["hats"], "women":womencolldocs[0]["hats"]}}
    return products