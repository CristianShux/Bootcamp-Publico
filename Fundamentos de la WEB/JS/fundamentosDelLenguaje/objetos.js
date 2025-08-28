//objeto basico con un array y cadenas
var hamburguesaClasica = {
    "pan": "pan de hamburguesa",
    "carne": "carne de res",
    "queso": "cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "pepinillos"]
};

//nosotros podemos acceder a los valores de las propiedades que componen al objeto solo con el punto
console.log("Pan: " + hamburguesaClasica.pan);
console.log("Carne: " + hamburguesaClasica.carne);
console.log("Queso: " + hamburguesaClasica.queso);
console.log("Extras: " + hamburguesaClasica.extras);

//Pero veamos que tambien nosotros podriamos tener una hamburguesa la cual tenga una funcion adentro que nos permita mostrar sus valores
var hamburguesaClasica = {
    "pan": "pan con semillas de sésamo",
    "carne": "carne de res 100%",
    "queso": "queso cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    "infoHamburguesa": function() {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(" "));
    }
}
//ahora puedo utilizar dicha funcion de mi objeto utilizando el nombre de la propiedad asociada a dicha funcion
hamburguesaClasica.infoHamburguesa();

hamburguesaClasica["pan"]="integral";
hamburguesaClasica.infoHamburguesa();