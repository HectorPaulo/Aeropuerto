import  { useState } from 'react';
import TripulacionService from '../services/TripulacionService';
import './agregarCopiloto.css';
export const AgregarCopiloto= () => {
    const [copiloto, setCopiloto] = useState({
        antiguedad: "",
        turno: "",
        horasVuelo: "",
        nombre: "",
        apellido: "",
        fechaNac: "",
        genero: "",
        rango: "",
        tiempoRestantePiloto:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCopiloto((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      for (let key in copiloto) {
          if (copiloto[key] === "" || copiloto[key] === null) {
              alert("Por favor, completa todos los campos.");
              return;
          }
      }

      try {
          const response = await TripulacionService.createCopiloto(copiloto);
          console.log("Copiloto creado con éxito:", response);
          alert("Copiloto creado exitosamente");
      } catch (error) {
          console.error("Error al crear copiloto:", error);
          alert("Hubo un error al crear el copiloto");
      }
  };

    return (
      <div className="container">
          <header className="header">
          </header>
          
          <form className="form" onSubmit={handleSubmit}>
              {/* Sección Datos Personales */}
              <h1>Agregar Copiloto</h1>

              <h2>Datos Personales</h2>
              <div className="form-group">
                  <div>
                      <label>Nombre:</label>
                      <input
                          type="text"
                          name="nombre"
                          value={copiloto.nombre}
                          onChange={handleChange}
                          onKeyPress={(e) => {
                              if (/\d/.test(e.key)) {
                                  e.preventDefault();
                              }
                          }}
                      />
                  </div>

                  <div>
                      <label>Apellido:</label>
                      <input
                          type="text"
                          name="apellido"
                          value={copiloto.apellido}
                          onChange={handleChange}
                          onKeyPress={(e) => {
                              if (/\d/.test(e.key)) {
                                  e.preventDefault();
                              }
                          }}
                      />
                  </div>

                  <div>
                      <label>Género:</label>
                      <select name="genero" value={copiloto.genero} onChange={handleChange}>
                          <option value="">Seleccione</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                      </select>
                  </div>

                  <div>
                      <label>Fecha de nacimiento:</label>
                      <input
                          type="date"
                          name="fechaNac"
                          value={copiloto.fechaNac}
                          onChange={handleChange}
                          min="1900-01-01"
                      />
                  </div>
              </div>

              {/* Sección Datos Laborales */}
              <h2>Datos Laborales</h2>
              <div className="form-group">
                  <div>
                      <label>Rango:</label>
                      <input
                          type="text"
                          name="rango"
                          value={copiloto.rango}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label>Antigüedad (años):</label>
                      <input
                          type="number"
                          name="antiguedad"
                          value={copiloto.antiguedad}
                          onChange={handleChange}
                          min="0"
                      />
                  </div>

                  <div>
                      <label>Horas de vuelo:</label>
                      <input
                          type="number"
                          name="horasVuelo"
                          value={copiloto.horasVuelo}
                          onChange={handleChange}
                          min="0"
                      />
                  </div>

                  <div>
                      <label>Turno:</label>
                      <select name="turno" value={copiloto.turno} onChange={handleChange}>
                          <option value="">Seleccione</option>
                          <option value="Masculino">Matutino</option>
                          <option value="Femenino">Vespertino</option>
                      </select>
                  </div>

                  <div>
                      <label>Tiempo Restante (años):</label>
                      <input
                          type="number"
                          name="tiempoRestantePiloto"
                          value={copiloto.tiempoRestantePiloto}
                          onChange={handleChange}
                          min="0"
                      />
                  </div>
              </div>

              <button type="submit" className="submit-button">Agregar Copiloto</button>
          </form>
      </div>
  );
};
