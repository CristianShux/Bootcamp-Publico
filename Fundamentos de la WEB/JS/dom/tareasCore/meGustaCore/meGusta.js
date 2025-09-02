//obtengo todos los divs que tienen el label de me gusta y el boton
const divsMeGusta = document.querySelectorAll(".meGusta");

//recorro todos esos div y a cada uno el aplico una funcion
divsMeGusta.forEach(function (div) {
  //traigo el boton y label por separado
  const label = div.querySelector("label");
  const boton = div.querySelector("button");

  //añadio evento al clickear el mouse
  boton.addEventListener("click", function () {
    let numero = parseInt(label.innerText);
    numero++;
    label.innerHTML = numero + " like(s)";
  });
});
