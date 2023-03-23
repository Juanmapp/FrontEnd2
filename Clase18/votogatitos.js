window.onload = function() {

    // Armar los datos a enviar

    let data = {
        image_id: "asf2",
        sub_id: "my-user-1234",
        value:1
    }

    // Setear los datos a enviar 

    let settings = {
        "method": "POST",
        "headers": {
            "content-type" : "application/json",
            "x-api-key": "89d0ffa5-5d01-42d0-ab273474edad"
        },
        "body": JSON.stringify(data)
    }

    // Mediante fetch enviamos los datos con sus configuraciones

    fetch("https://api.thecatapi.com/v1/votes", settings)
    .then(function(response) {
        return response.json()
    })
    .then(function(info) {
        console.log(info);
    })
    .catch(function(e) {
        console.log("Error :" + e);
    })

}