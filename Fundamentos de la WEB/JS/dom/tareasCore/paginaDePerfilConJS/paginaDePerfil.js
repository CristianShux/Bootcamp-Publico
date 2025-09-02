//implementamos botones para agregar solicitudes de conexion y eliminarlas y actualizar la cantidad de solicitudes

//obtengo el titulo el cual muestra la cantidad de solicitudes de conexion
const cantidadSolicitudes = document.querySelector(".solicitudesConexion h1");

//obtenego el titulo el cual muestra la cantidad conexionex actuales
const cantidadConexiones = document.querySelector(".misConexiones h1");

//recupero las solicitudes
const solicitudesConexion = document.querySelectorAll(".solicitud");

//recorro las solicitudes y accedo al boton de cada una para aplicarle funcion
solicitudesConexion.forEach(function (solicitud) {
  const boton = solicitud.querySelector(".agregar");
  boton.addEventListener("click", function () {
    //eliminamos solicitud
    solicitud.remove();

    //actualizamos texto de cantidad de solicitudes
    let textoSolicitudes = cantidadSolicitudes.innerText;
    let numeroSolicitudes = parseInt(textoSolicitudes.split("(")[1]); //Tomamos la parte despues del parentesis que es el numero
    numeroSolicitudes--;
    cantidadSolicitudes.innerText =
      "Solicitudes de Conexión" + "(" + numeroSolicitudes + ")";

    //actualizamos el texto de cantidad de conexiones
    let textoConexiones = cantidadConexiones.innerText;
    let numeroConexiones = parseInt(textoConexiones.split("(")[1]); //
    numeroConexiones++;
    cantidadConexiones.innerText =
      "Solicitudes de Conexión" + "(" + numeroConexiones + ")";
  });
});

//Ahora vamos a hacer que cuando apretemos el boton de editperfil se cambie el nombre por uno random

//Obtengo el nombre actual que esta en la presentacion
const nombreEstudiante=document.querySelector(".presentacion h1");

//obtengo el boton
const botonPerfil=document.querySelector(".botonPerfil button");

//aplico el evento al boton
botonPerfil.addEventListener("click",function(){
    nombreEstudiante.innerText="Nico Yazawa";

})