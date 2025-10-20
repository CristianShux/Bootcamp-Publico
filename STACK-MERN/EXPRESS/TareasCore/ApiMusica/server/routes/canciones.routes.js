import {Router} from 'express';
import controladorCanciones from '../controllers/canciones.controller.js';

const routeCancion=Router();

routeCancion.get("/",controladorCanciones.obtenerCancionAleatoria);


export default routeCancion;