// import fetch from "node-fetch";

function sortEvent(skill){
    let request = "http://127.0.0.1:8000/sortEvent/?";
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
    let name = document.getElementById("nameUser").value
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let interest = document.getElementById("interest").value;
    let bio = document.getElementById("bio").value;

    fetch("http://127.0.0.1:8000/addUser/?" +
        "name=" + name + "&" +
        "age=" + age + "&" +
        "email=" + email + "&" +
        "phone=" + phone + "&" +
        "interest=" + interest + "&" +
        "bio=" + bio
    )
}

function addEvent(){
    let name = document.getElementById("nameEvent").value
    let organizer = document.getElementById("organizer").value;
    let time = document.getElementById("time").value;
    let location = document.getElementById("location").value;
    let position = decument.getElementById("position").value;
    let description = document.getElementById("description").value;

    fetch("http://127.0.0.1:8000/addEvent/?" +
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
    fetch("http://127.0.0.1:8000/delEvent/?name=" + name)
}

function searchByEventName(){
    document.getElementById("listing-container").innerHTML = "...Loading"
    let name = document.getElementById("searchBox").value;
    fetch("http://127.0.0.1:8000/searchEventByName/?name=" + name)
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