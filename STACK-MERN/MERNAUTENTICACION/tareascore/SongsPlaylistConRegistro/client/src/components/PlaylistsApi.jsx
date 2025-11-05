import axios from "axios";
import { useEffect } from "react";

const PlaylistsApi=({setListaPlaylists})=>{
    useEffect(()=>{
        const fetchPlaylists= async()=>{
            await axios.get("http://localhost:8000/api/playlist")
                .then((response)=>{
                    setListaPlaylists(response.data);
                });
        };
        fetchPlaylists();
    },[]);
    return null;

}

export default PlaylistsApi;