window.addEventListener('load', function () {
    
    //obtenemos variables globales
    const URL = "https://todo-api.ctd.academy/v1/users"; 
    const form = this.document.querySelector("form");
    const nombre = this.document.querySelector("#inputNombre");
    const apellido = this.document.querySelector("#inputApellido");
    const email = this.document.querySelector("#inputEmail");
    const contrasenia = this.document.querySelector("#inputPassword");
    const contraseniaRepetida = this.document.querySelector("#inputPasswordRepetida");

  

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    // Hago comprobaciones individuales cuando saco el foco del elemento, para que parezca en real time
    // comprobación final de todo junto antes de enviar datos al servidor
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();     
        
        

                const objeto = {
                    "firstName": nombre.value,
                    "lastName": apellido.value,
                    "email": email.value,
                    "password": contrasenia.value
                }
                console.log(objeto);
                
                const carga = {
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json"
                    },
                    "body": JSON.stringify(objeto)
                }
                console.log(carga);
                               
                realizarRegister(carga);

                form.reset();
        }

    );

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(param) {

        fetch(URL, param)
            .then(res => {
                if (!res.ok) { alert("Algo anduvo mal, intenta de nuevo")};
                return res.json();
            })
            .then(info => {
                console.log("Promesa cumplida");
                console.log(info);
                location.replace("./mis-tareas.html");
            })
            .catch(error => console.log(error))
    
        }

    }
)

  
// window.addEventListener('load', function () {
//     /* ---------------------- obtenemos variables globales ---------------------- */
//     const form = document.querySelector("form")
//     const nombre = document.getElementById("inputNombre")
//     const apellido = document.getElementById("inputApellido")
//     const mail = document.getElementById("inputEmail")
//     const password = document.getElementById("inputPassword")
//     const passwordRepetida = document.getElementById("inputPasswordRepetida")
//     const URL = 'https://todo-api.ctd.academy/v1/users' 

    
    

//     /* -------------------------------------------------------------------------- */
//     /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
//     /* -------------------------------------------------------------------------- */
//     form.addEventListener('submit', function(event) {
//       event.preventDefault()
//         const datos = {
//             firstName : nombre.value,
//             lastName : apellido.value,
//             email : mail.value,
//             password : password.value
//         }
//         console.log(datos);
//         const settings = {
//             method : 'POST',
//             body : JSON.stringify(datos),
//             headers : {
//                 'Content-Type' : 'aplication/json' 
//             }
//         }
//         console.log(settings);
//         realizarRegister(settings)

//         form.reset()
//     });

//     /* -------------------------------------------------------------------------- */
//     /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
//     /* -------------------------------------------------------------------------- */
//     function realizarRegister(settings) {
//         console.log("Lanzando consulta");
//         fetch(URL, settings)
//         .then(resp => {
//             if(resp.ok != true ) {
//                 alert("Algo anduvo mal, intente de nuevo")
//             }
//             return resp.json()
//         })
//         .then(data => {
//             console.log("Promesa cumplida");
//            console.log(data);
//             if(data.jwt){
//             localStorage.setItem("jwt", JSON.stringify(data.jwt))
//             location.replace("../mis-tareas.html")
//             }
//             })
//         .catch(e => console.log(e))
//     };

// });