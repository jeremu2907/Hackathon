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
    // if use jquery``  
    // $('.id').value :)
    let name = document.getElementById("").value;
    let age = documnet.getElementById("").value;
    let email = document.getElementById("").value;
    let phone = document.getElementById("").valuel;
    let interest = document.getElementById("").value;
    let bio = document.getElementById("").value;

    fetch("http://example.com/api/endpoint/?" +
        "name=" + name + "&" +
        "age=" + age + "&" +
        "email=" + email + "&" +
        "phone=" + phone + "&" +
        "interest=" + interest + "&" +
        "bio=" + bio + "&"
    )
}