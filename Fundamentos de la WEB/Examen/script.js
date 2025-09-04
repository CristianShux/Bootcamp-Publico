//creamos un evento de alerta cuando se hace click en el boton donar
let botonDonar=document.getElementById("botonDonar");

botonDonar.addEventListener("click",function(){
    alert("¡Gracias por donar a AdoptaTuÁrbol!");
});

//Creamos un evento de cambio de texto, color de texto y color de boton cuando se hace click en adoptar un arbol

//Tenemos que hacer esto para todos los botones por lo cual, los obtengo a todos con una consulta
let botonesAdoptarArbol=document.querySelectorAll(".botonAdoptarArbol");

//Ahora lo que hago es recorrer cada uno de los botones y aplicarles el evento a cada uno de ellos
botonesAdoptarArbol.forEach(function(boton){
    boton.addEventListener("click",function(){
        boton.innerText="Adoptado";
        boton.style.color="white";
        boton.style.backgroundColor="#274c18";
    });
});

//Creamos un evento para cuando se seleccionan diferentes clases de arboles, cambie el texto que se esta mostrando en tiempo real

//Me traigo el h2 el cual muestra el tipo de arboles, atravez de una consulta
let mostrandoArbol=document.querySelector("#mostrandoArboles h2");

//Me traigo el elemento que selecciona el tipo de arbol 
let tipoArbol=document.getElementById("tipoArbol");

//le aplico el evento
tipoArbol.addEventListener("change",function(){
    mostrandoArbol.innerText="Mostrando: "+tipoArbol.value;
});



