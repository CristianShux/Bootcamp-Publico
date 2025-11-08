import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'

const SongsApi = ({ setListaSongs, login, setLogin, setMe }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSongs = async () => {
      axios
        .get("https://songsplaylistconregistroservidor.onrender.com/api/canciones",
          {headers:{token_user:localStorage.getItem("token")}}
        )
        .then((response) => {
          setListaSongs(response.data);
          setMe(jwtDecode(localStorage.getItem("token")));
        })
        .catch(() => {
          navigate("/home");
          setLogin(false);
        });
    };
    fetchSongs();
  }, [login]);
  return null;
};

export default SongsApi;
