window.addEventListener("load", function() {

    if(localStorage.getItem("nombreUsuario") == null){
let nombre = prompt("Dinos tu nombre")
    document.querySelector(".bienvenida").innerHTML = `Hola ${nombre}`
    localStorage.setItem("nombreUsuario",nombre)
    
} else {
    let nombre = localStorage.getItem("nombreUsuario")
    document.querySelector(".bienvenida").innerHTML = `Hola ${nombre}`

}


    console.log(localStorage);

    if(sessionStorage.getItem("nombreUsuario") == null){
let nombre2 = prompt("Dinos tu nombre")
    document.querySelector(".bienvenida").innerHTML = `Hola ${nombre2}`
    sessionStorage.setItem("nombreUsuario",nombre2)
    
} else {
    let nombre2 = sessionStorage.getItem("nombreUsuario")
    document.querySelector(".bienvenida").innerHTML = `Hola ${nombre2}`

}


    console.log(sessionStorage);
    
})
    
