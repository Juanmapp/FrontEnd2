// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
console.log(document);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector('h1');
// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);

// nos traemos ahora un listado de nodos 👇
const itemsMenu = document.querySelectorAll('li');
console.log(itemsMenu);

// hacemos un selector más específico👇
const infoExtra = document.querySelector('.info .clima')
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll('article');

for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
}

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
articulos.forEach( articulo =>{
    const titulo = articulo.querySelector('h2').innerText;
    console.log(titulo);
    // 💡 si quisieramos,acá podemos mutar los nodos, o cambiar algunas de sus propiedades
});


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.

const tituloH1 = document.querySelector("h1")
const navegacion = document.querySelector("nav")
const divs = document.querySelectorAll("div")
const articulosVarios =  document.querySelectorAll("article")
const divTema = document.querySelector(".tema")
const divInfo = document.querySelector(".info")
const parrafos = document.querySelectorAll("p")
const parrafo1 = document.querySelector(".clima")
const parrafo2 = document.querySelector(".dolar")
const titulo2 = document.querySelectorAll("h2")
const imagenes = document.querySelectorAll("img")
const listaDes = document.querySelector("ul")
const itemLista = document.querySelectorAll("li")

const footer = document.querySelector("footer")
const main = document.querySelector(".noticias")
const header = document.querySelector("header")
const cuerpo = document.querySelector("body")
// console.log(cuerpo)




// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview




