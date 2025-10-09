import styles from "./../css/FiltrarNota.module.css";
const FiltrarNota = ({ filter, setFilter }) => {
  return (
    <div className={styles.selector}>
      <select
        className={styles.tipos}
        name="tipo"
        id="tipo"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Bajo">Bajo</option>
        <option value="Medio">Medio</option>
        <option value="Alto">Alto</option>
      </select>
    </div>
  );
};

export default FiltrarNota;
