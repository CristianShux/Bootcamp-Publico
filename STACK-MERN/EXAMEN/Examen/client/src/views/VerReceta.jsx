import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./../css/VerReceta.module.css";

const VerReceta = ({ me, logOut, recetas, setRecetas }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const receta = recetas.find((r) => r._id === id);

  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar esta receta?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:8000/api/recetas/${id}`, {
        headers: { token_user: localStorage.getItem("token") },
      });
      setRecetas(recetas.filter((r) => r._id !== id));
      navigate("/recetas");
    } catch (e) {
      if (e.response && e.response.status === 406) {
        logOut();
      }
      console.error("Error al eliminar la receta", e);
    }
  };

  const ingredientesLista = receta.ingredientes
    .split(",")
    .map((item) => item.trim());
  const instruccionesLista = receta.instrucciones
    .split(". ")
    .map((item) => item.trim());

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>{receta.nombre}</h1>

      <div className={styles.cajaDetalles}>
        <div>
          <span className={styles.label}>Tiempo de preparación</span>
          <p>{receta.tiempoPreparacion} minutos</p>
        </div>

        <div>
          <span className={styles.label}>Ingredientes</span>
          <ul className={styles.list}>
            {ingredientesLista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.label}>Instrucciones</span>
          <ol className={styles.list}>
            {instruccionesLista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      {me.id === receta.creadorId && (
        <button onClick={handleDelete} className={styles.botonBorrar}>
          Eliminar receta
        </button>
      )}
    </div>
  );
};

export default VerReceta;
