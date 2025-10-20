import express from 'express';

//definicion de app
const app=express();

//puerto
const PORT=8081;
//http://localhost:8081

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Arreglo de personas
const personas = [
    {name: "Luz", edad: 19},
    {name: "Kevin", edad: 35},
    {name: "Bruno", edad: 22},
    {name: "Lucia", edad: 19}
]

//definicion de rutas

//manejo de rutas mas complejo
app.route("/personas")
    .get((req,res)=>{
        res.send("Te conectaste por get");
    })
    .post((req,res)=>{
        res.send("Te conectaste por post");
    })

//get del arreglo estatico
app.get("/getPersonas", (req,res)=>{
    res.statusMessage="Esta todo bien loco";
    res.status(201).json(personas);
});

//post del arreglo estatico
app.post("/postPersonas",(req,res)=>{
    console.log(req.body);
    const{name,edad}=req.body;
    if(!name || !edad){
        return res.status(405).json({message: "falta una de las entradas"})
    }
    const newPerson={name,edad};
    personas.push(newPerson);
    res.status(201).json(newPerson);
});

//get de persona dinamico
app.get("/getPersona/:name",(req,res)=>{
    const name=req.params.name;
    const persona=personas.find((person)=>person.name==name);
     if(!persona){
        return res.status(404).json({message: "No hay persona con ese nombre"})
    }
    res.status(201).json(persona);

})

//listen del servidor
app.listen(PORT, ()=>{
    console.log(`El servidor ya esta levantado corriendo en el puerto ${PORT}`);
})