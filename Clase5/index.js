// let confirmaCambios = confirm("Queres cambiar el color del titulo?")

// if (confirmaCambios) {

let titulo = document.querySelector("h1")
titulo.innerHTML += " Soy uncontenido nuevo desde JS"
titulo.classList.add("titulo-destacado")

let confirmaEliminarClase = confirm("Queres eliminar la clase del titulo?")

if(confirmaEliminarClase) { 
    titulo.classList.remove("titulo-destacado")
}

console.log(titulo)


let parrafoEspecial = document.querySelector(".parrafo-especial")
parrafoEspecial.innerHTML = "Un texto con algo <i> en cursiva </i>"
console.log(parrafoEspecial)

