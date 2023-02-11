import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import MejorPuntuada from "./MejorPuntuada"
import UltimosLanzamientos from "./UltimosLanzamientos"

const App = () => {
  return (
      <BrowserRouter>
      <nav>
        <a href="/mejor">Mejor Puntuada con href</a> {/* Me vuelve a renderizar toda la pagina */}
        <Link to="/">Home</Link> {/*solo funcionan si son a la misma pagina */}
        <Link to="/mejor">Mejor Puntuada</Link>
        <button><Link to="/ultimos">Ultimos Lanzamientos</Link></button>
      </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mejor" element={<MejorPuntuada />} />
          <Route path="/ultimos/:id" element={<UltimosLanzamientos />}/>
        </Routes>

        <footer>
          <a href="https://www.linkedin.com">ir a Linkedin</a>
        </footer>

      </BrowserRouter>
  )
}

export default App
