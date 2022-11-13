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

@app.get("/delEvent/")
async def delEvent(name):
    eventsCol.delete_one({"name" : name})

def addEvent(data):
    eventsCol.insert_one(data)

def sortEvents(skillList):
    events = eventsCol.find({"skills" : {"$in": skillList}})
    for stuff in events:
        print(stuff)
    return events

@app.get("/searchEventByName/")
async def searchEventByName(name):
    events = eventsCol.find({"name": re.compile(name, re.IGNORECASE)})
    for t in events:
        print(t)
    return events