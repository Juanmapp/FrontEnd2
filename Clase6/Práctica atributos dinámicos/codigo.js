//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

let tarjeta = document.getElementById("tarjeta").setAttribute("class", "card")


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let imagen = document.querySelector(".col-1 img").setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png")


//3- Quitarle al titulo la clase que le está dando un formato feo

let tituloFeo = document.querySelector(".titulo-feo")
tituloFeo.removeAttribute("class")

//4- Chequear si el link a youtube posee o no el atributo href

let linkYt = document.getElementById("link_youtube").hasAttribute("href")

console.log(linkYt)

//5- Obtener el href del link a wikipedia y mostrarlo por consola

let linkWiki = document.getElementById("link_wikipedia").getAttribute("href")

console.log(linkWiki)
