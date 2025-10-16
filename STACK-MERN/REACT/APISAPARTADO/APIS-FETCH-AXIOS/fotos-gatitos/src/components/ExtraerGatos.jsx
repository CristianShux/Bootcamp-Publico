import axios from "axios";
const ExtraerGatos = ({ setGatos }) => {
  /*const getGatos= async()=>{
        const URL="https://api.thecatapi.com/v1/images/search?limit=10";
        const response= await fetch(URL);
        const data= await response.json();
        console.log(data);
        setGatos(data);

    }*/
  /*const getGatos = () => {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
    axios(URL)
    .then((response) => {
      setGatos(response.data);
    });
  };*/
  const getGatos = () => {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
    axios(URL)
      .then((response) => {
        setGatos(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Hay un error");
      })
      .finally(() => console.log("terminado"));
  };

  return (
    <div>
      <h1>Dar click al boton para obtener 10 gatos</h1>
      <button onClick={getGatos}> Cargar</button>
    </div>
  );
};
export default ExtraerGatos;
