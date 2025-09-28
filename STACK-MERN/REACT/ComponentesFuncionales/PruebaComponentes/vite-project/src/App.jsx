import "./App.css";
import Mensaje from "./components/Mensaje";
import Tarjeta from "./components/Tarjeta";

function App() {
  const nombre = "Juan Pérez";
  const edad = 30;
  const usuario = {
    nombreUsuario: "juanperez",
    correo: "juan@ejemplo.com",
  };
  const pasatiempos = ["Leer", "Jugar videojuegos", "Senderismo"];

  //Podemos desestructurar para trabajar mejor
  const { nombreUsuario, correo } = usuario;

  return (
    <>
      <Mensaje/>
      <Tarjeta/>
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{nombreUsuario}</p>
      <p>{correo}</p>
      <ul>
        {pasatiempos.map((elemento) => {
          return <li>{elemento}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
