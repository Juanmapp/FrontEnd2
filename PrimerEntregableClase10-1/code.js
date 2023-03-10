/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
console.log()
const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre       = prompt("Ingresa tu nombre")
    datosPersona.edad         = 2023 - parseInt(prompt("Ingresa el año en que naciste"))
    datosPersona.ciudad       = prompt("Ingresa tu ciudad de nacimiento")
    datosPersona.interesPorJs = confirm("Te interesa Javascript?")
  }


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre")
  .innerText = datosPersona.nombre
  document.getElementById("edad")
  .innerText = datosPersona.edad
  document.getElementById("ciudad")
  .innerText = datosPersona.ciudad
  document.getElementById("javascript")
  .innerText = (datosPersona.interesPorJs ? "SI" : "NO")
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila")
  listado.forEach(materia => {
    fila.innerHTML += 
    `<div class="caja">
      <img src= ${materia.imgUrl} alt=${materia.lenguajes}> </img>
      <p class="lenguajes">${materia.lenguajes}</p>
      <p class="bimestre">${materia.bimestre}</p>
    </div>`   
  })
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas)
} 


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const body = document.getElementById("sitio")
  body.classList.toggle("dark")


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", function(e) {
  if (e.key.toLocaleLowerCase() === "f") {
    const p = document.getElementById("sobre-mi")
    p.classList.remove("oculto")
  }
})