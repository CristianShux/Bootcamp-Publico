import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const dragonTreasure = process.env.DRAGON_TREASURE;
const unicornMagic = process.env.UNICORN_MAGIC;

const app=express();

const PORT=8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
})

console.log(`Tesoro del dragón: ${dragonTreasure}`);
console.log(`Magia del unicornio: ${unicornMagic}`);
