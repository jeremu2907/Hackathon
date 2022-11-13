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
}