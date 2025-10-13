import { useParams, useNavigate } from "react-router-dom";
import styles from "./../css/Carta.module.css";

const Carta = ({ galeryCards }) => {
  const params = useParams();
  const idParams = Number(params.id);
  const cardActual = galeryCards.find((card, index) => index === idParams);
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <h1>{cardActual.name}</h1>
      <img
        className={styles.imagen}
        src={cardActual.img}
        alt={cardActual.name}
      />
      <div className={styles.contenedorBotones}>
        <button onClick={() => navigate(`/art/${idParams - 1}`)} disabled={idParams==0}>
          Anterior
        </button>
        <button onClick={() => navigate("/home")}>Inicio</button>
        <button onClick={() => navigate(`/art/${idParams + 1}`)} disabled={idParams==galeryCards.length-1}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Carta;
