import { useState } from 'react'
import viteLogo from '/vite.svg'
import RegistroVuelos from './components/registroVuelos';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        PRUEBA YO
      </div>
      <div>
      <RegistroVuelos />
      </div>
    </>
  )
}

export default App
