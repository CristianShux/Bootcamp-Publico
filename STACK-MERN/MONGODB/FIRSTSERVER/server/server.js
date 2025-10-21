import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/databaseConnect.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT2 || 8080;

//MIDDLEWARES
app.use(express.json());

connectToDb();


app.listen(PORT, ()=>{
    console.log(`El server esta corriendo ahora mismo en el puerto ${PORT}`);
})