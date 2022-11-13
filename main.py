import pymongo
import re
import random
import json

from typing import Union

from fastapi import FastAPI

app = FastAPI()
cluster = pymongo.MongoClient("mongodb+srv://username:2907@cluster0.h4uost6.mongodb.net/?retryWrites=true&w=majority")
db = cluster["test"]
usersCol = db["users"]
eventsCol = db["events"]


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/addUser/")
async def addUser(name: str = "", age: int = 0, email: str = "No email", phone: str = "No phone number", bio: str = "Nothing here yet"):
    data ={
        "name" : name,
        "id" : str(random.randint(0,9999999999999)),
        "age" : age,
        "contact" : {
            "email" : email,
            "phone" : phone
        },
        "bio" : bio
    }
    print(data)
    usersCol.insert_one(data)

def delEvent(name):
    eventsCol.delete_one({"name" : name})

@app.get("/addEvent/")
async def addEvent(name, organizer, time, location, description):
    event = {
        "name" : name,
        "organizer" : organizer,
        "time" : time,
        "location" : location,
        "description" : description,
    }
    eventsCol.insert_one(event)

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