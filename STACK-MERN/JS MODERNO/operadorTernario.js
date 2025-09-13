//Ejemplo ocn if-else tradicional
const obtenerNivelAcceso = (edad) => {
  if (edad < 18) {
    return "Acceso restringido";
  } else if (edad <= 65) {
    return "Acceso completo";
  } else {
    return "Acceso senior";
  }
};

console.log(obtenerNivelAcceso(30)); // "Acceso completo"
console.log(obtenerNivelAcceso(70)); // "Acceso senior"

//Mismo ejemplo pero con el operador ternario
const obtenerNivelAcceso2 = (edad) =>
  edad < 18
    ? "Acceso restringido"
    : edad <= 65
    ? "Acceso completo"
    : "Acceso senior";

console.log(obtenerNivelAcceso2(30)); // "Acceso completo"
console.log(obtenerNivelAcceso2(70)); // "Acceso senior"

//Multiples condiciones y en una asignacion de variable
const edad = 70;
const nivelAcceso =
  edad < 18
    ? "Acceso restringido"
    : edad <= 65
    ? "Acceso completo"
    : "Acceso sénior";

console.log(nivelAcceso); // "Acceso sénior"
