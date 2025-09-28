import reactIcon from "../assets/react.svg";
import styles from './../css/Tarjeta.module.css';

const Tarjeta = ({ nombre, edad }) => {
  return (
    <div className={styles.tarjeta}>
      <p>{nombre}</p>
      <p>{edad}</p>
      <img src={reactIcon} alt="Logo de React" />
    </div>
  );
};

export default Tarjeta;
