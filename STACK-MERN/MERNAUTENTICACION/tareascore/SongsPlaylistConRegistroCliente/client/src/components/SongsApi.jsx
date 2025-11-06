import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SongsApi = ({ setListaSongs, login, setLogin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSongs = async () => {
      axios
        .get("http://localhost:8000/api/canciones",
          {headers:{token_user:localStorage.getItem("token")}}
        )
        .then((response) => {
          setListaSongs(response.data);
        })
        .catch(() => {
          navigate("/login");
          setLogin(false);
        });
    };
    fetchSongs();
  }, [login]);
  return null;
};

export default SongsApi;
