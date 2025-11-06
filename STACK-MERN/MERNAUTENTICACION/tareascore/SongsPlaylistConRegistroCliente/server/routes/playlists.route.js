import {Router} from 'express'
import playlistController from '../controllers/playlists.controller.js'
import validateToken from '../middleware/validateToken.js';


const playlistRoutes = Router();

playlistRoutes.get('/', validateToken, playlistController.getAll);
playlistRoutes.post('/',validateToken, playlistController.createOne);
playlistRoutes.get('/:name',validateToken, playlistController.getOne);
playlistRoutes.delete('/:name',validateToken, playlistController.deleteOne);
playlistRoutes.put('/:name',validateToken, playlistController.updateOne);

export default playlistRoutes;