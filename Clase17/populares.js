// PRACTICANDO FETCH

const ENDPOINT_GIFS = "https://api.giphy.com/v1/gifs/trending?api_key=HdQNzfTHd4SuSHQP4iyDoBlfIrvlAAoz&limit=25&rating=g"

window.onload = function() {
    fetch(ENDPOINT_GIFS)
    .then(respuesta => respuesta.json())
    .then(informacion => {
        const arrayGifs = informacion.data
    arrayGifs.forEach((element, i) => {
        let gif = "<p>" + arrayGifs[i].title + "</p>"
        gif += `<img src="${arrayGifs[i].images.original.url}">`
        document.querySelector("ul").innerHTML += `<li> ${gif}</li>`
        
    })
    
})
.catch(e => {
        alert("Error! Intente mas tarde")
    })
}