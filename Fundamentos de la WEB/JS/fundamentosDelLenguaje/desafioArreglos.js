//Siempre aburrido

function siempreAburrido(arreglo) {
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "ver TV") {
      console.log("¡Entretenido!");
    } else {
      console.log("¡Estoy aburrido!");
    }
  }
}
siempreAburrido(["cantar", "correr", "salir", "ver TV"]);
console.log("------------------------------------------------------------");
//numero de corte
function numeroDeCorte(arreglo, valorCorte) {
  var numerosPequeños = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < valorCorte) {
      numerosPequeños.push(arreglo[i]);
    }
  }
  return numerosPequeños;
}
console.log(numeroDeCorte([1, 2, 8, 4, 5, 7, 6], 4));
console.log("------------------------------------------------------------");
//peor que el promedio
function promedio(arreglo) {
  suma = 0;
  for (var i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  promedio = suma / arreglo.length;
  return promedio;
}

function peorQueElPromedio(arreglo) {
  var prom = promedio(arreglo);
  var numerosBajoPromedio = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < prom) {
      numerosBajoPromedio.push(arreglo[i]);
    }
  }
  return numerosBajoPromedio;
}
console.log(peorQueElPromedio([1, 20, 3, 4, 15, 6, 27]));
console.log("------------------------------------------------------------");
//Cantidad de pares de un arreglo
function conteoPares(arreglo){
    cantidad=0;
    for(var i=0;i<arreglo.length;i++){
        if(arreglo[i]%2===0){
            cantidad++;
        }
    }
    return cantidad;
}
console.log(conteoPares([1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18]));
console.log("------------------------------------------------------------");

//secuencia fibonacci
function arregloDeFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

// Ejemplo de uso
console.log(arregloDeFibonacci(30));
