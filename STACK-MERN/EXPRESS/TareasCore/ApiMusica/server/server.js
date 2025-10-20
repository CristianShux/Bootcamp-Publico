import express from 'express';
import routeCancion from './routes/canciones.routes.js';
import routePlaylist from './routes/playlists.routes.js';

const app=express();

//http://localhost8080
const PORT=8080;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas
app.use("/api/cancion",routeCancion);
app.use("/api/playlist",routePlaylist);

//listen
app.listen(PORT, ()=>{
    console.log(`El servidor esta activo en el puerto ${PORT}`);
})