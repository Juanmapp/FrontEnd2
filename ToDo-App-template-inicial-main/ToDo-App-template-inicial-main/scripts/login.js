window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const URL = "https://todo-api.ctd.academy/v1/users/login"
    const form = document.querySelector("form")
    const email = document.getElementById("inputEmail")
    const contrasenia = document.getElementById("inputPassword")



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       
        event.preventDefault()

        const datosUsuario = {
            mail: email.value,
            clave: contrasenia.value
        }
        const config = {
            method : "POST",
            body : JSON.stringify(datosUsuario),
            headers : {
                'Content-Type': 'application/json'
            }
        }
        realizarLogin(config)
        form.reset
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       fetch(URL, settings)
       .then(resp => resp.json())
       .then(data => {
           console.log("Promesa cumplida");
           console.log(data);
        if (data.jwt) {
            localStorage.setItem('jwt', JSON.stringify(data.jwt))
        }
       })
       .catch(err => {
        "Error : " + err
       })
    };
});