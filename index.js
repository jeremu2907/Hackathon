
function sortEvent(){
    let param = "";
    // get all selected skills
    fetch("backendserver/sortEvent")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // do something about the data
    })
}

function addUser(){
    let name = $("#nameUser").value;
    let age = $("#age").value;
    let email = $("#email").value;
    let phone = $("#phone").valuel;
    // let interest = $("interest").value;
    let bio = $("#bio").value;

    fetch("http://example.com/api/endpoint/?" +
        "name=" + name + "&" +
        "age=" + age + "&" +
        "email=" + email + "&" +
        "phone=" + phone + "&" +
        "interest=" + interest + "&" +
        "bio=" + bio + "&"
    )
}

function delEvent(){
    let name = $('').value
    fetch(`backendserver/delEvent?name=${name}`)
    .then(response => response.json())
    .then(data => {
        // do something about the data
    })
}

function searchByEventName(){
    let name = $('#searchBox').value
    fetch(`backendserver/searchByEventName?name=${name}`)
    .then(response => response.json())
    .then(data => console.log(data))

// fucntion to search by location send long and lat < parameters

function formatEvent(){
    // var newListing = document.createElement("div");

    // newListing.innerHTML = 

    // var eventPosition = document.getElementByClass.createElement("listing-position");


    // // const eventLocation = document.getElementByClass.createElement("listing-location");
    // // const eventHost = document.getElementByClass.createElement("listing-host");
    // // const eventTime = document.getElementByClass.createElement("listing-time");
    // // const eventDate = document.getElementByClass.createElement("listing-date");
    // // const eventSkills = document.getElementByClass.createElement("listing-skills");
    // // const eventDescription = document.getElementByClass.createElement("listing-description");

    // const allListings = document.getElementById("the-listings");
    // allListings.appendChild(para);








}