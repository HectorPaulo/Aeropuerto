import  { useState } from "react";
import TripulacionService from "../services/TripulacionService";
import './agregarSobrecargo.css';

export const AgregarSobrecargo = () => {
    const [sobrecargo, setSobrecargo] = useState({
      antiguedad: "",
      turno: "",
      horasVuelo: "",
      nombre: "",
      apellido: "",
      fechaNac: "",
      genero: "",
      idiomas: "",
      certificados: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSobrecargo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      for (let key in sobrecargo) {
          if (sobrecargo[key] === "" || sobrecargo[key] === null) {
              alert("Por favor, completa todos los campos.");
              return;
          }
      }

      try {
          const response = await TripulacionService.createSobrecargo(sobrecargo);
          console.log("Sobrecargo creado con éxito:", response);
          alert("Sobrecargo creado exitosamente");
      } catch (error) {
          console.error("Error al crear Sobrecargo:", error);
          alert("Hubo un error al crear el Sobrecargo");
      }
  };
  return (
    <div className="container">
        <header className="header">
        </header>
        
        <form className="form" onSubmit={handleSubmit}>
            {/* Sección Datos Personales */}
            <h1>Agregar Sobrecargo</h1>

            <h2>Datos Personales</h2>
            <div className="form-group">
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={sobrecargo.nombre}
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
                        value={sobrecargo.apellido}
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
                    <select name="genero" value={sobrecargo.genero} onChange={handleChange}>
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
                        value={sobrecargo.fechaNac}
                        onChange={handleChange}
                        min="1900-01-01"
                    />
                </div>
            </div>

            {/* Sección Datos Laborales */}
            <h2>Datos Laborales</h2>
            <div className="form-group">
                <div>
                <label>Idiomas:</label>
                <select
                  name="idiomas"
                  multiple
                  value={sobrecargo.idiomas}
                  onChange={(e) => {
                    const options = e.target.options;
                    const values = [];
                    for (let i = 0; i < options.length; i++) {
                      if (options[i].selected) {
                        values.push(options[i].value);
                      }
                    }
                    setSobrecargo({
                      ...sobrecargo,
                      idiomas: values,
                    });
                  }}
                >
                <option value="Ingles">Inglés</option>
                <option value="Frances">Francés</option>
                <option value="Español">Español</option>
                <option value="Chino">Chino</option>
                <option value="Japones">Japones</option>
                <option value="Alemán">Alemán</option>
              </select>
                </div>
                <div>
                <label>Certificados:</label>
                  <select
                    name="certificados"
                    multiple
                    value={sobrecargo.certificados}
                    onChange={(e) => {
                      const options = e.target.options;
                      const values = [];
                      for (let i = 0; i < options.length; i++) {
                        if (options[i].selected) {
                          values.push(options[i].value);
                        }
                      }
                      setSobrecargo({
                        ...sobrecargo,
                        certificados: values,
                      });
                    }}
                  >
                    <option value="Paramédico">Paramédico</option>
                    <option value="Ayuda Especial">AyudaEspecial</option>
                    <option value="Veterinaria">Veterinaria</option>
                    <option value="Personas Mayores">Personas Mayores</option>
                  </select>
                </div>
                <div>
                    <label>Antigüedad (años):</label>
                    <input
                        type="number"
                        name="antiguedad"
                        value={sobrecargo.antiguedad}
                        onChange={handleChange}
                        min="0"
                    />
                </div>

                <div>
                    <label>Horas de vuelo:</label>
                    <input
                        type="number"
                        name="horasVuelo"
                        value={sobrecargo.horasVuelo}
                        onChange={handleChange}
                        min="0"
                    />
                </div>

                <div>
                    <label>Turno:</label>
                    <select name="turno" value={sobrecargo.turno} onChange={handleChange}>
                        <option value="">Seleccione</option>
                        <option value="Masculino">Matutino</option>
                        <option value="Femenino">Vespertino</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="submit-button">Agregar Sobrecargo</button>
        </form>
    </div>
);
};
