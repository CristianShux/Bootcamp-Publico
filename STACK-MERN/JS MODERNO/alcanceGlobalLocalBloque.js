//Alcance global
// Variable global para contar visitas
let visitas = 0;

// Función para mostrar número de visitas
const mostrarVisitas = () => {
  console.log(`Número de visitas: ${visitas}`);
};

// Función para registrar nueva visita
const nuevaVisita = () => {
  visitas++;
};

// Simulación de visitas
nuevaVisita();
mostrarVisitas(); // Output: Número de visitas: 1

//Alcance local
const contarVisitas = () => {
  let visitas = 0; // Variable local

  const mostrarVisitas = () => {
    console.log(`Número de visitas: ${visitas}`);
  };

  const nuevaVisita = () => {
    visitas++;
  };

  nuevaVisita();
  nuevaVisita();
  mostrarVisitas(); // Output: Número de visitas: 2
};

contarVisitas();

//Alcanze de bloque
//Variables declaradas con let y const, en bloques como switch, for, if, while
if (true) {
  let mensaje = "Hola desde el bloque";
  console.log(mensaje); // Output: Hola desde el bloque
}

// console.log(mensaje); // Error: mensaje no está definido
