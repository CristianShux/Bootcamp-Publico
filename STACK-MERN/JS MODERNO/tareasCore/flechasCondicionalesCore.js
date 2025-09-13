//Ejercicio 1 Conversor de temperatura
const conversorTemperatura = (Celsius) => (Celsius * 9) / 5 + 32;
console.log(conversorTemperatura(50));

//Ejercicio 2: Generador de mensajes personalizados
const generadorMensajes=(nombre, edad)=>`Hola ${nombre}, tienes ${edad} años de edad.`; //uso de backticks
console.log(generadorMensajes("Cristian",21));

//Ejercicio 3: Convertir de millas a kilómetros
const conversorMillasKilometros=(millas)=> (millas*1.60934).toFixed(2); //puedo fijar que tenga 0 o mas decimales
console.log(conversorMillasKilometros(10));

//Ejercicio 4: Consejos según el clima
const consejosSegunClima=(clima)=> clima=="lluvioso"?"Llevar paraguas":clima=="soleado"?"Llevar Sombrero":"no hay consejos";
console.log(consejosSegunClima("lluvioso"));
console.log(consejosSegunClima("soleado"));
console.log(consejosSegunClima("ventoso"));

