import fakerFunctions from "../utils/fakerFunctions.js";
const { generatePlaylist } = fakerFunctions;

const controladorPlaylists={
    obtenerPlaylist: (req,res)=>{
        const playlist=generatePlaylist();
        res.status(201).json(playlist);
    }
}

export default controladorPlaylists;