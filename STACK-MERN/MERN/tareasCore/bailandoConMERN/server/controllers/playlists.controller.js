import Playlist from "../models/playlists.model.js";
import { Songs } from "../models/songs.model.js";

const playlistController = {
  getAll: async (req, res) => {
    try {
      const allPlaylist = await Playlist.find();
      return res.status(201).json(allPlaylist);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  createOne: async (req, res) => {
    const { name, songs } = req.body;
    try {
      const foundSongs = await Songs.find({ title: { $in: songs } });
      if (foundSongs.length !== songs.length) {
        return res
          .status(400)
          .json({ message: "One of the songs or both of them were not found" });
      }
      const newArray = {
        name: name,
        songs: foundSongs,
      };

      const savedPlaylist = await Playlist.create(newArray);
      res.status(201).json(savedPlaylist);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  getOne: async (req, res) => {
    const name = req.params.name;
    try {
      const onePlaylist = await Playlist.findOne({ name });
      if (!onePlaylist) {
        return res.status(404).json({ message: "No hay persona con ese nombre" });
      }
      return res.status(201).json(onePlaylist);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};

export default playlistController;
