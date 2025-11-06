import { mongoose } from "mongoose";
import { songsSchema } from "./songs.model.js";


const playlistSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true, "The name of the playlist is mandatory"],
            unique: true
        },
        songs : {
            type: [songsSchema], 
            required: [true, "The playlist must contain at least one song"] 
        }
    }, 
    {timestamps: true}
)

const Playlist = mongoose.model("playlists", playlistSchema);

export default Playlist;