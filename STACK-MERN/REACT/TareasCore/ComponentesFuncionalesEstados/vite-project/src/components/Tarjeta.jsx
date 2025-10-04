import PropTypes from 'prop-types';
import styles from './../css/Tarjeta.module.css'
import { useState } from 'react';

const Tarjeta = ({ nombreProducto, precio, descripcion, stock}) => {
  const[cantStock, setCantStock]=useState(stock);

  const actualizarStock=()=>{
    setCantStock(cantStock-1);
  }
   
  return (
    <div className={styles.tarjeta}>
      <h3>{nombreProducto}</h3>
      <span className={styles.colorGris}>${precio}</span>
      <p>{descripcion}</p>
      {cantStock!=0 ? <span className={styles.enStock}>En Stock {cantStock}</span> : <span className={styles.agotado}>Agotado</span>}
      <div>
      {cantStock!=0?<button onClick={actualizarStock}>Comprar</button>:<button disabled className={styles.fondoGris}>Comprar</button>}
      </div>
    </div>
  );
};

Tarjeta.propTypes={
  nombreProducto: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired
}

export default Tarjeta