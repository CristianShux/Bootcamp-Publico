import generateSong from "../utils/fakerFunctions.js";

const controladorCanciones={
    obtenerCancionAleatoria: (req,res)=>{
        const song=generateSong();
        res.status(201).json(song);
    }
}

export default controladorCanciones;