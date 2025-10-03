import "./App.css";

function App() {
  const impresion = () => {
    console.log("Tu propia funcion esta funcionando");
  };

  const manejarEnvio = () => alert("Formulario enviado");

  const manejarEnfoque = () => alert("Elemento enfocado");

  const contador = 0;
  const contar = () => {
    contador + 1;
    console.log(contador);
  };
  return (
    <>
      <h1>OnClick</h1>
      <button onClick={() => console.log("El boton esta funcionando")}>
        OnClick
      </button>
      <button onClick={() => alert("El boton alert esta funccionando")}>
        OnClickAlert
      </button>
      <hr />
      <div
        style={{ border: "2px solid black", height: "2rem" }}
        onMouseEnter={() => console.log("Adentro")}
        onMouseOut={() => console.log("afuera")}
      ></div>
      <hr></hr>
      {/*<h1>Onchange</h1>
      <label htmlFor="gender">Genero</label>
      <select name="gender" id="gender" onChange={()=>alert("Cambios el selector")}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>*/}
      <h1>Onchange</h1>
      <label htmlFor="gender">Genero</label>
      <select
        name="gender"
        id="gender"
        onChange={(e) => alert(`Seleccionaste: ${e.target.value}`)}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <hr></hr>
      <h1>Oninput</h1>
      <label htmlFor="nombre">nombre</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        onInput={(e) => console.log(e.target.value)}
      />

      <hr />
      <h1>Ejecucion propia</h1>
      <button onClick={impresion}>Ejecutar</button>
      <hr></hr>

      <h1>Ejemplo de como no funciona un contador</h1>
      <p>{contador}</p>
      <button onClick={() => contar}>Contar</button>
      <hr />
      <div>
        <form onSubmit={manejarEnvio}>
          <button type="submit">Enviar</button>
        </form>
        <input onFocus={manejarEnfoque} placeholder="Haz clic aquí..." />
      </div>
    </>
  );
}

export default App;
