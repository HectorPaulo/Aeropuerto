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

    const idiomasOptions = [
      { value: 'Ingles', label: 'Inglés' },
      { value: 'Frances', label: 'Francés' },
      { value: 'Español', label: 'Español' },
      { value: 'Chino', label: 'Chino' },
      { value: 'Japones', label: 'Japonés' },
      { value: 'Aleman', label: 'Alemán' },
    ];

    const certificadosOptions = [
      { value: 'Paramedico', label: 'Paramédico' },
      { value: 'AyudaEspecial', label: 'Ayuda Especial' },
      { value: 'Veterinaria', label: 'Veterinaria' },
      { value: 'PersonasMayores', label: 'Personas Mayores' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSobrecargo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleIdiomasChange = (e) => {
      const { value, checked } = e.target;
      setSobrecargo((prevState) => {
        const idiomas = checked
          ? [...prevState.idiomas, value]
          : prevState.idiomas.filter((idioma) => idioma !== value);
        return { ...prevState, idiomas };
      });
    };

    const handleCertificadosChange = (e) => {
      const { value, checked } = e.target;
      setSobrecargo((prevState) => {
        const certificados = checked
          ? [...prevState.certificados, value]
          : prevState.certificados.filter((cert) => cert !== value);
        return { ...prevState, certificados };
      });
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
                {idiomasOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="checkbox"
                      name="idiomas"
                      value={option.value}
                      checked={sobrecargo.idiomas.includes(option.value)}
                      onChange={handleIdiomasChange}
                    />
                    {option.label}
                  </label>
                ))}
                </div>
                <div>
                <label>Certificados:</label>
                {certificadosOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="checkbox"
                      name="certificados"
                      value={option.value}
                      checked={sobrecargo.certificados.includes(option.value)}
                      onChange={handleCertificadosChange}
                    />
                    {option.label}
                  </label>
                ))}
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
