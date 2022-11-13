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
    let name = $("id").value;
    let age = $("id").value;
    let email = $("id").value;
    let phone = $("id").valuel;
    let interest = $("id").value;
    let bio = $("id").value;

    fetch("http://example.com/api/endpoint/?" +
        "name=" + name + "&" +
        "age=" + age + "&" +
        "email=" + email + "&" +
        "phone=" + phone + "&" +
        "interest=" + interest + "&" +
        "bio=" + bio + "&"
    )
}