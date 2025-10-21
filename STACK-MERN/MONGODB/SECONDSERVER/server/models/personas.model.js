import {mongoose} from 'mongoose';

const PersonaSchema= mongoose.Schema(
    {
        name: {
            type: String,
            //required: true
            required: [true,"Tenes que añadir un nombre"]
        },
        edad:{
            type: Number,
            required: [true,"Tenes que añadir una edad"]
        }
    },{timestamps: true}
);

const Personas=mongoose.model('personas',PersonaSchema);

export default Personas;