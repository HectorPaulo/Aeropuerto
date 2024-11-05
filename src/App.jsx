import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <>
      <div>
        <button onClick={() => handleNavigation('/agregar-piloto')}>Agregar Piloto</button>
        <button onClick={() => handleNavigation('/agregar-copiloto')}>Agregar Copiloto</button>
        <button onClick={() => handleNavigation('/agregar-sobrecargo')}>Agregar Sobrecargo</button>
      </div>
    </>
  )
}

export default App