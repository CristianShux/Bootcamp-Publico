import styles from './../css/Saludo.module.css'

const Saludo = ({ nombre }) => {
  return <span className={styles.span}>{nombre}</span>;
};

export default Saludo;
