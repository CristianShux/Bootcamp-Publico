import Canciones from "../models/canciones.model.js";

const controladorCancion={
    crearCancion: async (req, res)=>{
        const {titulo, artista, anioLanzamiento, genero}=req.body;
        if(!titulo || !artista || !anioLanzamiento || !genero){
            return res.status(405).json({ message: "falta una de las entradas" });
        }
        const newCancion={titulo, artista, anioLanzamiento, genero};
        try{
            const cancionAgregada= await Canciones.create(newCancion);
            res.status(201).json(cancionAgregada);
        }catch(e){
            return res.status(400).json(e.message);
        }
    },
    obtenerCanciones: async (req, res)=>{
        try{
            const listaCanciones= await Canciones.find();
            res.status(201).json(listaCanciones);
        }catch(e){
            return res.status(400).json(e);
        }
    },
    obtenerCancionPorId: async (req, res)=>{
        const id=req.params.id;
        try{
            const unaCancion= await Canciones.findById(id);
            if(!unaCancion){
                return res.status(404).json({ message: "No hay cancion con ese id" });
            }
            return res.status(201).json(unaCancion);
        }catch(e){
            return res.status(400).json({ message: "Formato de ID inválido", error: e.message });
        }
    },
    editarInformacion: async (req, res)=>{
        const id=req.params.id;
        const {titulo, artista, anioLanzamiento, genero}=req.body;
        const newData={};
        if(titulo){
            newData.titulo=titulo;
        }
        if(artista){
            newData.artista=artista;
        }
        if(anioLanzamiento){
            newData.anioLanzamiento=anioLanzamiento;
        }
        if(genero){
            newData.genero=genero;
        }
        try{
            const cancionActualizada= await Canciones.findByIdAndUpdate(id,newData,{new:true, runValidators:true});
            if(!cancionActualizada){
                return res.status(404).json({message:"Cancion a actualizar no encontrada"});
            }
            res.status(201).json(cancionActualizada);
        }catch(e){
            return res.status(400).json({ message: "Formato de ID inválido", error: e.message })
        }
    },
    eliminarCancion: async (req, res)=>{
        const id=req.params.id;
        try{
            const cancionEliminada= await Canciones.findByIdAndDelete(id);
            if(!cancionEliminada){
                return res.status(404).json({message: "Cancion a eliminar no encontrada"})
            }
            res.status(201).json(cancionEliminada);
        }catch(e){
            return res.status(400).json({ message: "Formato de ID inválido", error: e.message });
        }
    }
};

export default controladorCancion;