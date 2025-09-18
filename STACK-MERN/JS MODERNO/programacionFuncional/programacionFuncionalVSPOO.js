//Programacion funcional
const despedirse = (nombre) => `¡Adiós, ${nombre}!`;
console.log(despedirse("Martha")); // ¡Adiós, Martha!

//Programacion orientada a objetos
class Felicitador {
  constructor(nombre) {
    this.nombre = nombre;
  }
  felicitar() {
    return `¡Felicidades, ${this.nombre}!`;
  }
}
const felicitador = new Felicitador("Betty");
console.log(felicitador.felicitar()); // ¡Felicidades, Betty!
