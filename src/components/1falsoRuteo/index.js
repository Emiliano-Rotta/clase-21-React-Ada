import { useState } from "react"
import Home from "./components/Home"
import MejorPuntuada from "./components/MejorPuntuada"
import UltimosLanzamientos from "./components/UltimosLanzamientos"

const App = () => {
  const [paginaAMostrar, setPaginaAMostrar] = useState("home")

  const handleClick = (pagina) => {
    setPaginaAMostrar(pagina)
  }

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleClick("home")}>Home</li> 
           {/* handleClickHome  no le puedo pasar onClick={handleClick(home)}  uiero que se ejecute la funcion ahora mismo (estoy ejecutando la funcion ahi mismo)VAMOS A USAR CALLBACK (es una función que se pasa como parametro) //////// no esta siendo ejecutada sino una que llama a otra funcion esta funcion () llama a (“home”) es una funcion que retorna una funcion ejecutada. */}

          <li onClick={() => handleClick("mejor")}>Mejor Puntuada</li>
          <li onClick={() => handleClick("ultimos")}>Ultimos Lanzamientos</li>
        </ul>
      </nav>

    {paginaAMostrar === "home" &&  <Home />}
    {paginaAMostrar === "mejor" &&  <MejorPuntuada />}  
    {paginaAMostrar === "ultimos" &&  <UltimosLanzamientos />}  
      
    </div>
  )
}

export default App


// antes era todo con href pero hay rutas que no quiero compartir
// SPA simple page application
// aplicacion de pagina unica
// antes tenias un sin numero de paginas
// ahora tenes un solo html una sola pagina
// las rutas simulasn ser 2 paginas pero son una sola
