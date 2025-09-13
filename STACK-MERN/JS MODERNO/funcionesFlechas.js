//funcion tradicional
/*function calcularArea(radio) {
  return Math.PI * radio * radio;
}*/

//El equivalente en funcion flecha
const calcularArea = (radio) => Math.PI * radio * radio;
console.log(calcularArea(5));

//Sintaxis concisa y ejemplo para sumar
const suma = (a, b) => a + b;
console.log(suma(5, 6));

//Retorno implicito ejemplo map
const nombres = ["Ana", "Beto", "Carlos"];
const nombresEnMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresEnMayusculas);

//Manejo de this
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
    this.decirNombre = () => console.log(this.nombre);
  }
}

const persona = new Persona("Elena");
persona.decirNombre(); // Imprime "Elena"

//No tienen argumentos
const sumar = (...numeros) => numeros.reduce((total, num) => total + num, 0);

console.log(sumar(1, 2, 3, 4)); // Imprime 10
