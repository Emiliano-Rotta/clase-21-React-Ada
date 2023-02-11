import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import MejorPuntuada from "./components/MejorPuntuada"
import UltimosLanzamientos from "./components/UltimosLanzamientos"

const App = () => {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mejor" element={<MejorPuntuada />} />
          <Route path="/ultimos" element={<UltimosLanzamientos />}/>
        </Routes>

      </BrowserRouter>
  )
}

export default App