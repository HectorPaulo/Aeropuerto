import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/wall.jpg';
import Medio from '../assets/Medio-grande.png'; // Ruta de la imagen chico.png
import '../pages/Terminales.css';

const AgregarTerminal = () => {
    const [formData, setFormData] = useState({
        capacidad: '',
        disponible: false
    });

    const [aeropuertos, setAeropuertos] = useState([]);

    useEffect(() => {
        const fetchAeropuertos = async () => {
            try {
                const response = await fetch('https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/aeropuerto/all');
                if (!response.ok) {
                    throw new Error('Error al obtener los aeropuertos');
                }
                const data = await response.json();
                setAeropuertos(data);
            } catch (error) {
                console.error("Error al cargar los aeropuertos:", error);
                alert("Hubo un error al cargar la lista de aeropuertos.");
            }
        };

        fetchAeropuertos();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'capacidad') {
            if (!/^\d*$/.test(value) || parseInt(value, 10) <= 0) {
                return;
            }
        }

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const terminalData = {
            capacidad: formData.capacidad,
            disponible: formData.disponible
        };

        try {
            const response = await axios.post('https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/terminal/create', terminalData);
            console.log("Terminal creada:", response.data);

            setFormData({
                capacidad: '',
                disponible: false
            });

            alert("Terminal creada exitosamente!");
        } catch (error) {
            console.error("Error al crear la terminal:", error.response || error);
            alert("Hubo un error al guardar la terminal. Revisa la consola para más detalles.");
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh'
            }}
        >
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Row className="justify-content-center w-100">
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center mb-4 d-flex align-items-center justify-content-between">
                                    <strong className="me-auto">FORMULARIO TERMINALES</strong>
                                    <Image src={Medio} alt="Logo" height={40} className="ms-auto" />
                                </Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formCapacidad">
                                        <Form.Label><strong>CAPACIDAD</strong></Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="capacidad"
                                            value={formData.capacidad}
                                            onChange={handleChange}
                                            min="1"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formDisponible" className="text-center">
                                        <Form.Label><strong>DISPONIBILIDAD</strong></Form.Label>
                                        <Form.Check
                                            type="checkbox"
                                            name="disponible"
                                            checked={formData.disponible}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="mt-3 w-100">
                                        Guardar
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AgregarTerminal;
