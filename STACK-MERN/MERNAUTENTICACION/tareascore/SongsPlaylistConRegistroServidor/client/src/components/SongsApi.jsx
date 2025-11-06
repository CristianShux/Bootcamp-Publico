import axios from "axios";
import { useEffect } from "react";

const SongsApi=({setListaSongs})=>{
    useEffect(() => {
    const fetchSongs = async () => {
      axios.get("http://localhost:8000/api/canciones").then((response) => {
        setListaSongs(response.data);
      }).catch((e=>console.log(e)));
    };
    fetchSongs();
  }, []);
  return null;
}

export default SongsApi;