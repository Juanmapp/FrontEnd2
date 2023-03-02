// Eventos

// window.onload = function(){

// }

// window.addEventListener("load", function(){
//     let homeButton = document.querySelector(".home-button")
    
//     homeButton.addEventListener("click",function(){
//         alert("Tocaste el boton!")  })
    
//     let aboutButton = document.querySelector(".about-button")
//     aboutButton.addEventListener("click", function(e){
//         e.preventDefault();
//         console.log(this)
//         alert("Quisiste saber sobre el about")
//     })
// })


// Eventos de mouse

window.addEventListener("load", function(){

    let homeButton = document.querySelector(".home-button")
    // homeButton.addEventListener("click", function(){
    //     homeButton.style.color = prompt("Elija su color preferido")
    // })
    
    homeButton.addEventListener("mouseout", function(){
        homeButton.style.color = prompt("Elija su color preferido")
    })

    let parrafos = document.querySelectorAll("p")

    for (let i = 0 ; i<parrafos.length; i++) {
        parrafos[i].addEventListener("click", function(){
            this.style.color = "red"
        })
    }

    window.addEventListener("keypress", function(e) {
        if(e.key == "Enter") {
            alert("No toques Enter!")
        } else {
            console.log(e.key)
        }
    })

})

