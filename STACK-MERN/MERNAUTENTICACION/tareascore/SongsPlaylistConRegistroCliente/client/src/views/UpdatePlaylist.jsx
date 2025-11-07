import { useEffect, useState } from "react";
import styles from "./../css/AddPlaylist.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePlaylist = ({listaSongs,listaPlaylists,setListaPlaylists, logOut}) => {
  const [namePlaylist, setNamePlaylist] = useState("");
  const [selectedSongTitles, setSelectedSongTitles] = useState([]);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();
  const { name } = useParams();
  const nombreDecodificado = decodeURIComponent(name);
  const index=listaPlaylists.findIndex((playlist)=>playlist.name==nombreDecodificado);

  useEffect(() => {
    const getSongsOfPlaylist = async () => {
      await axios
        .get(`https://songsplaylistconregistroservidor.onrender.com/api/playlist/${nombreDecodificado}`,
          {headers:{token_user:localStorage.getItem("token")}}
        )
        .then((response) => {
          setNamePlaylist(response.data.name);
          const songsTitles = response.data.songs.map((song) => song.title);
          const songsTitlesInList=listaSongs.filter((song)=>songsTitles.includes(song.title)).map((song)=>song.title)
          setSelectedSongTitles(songsTitlesInList);
        }).catch((e)=>{
          if(e.status==406){
            logOut();
          }
          setErrores(e.response.data.errors);   
        });
    };
    getSongsOfPlaylist();
  }, []);

  const manejarCambioCheckBox = (songTitle) => {
    setSelectedSongTitles((prevTitles) => {
      if (prevTitles.includes(songTitle)) {
        // Si ya está seleccionado, lo quitamos
        return prevTitles.filter((title) => title !== songTitle);
      } else {
        // Si no está seleccionado, lo añadimos
        return [...prevTitles, songTitle];
      }
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const newPlaylist = {
      name: namePlaylist,
      songs: selectedSongTitles,
    };

    try {
      await axios.put(
        `https://songsplaylistconregistroservidor.onrender.com/api/playlist/${nombreDecodificado}`,
        newPlaylist, {headers:{token_user:localStorage.getItem("token")}}
      ).then(response=>{
        const copyListPlaylist=[...listaPlaylists];
        copyListPlaylist[index]=response.data;
        setListaPlaylists(copyListPlaylist);
      })
      navigate(`/playlists/${namePlaylist}`);
    } catch (e) {
       if(e.status==406){
          logOut();
       }
      setErrores(e.response.data.errors);
    }
  };

  return (
    <div className={styles.contenedor}>
      <h1>Edit Playlist</h1>

      <form className={styles.formPlaylist} onSubmit={manejarEnvio}>
        <div className={styles.contenedorName}>
          <label htmlFor="namePlaylist">Playlist Name:</label>
          <input
            className={styles.inputName}
            type="text"
            name="namePlaylist"
            id="namePlaylist"
            value={namePlaylist}
            onChange={(e) => setNamePlaylist(e.target.value)}
          />
          {errores.name ? <p>{errores.name}</p> : ""}
        </div>
        <h1>Choose Songs</h1>
        <div>
          {listaSongs.map((song, index) => {
            return (
              <div className={styles.checks} key={index}>
                <input
                  type="checkbox"
                  id={index}
                  checked={selectedSongTitles.includes(song.title)}
                  onChange={() => manejarCambioCheckBox(song.title)}
                />
                <label htmlFor={index}>{song.title}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.contenedorBoton}>
          {errores.songs ? <p>{errores.songs}</p> : ""}
          <button className={styles.buttonCreatePlaylist} type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdatePlaylist;
