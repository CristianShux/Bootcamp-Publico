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
    const messages = {};
    if (!songs || songs.length == 0) {
      messages.songs = "The playlist must contain at least one song";
    }
    if (Object.keys(messages).length > 0) {
      return res.status(400).json({ errors: messages });
    }
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
      if (e.name === "ValidationError") {
        Object.keys(e.errors).forEach((key) => {
          messages[key] = e.errors[key].message;
        });
      }
      return res.status(400).json({ errors: { ...messages } });
    }
  },
  getOne: async (req, res) => {
    const name = req.params.name;
    try {
      const onePlaylist = await Playlist.findOne({ name });
      if (!onePlaylist) {
        return res
          .status(404)
          .json({ message: "No hay playlist con ese nombre" });
      }
      return res.status(201).json(onePlaylist);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  deleteOne: async (req, res) => {
    const name = req.params.name;
    try {
      const deletePlaylist = await Playlist.findOneAndDelete({ name });
      if (!deletePlaylist) {
        return res.status(404).json({ message: "The name does not exist" });
      }
      return res.status(201).json(deletePlaylist);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  updateOne: async (req, res) => {
    const nameToUpdate = req.params.name;
    const { name, songs } = req.body;
    const messages = {};
    if (!songs || songs.length == 0) {
      messages.songs = "The playlist must contain at least one song";
    }
    if (Object.keys(messages).length > 0) {
      return res.status(400).json({ errors: messages });
    }
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
      const oneUpdated = await Playlist.findOneAndUpdate(
        { name: nameToUpdate },
        newArray,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!oneUpdated) {
        return res.status(404).json({ message: "The name does not exist" });
      }
      return res.status(201).json(oneUpdated);
    } catch (e) {
      if (e.name === "ValidationError") {
        Object.keys(e.errors).forEach((key) => {
          messages[key] = e.errors[key].message;
        });
      }
      return res.status(400).json({ errors: { ...messages } });
    }
  },
};

export default playlistController;
