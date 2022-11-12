import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://username:2907@cluster0.h4uost6.mongodb.net/?retryWrites=true&w=majority")
db = cluster["test"]
collection = db["test"]

event0 = {"event": "Grass touching", "place":"ECSW"}
event1 = {"event": "Grass eating", "place":"ECSS"}
collection.insert_one(event0)
collection.insert_one(event1)
