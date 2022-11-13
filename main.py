import pymongo
import re

from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


cluster = pymongo.MongoClient("mongodb+srv://username:2907@cluster0.h4uost6.mongodb.net/?retryWrites=true&w=majority")
db = cluster["test"]
usersCol = db["users"]
eventsCol = db["events"]

def addEvent(data):
    eventsCol.insert_one(data)

def delEvent(name):
    eventsCol.delete_one({"name" : name})

def addUser(data):
    usersCol.insert_one(data)

def delUser(id):
    usersCol.delete_one({"id": id})

def sortEvents(skillList):
    events = eventsCol.find({"skills" : {"$in": skillList}})
    for stuff in events:
        print(stuff)
    return events

def searchEventByName(eventName):
    events = eventsCol.find({"name": re.compile(eventName, re.IGNORECASE)})
    for t in events:
        print(t)
    return events