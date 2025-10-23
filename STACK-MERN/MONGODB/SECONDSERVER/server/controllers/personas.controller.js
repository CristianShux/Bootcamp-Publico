import Personas from "../models/personas.model.js";

const controladorPersona = {
  obtenerTodos: async (req, res) => {
    try{
      const listaPersonas= await Personas.find(
        //EJEMPLO DE FILTRADO SE RECOMIENDA TENER UN CREAR PERSONA SIN FILTROS Y HACER UN METODO ESPECIFICO PARA FITLRAR DESPUES
        {edad:{$gte:10}}
      );
      res.status(201).json(listaPersonas);
    }catch(e){
      res.status(501).json(e);
    }
  },
  crearPersona: async (req, res) => {
    const { name, edad } = req.body;
    if (!name || !edad) {
      return res.status(405).json({ message: "falta una de las entradas" });
    }
    const newPersona = { name, edad };

    try{
      const personaAgregada=await Personas.create(newPersona);
      res.status(201).json(personaAgregada);

    }catch(e){
      console.log(`there was an issue ${e}`);
      return res.status(400).json(e);
    }
    
  },
  buscarPersona: async (req, res) => {
    const name = req.params.name;
    try{
      const unaPersona= await Personas.findOne({name}); 
      //const unaPersona= await Personas.findById({name}); //otra opcion
      if(!unaPersona){
        return res.status(404).json({ message: "No hay persona con ese nombre" });
      }
      res.status(201).json(unaPersona);
    }catch(e){
      return res.status(400).json(e);
    }
  },
  borrarPersona: async (req, res)=>{
    const name= req.params.name;
    try{
      const personaEliminada=await Personas.findOneAndDelete({name});
      if(!personaEliminada){
        return res.status(404).json({ message: "No hay persona con ese nombre" });
      }
      res.status(201).json(personaEliminada);
    }catch(e){
      return res.status(400).json(e);
    }
  },
  actualizarPersona: async (req,res)=>{
    const nameActual=req.params.name;
    const { name, edad } = req.body;
    const newData={};
    if(name){
      newData.name=name;
    } 
    if(edad){
      newData.edad=edad;
    }
    try{
      const personaActualizada= await Personas.findOneAndUpdate({name: nameActual},newData, {new:true, runValidators:true});
      if(!personaActualizada){
        return res.status(404).json("El nombre indicado no esta en la base de datos");
      }
      res.status(201).json(personaActualizada);
    }catch(e){
      return res.status(400).json(e);
    }

  }
};

export default controladorPersona;
