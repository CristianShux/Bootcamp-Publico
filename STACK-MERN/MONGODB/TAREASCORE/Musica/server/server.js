import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/database.js';
import routeCancion from './routes/canciones.routes.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 8000;

//Middleware
app.use(express.json());

connectToDb();

//rutas
app.use("/api/canciones",routeCancion);

app.listen(PORT,()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
})