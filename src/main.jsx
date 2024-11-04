import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AgregarCopiloto } from './pages/agregarCopiloto.jsx'
import { AgregarPiloto } from './pages/agregarPiloto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agregar-copiloto" element={AgregarCopiloto} />
        <Route path="/agregar-piloto" element={AgregarPiloto} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)