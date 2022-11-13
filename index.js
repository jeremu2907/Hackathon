// import fetch from "node-fetch";
// Server: 45.79.14.63:8000
//Local: 45.79.14.63:8000


function sortEvent(skill){
    let request = "http://45.79.14.63:8000/sortEvent/?";
    for(let i = 0; i < skill.length; i++){
        request += "skill=" + skill[i];
        if(skill.length - i > 1)
            request += "&";
    }
    // get all selected skills
    console.log(request)
    fetch(request)
    .then(response => {
        return response.json()
    }).then(data => {console.log(data); return data})
}

function addUser(){
    let name = document.getElementById("fname").value +" "+ document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    // let interest = document.getElementById("interest").value;
    let bio = document.getElementById("bio").value;

    let request = 
        "http://45.79.14.63:8000/addUser/?" +
        "name=" + name + "&" +
        "age=" + age + "&" +
        "email=" + email + "&" +
        "phone=" + phone + "&" +
        // "interest=" + interest + "&" +
        "bio=" + bio;

    let interest = [];
    let interestList = document.getElementById("interest-selector").children;
    for(let i = 0; i < interestList.length; i++)
        if(interestList[i].checked === true){
            request += "&interest=" + interestList[i].id;
            interest.push(interestList[i].id)
        }

    let user = {
        "name": name,
        "age": age,
        "email": email,
        "phone": phone,
        "bio": bio,
        "interest" : interest
    }

    fetch(request)
    .then(() => {
        request = "http://45.79.14.63:8000/searchUserName/?name=" + name;
        fetch(request)
        .then(response => {
            return response.json()
        })
        .then(data => {
            window.localStorage.removeItem("loggedUser")
            window.localStorage.setItem("loggedUser", JSON.stringify(user))
        })
        .then(logIn())
    })
}

function addEvent(){
    let name = document.getElementById("nameEvent").value
    let organizer = document.getElementById("organizer").value;
    let time = document.getElementById("time").value;
    let location = document.getElementById("location").value;
    let position = decument.getElementById("position").value;
    let description = document.getElementById("description").value;

    fetch("http://45.79.14.63:8000/addEvent/?" +
        "name=" + name + "&" +
        "organizer=" + organizer + "&" +
        "time=" + time + "&" +
        "location=" + location + "&" +
        "position=" + position + "&" +
        "description=" + description
    )
}

function delEvent(){
    let name = document.getElementById("deleteEvent").value
    fetch("http://45.79.14.63:8000/delEvent/?name=" + name)
}

function searchByEventName(){
    document.getElementById("listing-container").innerHTML = "...Loading"
    let name = document.getElementById("searchBox").value;
    fetch("http://45.79.14.63:8000/searchEventByName/?name=" + name)
    .then(response => response.json())
    .then(data => {
        document.getElementById("listing-container").innerHTML = ""
        for(i in data){
            console.log(i)
            document.getElementById("listing-container").innerHTML += 
                `<div class="opportunity-listing">
                <div class="listing-position">Position: ` + data[i].position + `</div>
                <div class="listing-location">location: ` + data[i].location + `</div>
                <div class="listing-host">Host: ` + data[i].organizer + `</div>
                <div class="listing-time">time: ` + data[i].time + `</div>
                <div class="listing-date">date: ` + data[i].date + `</div>
                <div class="listing-skills">skills: ` + data[i].skills + `</div>
                <div class="listing-description">desc: ` + data[i].description + `</div>
                </div>`
        }
        // console.log(data);return data
    })
}

logIn()
// Loads localstorage pseudo log in
function logIn(){
    setTimeout(() => {
        var user = JSON.parse(window.localStorage.getItem("loggedUser"))
        if(user !== null){
            document.getElementById("loggedOut").style.display = "none";
            document.getElementById("loggedIn").style.display = "flex";

            document.getElementById("userName").innerHTML = '<r style="color:rgb(50,50,50)">' + user.name + '</r>';
            document.getElementById("userEmail").innerHTML += '<r style="color:rgb(50,50,50);font-family: `Montserrat, sans-serif`">' + user.email + '</r>';
            document.getElementById("userPhone").innerHTML += '<r style="color:rgb(50,50,50);font-family: `Montserrat, sans-serif`">' + user.phone + '</r>';
            document.getElementById("userBio").innerHTML += '<r style="color:rgb(50,50,50)">' + user.bio + '</r>';
            for(let i = 0; i < user.interest.length; i++){
                document.getElementById("userInterest").innerHTML += "<li>" + user.interest[i] + "</li>";
            }
        }
    },1000);
    document.getElementById("userName").innerHTML = "";
    document.getElementById("userEmail").innerHTML = "Email: ";
    document.getElementById("userPhone").innerHTML = "Phone: ";
    document.getElementById("userInterest").innerHTML = "";
    document.getElementById("userBio").innerHTML = "";
}

function logOut(){
    document.getElementById("loggedOut").style.display = "block";
    document.getElementById("loggedIn").style.display = "none";
}