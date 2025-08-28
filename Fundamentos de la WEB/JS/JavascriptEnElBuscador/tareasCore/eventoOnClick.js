//cambiar texto de iniciar sesion
document
  .getElementById("iniciar-sesion")
  .addEventListener("click", function () {
    this.innerText = "Cerrar sesión";
  });

//desaparecer boton agregar definicion
document.getElementById("agregar-definicion").addEventListener("click", function () {
  this.remove();
});

//disparar alarma de me gusta en el gato atigrado
const boton = document.querySelector(".atigrado-megusta");
boton.addEventListener("click", function () {
  alert("Gato Atigrado was liked");
});

//aumentar el numero de likes
const botones = document.querySelectorAll(".darMeGusta");
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let numero = parseInt(this.innerText); //convierte la cadena a numero, cuando encuentra un espacio o letra se detiene y me quedo con el numero
    numero++;
    this.innerText = numero + " me gusta";
  });
});
