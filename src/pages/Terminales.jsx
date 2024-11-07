import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Image } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/wall.jpg';
import Medio from '../assets/Medio-grande.png';
import './Terminales.css';

const Terminales = () => {
    const [aeropuertos, setAeropuertos] = useState([]);
    const [terminales, setTerminales] = useState([]);

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

    useEffect(() => {
        const fetchTerminales = async () => {
            try {
                const response = await axios.get('https://aeropuertolasalle-f1af9eaa4f6d.herokuapp.com/api/terminal/all');
                setTerminales(response.data);
            } catch (error) {
                console.error("Error al cargar las terminales:", error);
                alert("Hubo un error al cargar la lista de terminales.");
            }
        };

        fetchTerminales();
    }, []);

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
                    <Col md={12}>
                        <Card className="mt-4">
                            <Card.Body>
                                <Card.Title className="text-center mb-4 d-flex align-items-center justify-content-between">
                                    <strong className="me-auto">LISTA DE TERMINALES</strong>
                                    <Image src={Medio} alt="Chico" height={50} className="ms-auto" />
                                </Card.Title>
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr className="table-header">
                                            <th className="text-center text-uppercase">Capacidad</th>
                                            <th className="text-center text-uppercase">Aeropuerto</th>
                                            <th className="text-center text-uppercase">Disponibilidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {terminales.map((terminal, index) => (
                                            <tr key={index}>
                                                <td className="text-center text-uppercase">{terminal.capacidad}</td>
                                                <td className="text-center text-uppercase">
                                                    {aeropuertos.find(a => a.id === parseInt(terminal.claveAeropuerto))?.nombre || 'Desconocido'}
                                                </td>
                                                <td className="text-center text-uppercase">
                                                    {terminal.disponible ? 'Sí' : 'No'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Terminales;
