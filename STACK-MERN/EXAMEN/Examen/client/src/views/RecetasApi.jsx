import axios from "axios";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import styles from "./../css/RecetasApi.module.css";

const RecetasApi = ({ me, setMe, recetas, setRecetas, logOut }) => {
  const getData = () => {
    const URL = "http://localhost:8000/api/recetas";
    axios(URL, { headers: { token_user: localStorage.getItem("token") } })
      .then((response) => {
        setRecetas(response.data);
        setMe(jwtDecode(localStorage.getItem("token")));
      })
      .catch((e) => {
        logOut();
        console.log(e);
      });
  };

  useEffect(() => {
    if (recetas.length === 0) {
      getData();
    }
  }, []);

  const sortDesc = (a, b) => b.tiempoPreparacion - a.tiempoPreparacion;

  const recetasPrivadas = recetas
    .filter((receta) => !receta.esPublica && receta.creadorId === me.id)
    .sort(sortDesc);

  const recetasPublicas = recetas
    .filter((receta) => receta.esPublica)
    .sort(sortDesc);

  return (
    <div className={styles.contenedorPrincipal}>
      <h1>
        Bienvenido {me.firstName} {me.lastName}
      </h1>

      <h2>Tus recetas privadas</h2>
      <div className={styles.table_main}>
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th className={styles.title}>Nombre</th>
              <th className={styles.extra}>Tiempo de preparación</th>
              <th className={styles.extra}>Detalle</th>
              <th className={styles.extra}>Modificar</th>
            </tr>
          </thead>
          <tbody>
            {recetasPrivadas.map((receta) => (
              <tr key={receta._id}>
                <td className={styles.title}>{receta.nombre}</td>
                <td className={styles.extra}>
                  {receta.tiempoPreparacion} mins
                </td>
                <td className={styles.extra}>
                  <Link to={`/recetas/${receta._id}`}>Ver</Link>
                </td>
                <td className={styles.extra}>
                  {receta.creadorId === me.id && (
                    <Link to={`/recetas/editar/${receta._id}`}>Editar</Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Recetas públicas</h2>
      <div className={styles.table_main}>
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th className={styles.title}>Nombre</th>
              <th className={styles.extra}>Tiempo de preparación</th>
              <th className={styles.extra}>Detalle</th>
              <th className={styles.extra}>Modificar</th>
            </tr>
          </thead>
          <tbody>
            {recetasPublicas.map((receta) => (
              <tr key={receta._id}>
                <td className={styles.title}>{receta.nombre}</td>
                <td className={styles.extra}>
                  {receta.tiempoPreparacion} mins
                </td>
                <td className={styles.extra}>
                  <Link to={`/recetas/${receta._id}`}>Ver</Link>
                </td>
                <td className={styles.extra}>
                  {receta.creadorId === me.id && (
                    <Link to={`/recetas/editar/${receta._id}`}>Editar</Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecetasApi;
