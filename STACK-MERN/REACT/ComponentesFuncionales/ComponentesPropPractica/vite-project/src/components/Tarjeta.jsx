import PropTypes from 'prop-types';
import styles from './../css/Tarjeta.module.css'

const Tarjeta = ({ nombreProducto, precio, descripcion, enStock }) => {
  return (
    <div className={styles.tarjeta}>
      <h3>{nombreProducto}</h3>
      <span className={styles.colorGris}>${precio}</span>
      <p>{descripcion}</p>
      {enStock == true ? <span className={styles.enStock}>EnStock</span> : <span className={styles.agotado}>Agotado</span>}
    </div>
  );
};

Tarjeta.propTypes={
  nombreProducto: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  enStock: PropTypes.bool.isRequired
}

export default Tarjeta