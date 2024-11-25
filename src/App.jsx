import { useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './assets/wall.jpg'; // Importa la imagen

function App() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="button-container">
          <button className="btn" onClick={() => handleNavigation('/hora-salida')}>
            <strong>MODIFICAR HORA</strong>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
