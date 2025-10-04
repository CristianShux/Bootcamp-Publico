
import './App.css'
import Tarjeta from './components/Tarjeta'

function App() {
  let productos=[
    {nombre:"Laptop", precio:1500, descripcion:"Una potente laptop para trabajar y jugar", stock:10},
    {nombre:"Smartphone", precio:800, descripcion:"Un smartphone de ultima generacion con una de las mejores cámaras", stock:0},
    {nombre:"Auriculares", precio:200, descripcion:"Auriculares con cancelacion de ruido. No escucharas nada a tu alrededor", stock:5},
    {nombre:"Monitor", precio:300, descripcion:"Monitor 4K para una experiencia visual increible",stock:7}
  ]

  return (
    <>
    <header>
      <h1>TechStore - Tu Destino para la Mejor Tecnología</h1>
    </header>
    <main>
      {productos.map((producto)=>{
        return <Tarjeta nombreProducto={producto.nombre} precio={producto.precio} 
        descripcion={producto.descripcion}
        stock={producto.stock}
        ></Tarjeta>
      })}
    </main>
     
    </>
  )
}

export default App
