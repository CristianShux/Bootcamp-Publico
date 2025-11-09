import { Recetas } from "../models/Recetas.model.js";

const RecetasController = {
  getAll: async (req, res) => {
    try {
      const songs = await Recetas.find();
      return res.status(201).json(songs);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  createOne: async (req, res) => {
    const {
      nombre,
      tiempoPreparacion,
      ingredientes,
      instrucciones,
      esPublica,
      creadorId,
      creadorNombre,
    } = req.body;
    const newArray = {
      nombre,
      tiempoPreparacion,
      ingredientes,
      instrucciones,
      esPublica,
      creadorId,
      creadorNombre,
    };
    try {
      const nuevaReceta = await Recetas.create(newArray);
      res.status(201).json(nuevaReceta);
    } catch (e) {
      const messages = {};
      if (e.name === "ValidationError") {
        Object.keys(e.errors).forEach((key) => {
          messages[key] = e.errors[key].message;
        });
      }

      return res.status(400).json({ errors: { ...messages } });
    }
  },
  deleteOne: async (req, res) => {
    const id = req.params.id;
    try {
      const recetaBorrada = await Recetas.findByIdAndDelete(id);
      if (!recetaBorrada) {
        return res.status(404).json({ message: "El id no existe" });
      }
      res
        .status(201)
        .json({ message: "La cancion fue eliminada correctamente" });
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  updateOne: async (req, res) => {
    const id = req.params.id;
    const actualizarData = req.body;
    try {
      const recetaActualizda = await Recetas.findByIdAndUpdate(
        id,
        actualizarData,
        { new: true, runValidators: true }
      );
      if (!recetaActualizda) {
        return res.status(404).json({ message: "Ese id no existe" });
      }
      res.status(201).json(recetaActualizda);
    } catch (e) {
      const messages = {};
      if (e.name === "ValidationError") {
        Object.keys(e.errors).forEach((key) => {
          messages[key] = e.errors[key].message;
        });
      }
      return res.status(400).json({ errors: { ...messages } });
    }
  },
};

export default RecetasController;
