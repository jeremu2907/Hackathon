import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://username:2907@cluster0.h4uost6.mongodb.net/?retryWrites=true&w=majority")
db = cluster["test"]
usersCol = db["users"]
eventsCol = db["events"]

def addUser(data):
    usersCol.insert_one(data)

def addEvent(data):
    eventsCol.insert_one(data)

def delEvent(name):
    eventsCol.delete_one({"name" : name})

def delUser(id):
    usersCol.delete_one({"id": id})

