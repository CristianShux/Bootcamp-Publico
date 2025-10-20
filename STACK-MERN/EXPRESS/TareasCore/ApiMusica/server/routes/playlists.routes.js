import {Router} from 'express';
import controladorPlaylists from '../controllers/playlists.controller.js';

const routePlaylist=Router();

routePlaylist.get("/", controladorPlaylists.obtenerPlaylist);


export default routePlaylist;