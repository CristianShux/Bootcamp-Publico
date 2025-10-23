import {mongoose} from 'mongoose';

const PersonaSchema= mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true,"Tenes que añadir un nombre"],
            minlength: [3,"El nombre es muy corto, deberias tener al menos 3 caracteres"],
            maxlength: [10, "El nombre es muy largo"]
        },
        edad:{
            type: Number,
            required: [true,"Tenes que añadir una edad"],
            min: [18,"Tienes un edad menor que 18"],
            max: [50,"Tienes un edad mayor que 50"]
        }
    },{timestamps: true}
);

const Personas=mongoose.model('personas',PersonaSchema);

export default Personas;