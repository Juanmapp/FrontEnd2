/* -------------------------------------------------------------------------- */
/*                [1] FUNCION: esperamos la carga de la ventana               */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {

    const formulario = this.document.querySelector('form')

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        postearComentario();
    })


})

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: capturamos los datos del form                 */
/* -------------------------------------------------------------------------- */
function capturarDatos() {
    
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    // armamos el objeto basado en lo que nos pide la api
    let objeto = {
        nombre: nombre.value,
        apellido: apellido.value,
        email : email.value,
        password : password.value
      }

    return objeto;
}

/* -------------------------------------------------------------------------- */
/*                    [3] FUNCION: enviar(postear) a la API                   */
/* -------------------------------------------------------------------------- */
// Nos basamos en la documentacion de la API:
// https://jsonplaceholder.typicode.com/guide/

function postearComentario() {
    // 👇 usamos nuestra funcion para capturar los datos y guardarlos como objeto
    const datos = capturarDatos();

    // 👇 armamos las configuraciones
    // la api acepta JSON, por eso stringuificamos los datos
    const configuraciones = {
        
        "method": "POST",
        
    "headers": {
        'Content-Type': 'application/json'  
        },
        "body" : JSON.stringify(datos) 
    }

    fetch('https://todo-api.ctd.academy/v1/users', configuraciones)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data);
            // renderizarRespuesta(data);
        });
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: renderizar respuesta                     */
/* -------------------------------------------------------------------------- */

// function renderizarRespuesta(datos) {
//     const div = document.querySelector('.respuesta')
    
//     const template = `
//         <p>✅ Datos cargados en el servidor</p>
//         <p>
//             Title: ${datos.title}
//         </p>
//         <p>
//             Body: ${datos.body}
//         </p>
//     `;

//     div.innerHTML = template;

// }


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// En este caso vamos a trabajar la conexion con APIS,
// en el siguiente DOC vamos a poder ver nuestra tarea
// 👇
// https://docs.google.com/document/d/1ZiCPf7IICvtp6rwfxoq5Wh5dJUROKqNw/preview

// let data = {
//     "firstName": "pepito2",
//     "lastName": "milanesa2",
//     "email": "pepemila2@gmail.com",
//     "password": "pepinmila2"
// }

// fetch('https://todo-api.ctd.academy/v1/', {
//     "method": "POST",
//     "headers": {
//         'https://http://todo-api.ctd.academy:3000//v1/users', 
//         'accept': 'application/json', 
//         'Content-Type': 'application/json'  

//     },
//     "body" : JSON.stringify(data) 
        
// })
// .then(response => response.json())
// .then(info => console.log(info))
// .catch(e => console.log("Error : " + e))
