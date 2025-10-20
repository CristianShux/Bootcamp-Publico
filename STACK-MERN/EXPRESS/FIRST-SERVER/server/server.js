//importamos el modulo express

import express from 'express';

//Creamos una instancia de la aplicacion
const app=express();

//Definimos el puerto de escucha
const PORT=8080;

//Ruta basica
//Por defecto el inicio sera http://localhost:8080
app.get("/", (req,res)=>{
    res.send("Hola mai lindura");
});

app.get('/personas', (req,res)=>{
    res.json({name: "Mai", edad: 18})
})


//Iniciamos el servidor
app.listen(PORT, ()=>{
    console.log(`El servidor esta activo en el puerto ${PORT}`)
})