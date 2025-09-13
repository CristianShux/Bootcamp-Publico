// Variable ES6
const saludo = "Hola";

// Función ES6
const saludarMundo = (nombre) => {
   console.log(`${saludo} ${nombre}`);
}

// Ejecución
saludarMundo("Pianola");

// Literal de objeto ES6
const tonyStark = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 50,
};

// Asignación de propiedades de literales de objeto a variables
const { nombre, apellido, edad } = tonyStark;

// Mostrar propiedades de literales de objeto
console.log(nombre, apellido, edad);