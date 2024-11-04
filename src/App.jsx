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
        <button onClick={() => handleNavigation('/agregar-piloto')}>Listar Clientes</button>
      </div>
    </>
  )
}

export default App