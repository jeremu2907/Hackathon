import pymongo

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
    things = eventsCol.find({"skills" : {"$in": skillList}})
    for stuff in things:
        print(stuff)
    return things

sortEvents(["animals", "finance"])