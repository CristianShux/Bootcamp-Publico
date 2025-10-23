import { mongoose } from "mongoose";

const CancionSchema= mongoose.Schema(
    {
        titulo:{
            type: String,
            required:[true,"Debes añadir el titulo de la cancion"],
            minlength:[6,"El titulo debe tener como minimo 6 caracteres"],
            maxlength:[255,"El titulo debe tener como máximo 255 caracteres"]
        },
        artista:{
            type: String,
            required:[true,"Debes añadir el artista de la cancion"],
            minlength:[10,"El artista debe tener como minimo 10 caracteres"],
            maxlength:[255,"El artista debe tener como máximo 255 caracteres"]
            
        },
        anioLanzamiento:{
            type: Number,
            required:[true,"Debes añadir el año de lanzamiento de la cancion"],
            min: [1000, "El año debe tener 4 dígitos (ej: 1995)"], 
            max: [9999, "El año debe tener 4 dígitos (ej: 2024)"]  
        },
        genero:{
            type: String,
            required:[true,"Debes añadir el genero de la cancion"],
            enum: { //Me permite setiar por asi decirlo valores los cuales puede seleccionar genero, si no esta aca tira el mensaje de error
                values: ["Rock", "Pop", "Reggaeton", "Clasica", "Cumbia","JPOP","KPOP","Otro"],
                message: "El genero '{VALUE}' no es un genero válido."
            }
        }
    },{timestamps: true}
);

const Canciones=mongoose.model('canciones',CancionSchema);

export default Canciones;

