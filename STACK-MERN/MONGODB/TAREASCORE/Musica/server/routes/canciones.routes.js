import {Router} from 'express';
import controladorCancion from '../controllers/canciones.controller.js';

const routeCancion=Router();

routeCancion.post("/",controladorCancion.crearCancion);
routeCancion.get("/",controladorCancion.obtenerCanciones);
routeCancion.get("/:id",controladorCancion.obtenerCancionPorId);
routeCancion.put("/:id",controladorCancion.editarInformacion);
routeCancion.delete("/:id",controladorCancion.eliminarCancion);

export default routeCancion;
