window.addEventListener("load", function(){
    let campoNombre= document.querySelector(".name");
    let campoMail= document.querySelector(".mail");
    let campoTel= document.querySelector(".tel");
    let campoPassword= document.querySelector(".password");
    let form = document.querySelector(".form")
    let childrens = document.querySelector(".childrens")
    campoNombre.addEventListener("focus", function(){
        console.log(1)
    })
    campoMail.addEventListener("blur", function(){
        console.log(2);
    })
    campoTel.addEventListener("change",function(){
        console.log(3)
    })
    form.addEventListener("submit", function(e) {
        
        let errores = []
        
        if(campoNombre == "") {
            errores.push("El campo nombre tiene que estar completo")
        } else if(campoNombre.value.length < 3) {
            errores.push("El campo nombre debe tener al menos 3 caracteres")
        }

        if(campoMail.value == "") {
            errores.push("El campo mail tiene que estar completo")
        }

        if(campoTel.value == "") {
            errores.push("El campo telefno tiene que estar completo")
        }
        
        if (errores.length > 0) {
            e.preventDefault()
            let ulErrores = document.querySelector("div.ulerrores ul")
            ulErrores.innerHTML = ""            
            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`
            })
        }

    })


})