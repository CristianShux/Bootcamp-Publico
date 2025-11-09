import {Router} from "express"
import recetasController from "../controllers/recetas.controller.js"
import validateToken from "../middleware/validateToken.js";

const recetasRoutes = Router();

recetasRoutes.get('/', validateToken, recetasController.getAll );
recetasRoutes.post('/', validateToken, recetasController.createOne);
recetasRoutes.delete('/:id', validateToken, recetasController.deleteOne);
recetasRoutes.put('/:id', validateToken, recetasController.updateOne);

export default recetasRoutes;