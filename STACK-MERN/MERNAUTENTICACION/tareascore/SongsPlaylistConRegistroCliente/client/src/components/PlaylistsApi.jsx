import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlaylistsApi=({setListaPlaylists, login, setLogin})=>{
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchPlaylists= async()=>{
            await axios.get("https://songsplaylistconregistroservidor.onrender.com/api/playlist",
                {headers:{token_user:localStorage.getItem("token")}}
            )
                .then((response)=>{
                    setListaPlaylists(response.data);
                }).catch(()=>{
                    navigate("/home");
                    setLogin(false);
                })
        };
        fetchPlaylists();
    },[login]);
    return null;

}

export default PlaylistsApi;