import pymongo
import re
import random
from bson.json_util import dumps, loads
import json
from fastapi.middleware.cors import CORSMiddleware


from typing import Union

from fastapi import FastAPI, Query

app = FastAPI()
cluster = pymongo.MongoClient("mongodb+srv://username:2907@cluster0.h4uost6.mongodb.net/?retryWrites=true&w=majority")
db = cluster["test"]
usersCol = db["users"]
eventsCol = db["events"]

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://127.0.0.1:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/addUser/")
async def addUser(name: str = "", age: int = 0, email: str = "No email", phone: str = "No phone number", interest: list[str] | None = Query(default=None), bio: str = "Nothing here yet"):
    data ={
        "name" : name,
        "id" : str(random.randint(0,9999999999999)),
        "age" : age,
        "interest" : interest,
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

@app.get("/addEvent/")
async def addEvent(name, organizer, time, date, location, description, position):
    event = {
        "name" : name,
        "organizer" : organizer,
        "time" : time,
        "date" : date,
        "location" : location,
        "description" : description,
        "position" : position
    }
    eventsCol.insert_one(event)

@app.get("/sortEvent/")
def sortEvents(skill: list[str] | None = Query(default=None)):
    events = eventsCol.find({"skills" : {"$in": skill}})
    response = dumps(list(events))
    return json.loads(response)

@app.get("/searchEventByName/")
async def searchEventByName(name):
    events = eventsCol.find({"name": re.compile(name, re.IGNORECASE)})
    response = dumps(list(events))
    return json.loads(response)

@app.get("/searchUserName/")
async def searchUserName(name):
    users = usersCol.find({"name": re.compile(name, re.IGNORECASE)})
    response = dumps(list(users))
    return json.loads(response)