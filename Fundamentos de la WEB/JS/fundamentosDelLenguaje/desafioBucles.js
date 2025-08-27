//Imprimir pares del 1 al 30
for(var i=0;i<=30;i++){
    if(i%2===0){
        console.log(i);
    }
}
console.log("------------------------------------------------")
//Imprimir multiplos de 4 en orden ascendente del 100 al 0
for(var i=100;i>=0;i--){
    if(i%4===0){
        console.log(i);
    }
}
console.log("------------------------------------------------")
//Imprime la secuencia 10, 7, 4, 1, -2, -5.
var i=10;
while(i>=-5){
    console.log(i)
    i-=3
}
console.log("------------------------------------------------")
//Suma todos los números pares del 1 al 50
var suma=0;
for(var i=0; i<=50;i++){
    suma+=i;
}
console.log(suma);
console.log("------------------------------------------------")
//Factorial multiplicar todos los números del 1 al 20.
var producto=1;
for(var i=1;i<=20;i++){
    producto*=i;
}
console.log(producto);
