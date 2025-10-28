import {Router} from 'express'
import playlistController from '../controllers/playlists.controller.js'


const playlistRoutes = Router();

playlistRoutes.get('/', playlistController.getAll)
playlistRoutes.post('/', playlistController.createOne)
playlistRoutes.get('/:name',playlistController.getOne)

export default playlistRoutes;