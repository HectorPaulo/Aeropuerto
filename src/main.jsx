import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Terminales from '../src/pages/Terminales'
import AgregarTerminal from '../src/pages/AgregarTerminal'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listar-terminales" element={<Terminales />} />
        <Route path="/agregar-terminales" element={<AgregarTerminal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)