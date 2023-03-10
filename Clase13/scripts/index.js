// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

let emailUsu = ""
let passUsu = ""
    
// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
// window.addEventListener("load", function() {
let login = document.querySelector(".login-btn")
let loader = document.getElementById("loader")
console.log(loader)
login.addEventListener("click", function() { 
  let datos = capturarDatos()
  
console.log(emailUsu, passUsu);
  loader.classList.remove("hidden")
  setTimeout(() => {
    loader.classList.add("hidden")
    let validarP = validarPersona(capturarDatos)
    let validar = validarDatos(validarPersona)
  },3000)
  

})



function capturarDatos() {
  let emailUsu = ""
  let passUsu = ""
  let email = document.getElementById("email-input")
let password = document.getElementById("password-input") 
 emailUsu = email.value
 passUsu = password.value
}




// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."



// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"


// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

function validarDatos(x) {
  if(!emailRegex.test(emailUsu) || passUsu < 5 || validarPersona() == false) {
    alert("Alguno de los datos ingresados son incorrectos")
 } else {
  alert("Bienvenido!!")
 }

 }

 function validarPersona(x) {
      let usuarioRegistrado = false
      baseDeDatos.usuarios.forEach(usuario => {
        if (usuario.email === emailUsu && usuario.password === passUsu) {
          usuarioRegistrado = true
        }
        console.log(usuario.email, usuario.password, emailUsu, passUsu)
      });
      console.log(usuarioRegistrado)
      return usuarioRegistrado
    }
    console.log( "hola" + validarPersona())
// })
/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
