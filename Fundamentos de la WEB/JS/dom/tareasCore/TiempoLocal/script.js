let botonAceptar=document.querySelector("#aceptar");
let footer=document.querySelector("footer");

botonAceptar.addEventListener("click",function(){
    footer.remove();
})

window.addEventListener("load", () => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    alert("Cargando reporte del clima");
  }
});

//Guardamos la info de cada ciudad en un objeto
const climaCiudades = {
  "Buenos Aires": [
    {dia:"Hoy", estado:"Soleado", temp:"25°C 15°C", img:"img/sol.png"},
    {dia:"Mañana", estado:"Nublado", temp:"23°C 16°C", img:"img/nublado.png"},
    {dia:"Miércoles", estado:"Lluvioso", temp:"20°C 14°C", img:"img/lluvia.png"},
    {dia:"Jueves", estado:"Tormentas", temp:"22°C 13°C", img:"img/tormenta.png"},
    {dia:"Viernes", estado:"Parcialmente nublado", temp:"24°C 15°C", img:"img/nublado.png"},
  ],
  "Quito": [
    {dia:"Hoy", estado:"Tormentas", temp:"17°C 10°C", img:"img/tormenta.png"},
    {dia:"Mañana", estado:"Parcialmente nublado", temp:"17°C 10°C", img:"img/nublado.png"},
    {dia:"Miércoles", estado:"Soleado", temp:"17°C 10°C", img:"img/sol.png"},
    {dia:"Jueves", estado:"Tormentas", temp:"17°C 10°C", img:"img/nublado.png"},
    {dia:"Viernes", estado:"Lluvioso", temp:"17°C 10°C", img:"img/lluvia.png"},
  ],
  "Ciudad de México": [
    {dia:"Hoy", estado:"Soleado", temp:"28°C 18°C", img:"img/sol.png"},
    {dia:"Mañana", estado:"Parcialmente nublado", temp:"27°C 17°C", img:"img/nublado.png"},
    {dia:"Miércoles", estado:"Lluvia ligera", temp:"26°C 16°C", img:"img/lluvia.png"},
    {dia:"Jueves", estado:"Tormentas", temp:"25°C 15°C", img:"img/tormenta.png"},
    {dia:"Viernes", estado:"Soleado", temp:"28°C 18°C", img:"img/sol.png"},
  ],
  "Santiago": [
    {dia:"Hoy", estado:"Nublado", temp:"20°C 10°C", img:"img/nublado.png"},
    {dia:"Mañana", estado:"Parcialmente nublado", temp:"21°C 11°C", img:"img/nublado.png"},
    {dia:"Miércoles", estado:"Soleado", temp:"22°C 12°C", img:"img/sol.png"},
    {dia:"Jueves", estado:"Lluvia ligera", temp:"19°C 9°C", img:"img/lluvia.png"},
    {dia:"Viernes", estado:"Tormentas", temp:"18°C 8°C", img:"img/tormenta.png"},
  ],
  "Sao Paulo": [
    {dia:"Hoy", estado:"Lluvioso", temp:"24°C 18°C", img:"img/lluvia.png"},
    {dia:"Mañana", estado:"Tormentas", temp:"23°C 17°C", img:"img/tormenta.png"},
    {dia:"Miércoles", estado:"Parcialmente nublado", temp:"25°C 18°C", img:"img/nublado.png"},
    {dia:"Jueves", estado:"Soleado", temp:"26°C 19°C", img:"img/sol.png"},
    {dia:"Viernes", estado:"Soleado", temp:"27°C 20°C", img:"img/sol.png"},
  ]
};

//Agarro todos los elementos que voy a necesitar cambiar su estado al hacer click
let contenedor=document.getElementById("contenedor");
let ciudadMostrada=document.querySelector("#contenedor h2");
const tarjetas = document.querySelectorAll(".tarjetaClima");


function actualizarClima(ciudad) {
  const datos = climaCiudades[ciudad];
  ciudadMostrada.innerText=ciudad;
  contenedor.classList.remove("oculto"); // mostrar contenedor

  tarjetas.forEach((tarjeta, index) => {
    tarjeta.querySelector("h3").textContent = datos[index].dia;
    tarjeta.querySelector("span:nth-of-type(1)").textContent = datos[index].estado;
    tarjeta.querySelector("span:nth-of-type(2)").textContent = datos[index].temp;
    tarjeta.querySelector("img").src = datos[index].img;
  });
}


let buenosAires=document.getElementById("buenosAires");
buenosAires.addEventListener("click",function(){
  actualizarClima("Buenos Aires");
})

let quito=document.getElementById("quito");
quito.addEventListener("click",function(){
  actualizarClima("Quito");
})

let ciudadDeMexico=document.getElementById("ciudadDeMexico");
ciudadDeMexico.addEventListener("click",function(){
  actualizarClima("Ciudad de México");
})

let santiago=document.getElementById("santiago");
santiago.addEventListener("click",function(){
  actualizarClima("Santiago");
})

let saoPaulo=document.getElementById("saoPaulo");
saoPaulo.addEventListener("click",function(){
  actualizarClima("Sao Paulo");
})