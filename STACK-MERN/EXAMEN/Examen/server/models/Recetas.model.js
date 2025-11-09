import { mongoose } from "mongoose";

const RecetaSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, "Por favor proporciona el nombre de la receta"],
            minlength: [5, "El nombre de la receta debe de tener al menos 5 caracteres"]
        },
        tiempoPreparacion: {
            type: Number,
            required: [true, "Por favor proporciona el tiempo de preparación"]
        },
        ingredientes: {
            type: String,
            required: [true, "Por favor proporciona los ingredientes"],
            minlength: [10, "El campo de ingredientes debe de tener al menos 10 caracteres"]
        },
        instrucciones: {
            type: String,
            required: [true, "Por favor proporciona las instrucciones"],
            minlength: [10, "El campo de instrucciones debe de tener al menos 10 caracteres"]
        },
        esPublica: {
            type: Boolean,
            required: true,
            default: false
        },
        creadorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        creadorNombre: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Recetas = mongoose.model('recetas', RecetaSchema);

export {Recetas};