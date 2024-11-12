import { useState } from 'react'
import viteLogo from '/vite.svg'
import RegistroVehiculoAereo from './components/RegistrarVehiculoAereo'
import ListarVehiculosAereos from './components/ListarVehiculosAereos'
 // Ajusta la ruta si es necesario

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RegistroVehiculoAereo />
      </div>
      <div>
        <ListarVehiculosAereos/>
      </div>
    </>
  )
}

export default App
