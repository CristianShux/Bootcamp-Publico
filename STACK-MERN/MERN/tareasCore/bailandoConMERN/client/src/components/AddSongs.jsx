import {useState } from "react";
import axios from "axios"
import styles from './../css/AddSongs.module.css';
import { useNavigate } from "react-router-dom";

const AddSongs=()=>{
    const [title, setTitle]=useState("");
    const [artist, setArtist]=useState("");
    const [year, setYear]=useState("");
    const [genre, setGenre]=useState("");
    const [errores, setErrores] = useState({title: "", artist: "", year: "", genre:""});
    const navigate=useNavigate();

    const manejarEnvio=(e)=>{
        e.preventDefault();

    //validaciones
    let titleValidation="";
    let artistValidation="";
    let yearValidation="";
    let genreValidation="";

    if(title==""){
        titleValidation="El campo de nombre esta vacio";
    }
    if(artist==""){
        artistValidation="El campo de artista esta vacio";
    }
    if(year==""){
        yearValidation="El campo de año esta vacio";
    }
    if(genre==""){
        genreValidation="El campo de genero esta vacio";
    }

    if(title=="" || artist=="" ||year==""|| genre==""){
        setErrores({"title":titleValidation, "artist":artistValidation, "year":yearValidation, "genre":genreValidation})
        return;
    }
    
    const nuevaCancion = { 
            title: title, 
            artist: artist, 
            yearOfRealease: parseInt(year), 
            genre: genre 
        };

        try {
            axios.post("http://localhost:8000/api/canciones", nuevaCancion);
        } catch (error) {
            console.error("Error al crear la canción:", error.response ? error.response.data : error.message);
        }
    

        setTitle("");
        setArtist("");
        setYear("");
        setGenre("");
        setErrores("");
        navigate('/songs'); 
    };

    return (
        <div onSubmit={manejarEnvio} className={styles.contenedor}>
            <h1>New Song</h1>
            <form className={styles.formSongs}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    {errores.title?<p>{errores.title}</p>:""}
                </div>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" name="artist" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)}/>
                    {errores.artist?<p>{errores.artist}</p>:""}
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input type="year" name="year" id="year" value={year} onChange={(e)=>setYear(e.target.value)}/>
                    {errores.year?<p>{errores.year}</p>:""}
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="genre" name="genre" id="genre" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
                    {errores.genre?<p>{errores.genre}</p>:""}
                </div>
                <div>
                    <button className={styles.buttonAdd} type="submit">Add Song</button>
                </div>
            </form>
        </div>
    )
};

export default AddSongs;