import express from 'express';
import routePersona from './routes/personas.routes.js';
import connectToDb from './config/database.Connect.js';

const app=express();

const PORT=8080;
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDb();

//rutas
app.use("/api/personas",routePersona)

//listen
app.listen(PORT,()=>{
    console.log(`The server is up and runnign on port ${PORT}`)
})