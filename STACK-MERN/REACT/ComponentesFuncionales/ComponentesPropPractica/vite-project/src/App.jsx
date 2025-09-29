
import './App.css'
import Tarjeta from './components/Tarjeta'

function App() {
  let productos=[
    {nombre:"Laptop", precio:1500, descripcion:"Una potente laptop para trabajar y jugar",enStock:true},
    {nombre:"Smartphone", precio:800, descripcion:"Un smartphone de ultima generacion",enStock:false},
    {nombre:"Auriculares", precio:200, descripcion:"Auriculares con cancelacion de ruido",enStock:true},
    {nombre:"Monitor", precio:300, descripcion:"Monitor 4K para una experiencia visual increible",enStock:true}
  ]

  return (
    <>
    <main>
      {productos.map((producto)=>{
        return <Tarjeta nombreProducto={producto.nombre} precio={producto.precio} 
        descripcion={producto.descripcion}
        enStock={producto.enStock}
        ></Tarjeta>
      })}

    </main>
     
    </>
  )
}

export default App
