import React, { useContext, useState } from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from "axios";
import ClientContext from '../../context/ClientContext';
import './FormClient.css';

const FormClient = () => {

    const { clients, setClients } = useContext(ClientContext)

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        cuilcuit: '',
        cbu: '',
        claveFiscal: '',
        tipoDeContribuyente: '',
        redDePago: '',
        entidadBancaria: '',
        domicilioReal: '',
        domicilioLegal: '',
        sedeDeExplotacion: '',
        agencia: '',
        claveDeAcceso: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    console.log(formData)

    const postClient = async () => {
        const headers = {
            "Content-Type": "application/json",
            'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmU3MTcyNzZiZjhmM2VhNTA4NTUxOGMiLCJpYXQiOjE2NjA4NDM5MzEsImV4cCI6MTY2MDg4NzEzMX0.V60hc60JaH1hjTUPjo-WqkjmtgSUHyWaT16QXx66klo"
        }
        const resp = await axios.post('https://restserver-lautaro-quevedo.herokuapp.com/api/clients', formData, { headers })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Container fluid className='mt-4'>
                <h1>Alta de Cliente</h1>
                <Form className='p-5'>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control className='bg-input' name='nombre' type="text" placeholder="Nombre" onChange={handleChange} />
                        </Col>

                        <Col >
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control className='bg-input' name='apellido' type="text" placeholder="Apellido" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3" >
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control className='bg-input' name='email' type='email' placeholder="E-mail" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3" >
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control className='bg-input' name='telefono' type='tel' placeholder="Teléfono" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="mb-3" >
                            <Form.Label>CUIL/CUIT</Form.Label>
                            <Form.Control className='bg-input' name='cuilcuit' placeholder="Sin espacios ni guiones" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3" >
                            <Form.Label>CBU Personal</Form.Label>
                            <Form.Control className='bg-input' name='cbu' placeholder="CBU Personal" onChange={handleChange} />
                        </Col>

                        <Col className="mb-3">
                            <Form.Label>Clave Fiscal</Form.Label>
                            <Form.Control className='bg-input' name='claveFiscal' placeholder="Clave Fiscal" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3">
                            <Form.Label>Tipo de Contribuyente</Form.Label>
                            <Form.Select className='bg-input' name='tipoDeContribuyente' onChange={handleChange}>
                                <option>Régimen simplificado</option>
                                <option>Régimen general</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="mb-3">
                            <Form.Label>Red de pago</Form.Label>
                            <Form.Select className='bg-input' name='redDePago' onChange={handleChange}>
                                <option>Banelco</option>
                                <option>Red Link</option>
                            </Form.Select>
                        </Col>
                        <Col className="mb-3">
                            <Form.Label>Entidad bancaria</Form.Label>
                            <Form.Control className='bg-input' name='entidadBancaria' placeholder="Entidad bancaria" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3">
                            <Form.Label>Domicilio real</Form.Label>
                            <Form.Control className='bg-input' name='domicilioReal' placeholder="Como figura en el DNI" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3">
                            <Form.Label>Domicilio legal</Form.Label>
                            <Form.Control className='bg-input' name='domicilioLegal' placeholder="Domicilio legal" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="mb-3">
                            <Form.Label>Sede de explotación</Form.Label>
                            <Form.Control className='bg-input' name='sedeDeExplotacion' placeholder="Sede de Expotación" onChange={handleChange} />
                        </Col>
                        <Col className="mb-3">
                            <Form.Label>Agencia</Form.Label>
                            <Form.Select name='agencia' className='bg-input' onChange={handleChange}>
                                <option value="arba">Agencia de Recaudación Provincia de Buenos Aires</option>
                                <option value="agip">Administración Gubernamental de Ingresos Públicos - CABA</option>
                                <option value="arca">Agencia de Recaudación de Catamarca</option>
                                <option value="cordoba">Rentas Córdoba</option>
                                <option value="dgrc">Direción General de Rentas Corrientes</option>
                                <option value="atp">Administración Tributaria Provincial Chaco</option>
                                <option value="dgrch">Direción General de Rentas Chubut</option>
                                <option value="ater">Administradora Tributaria de Entre Ríos</option>
                                <option value="dgrf">Direción General de Rentas Formosa</option>
                                <option value="dgrj">Direción Provincial de Rentas Jujuy</option>
                                <option value="dgrp">Direción General de Rentas La Pampa</option>
                                <option value="dgrr">Direción General de Ingresos La Rioja</option>
                                <option value="atm">Administración Tributaria Mendoza</option>
                                <option value="atmi">Agencia Tributaria Misiones</option>
                                <option value="dgrn">Dirección Provincial de Rentas Neuquén</option>
                                <option value="artrn">Agencia de Recaudación Tributaria de la Provincia de Río Negro</option>
                                <option value="dgrs">Dirección General de Rentas de la Provincia de Salta</option>
                                <option value="dgrsj">Dirección General de Rentas de la Provincia de San Juan</option>
                                <option value="dgrsl">Dirección Provincial de Ingresos Públicos San Luis</option>
                                <option value="asip">Agencia Santacruceña de Ingresos Públicos</option>
                                <option value="apisf">Administración Provincial de Impuestos Santa Fe</option>
                                <option value="dgrse">Dirección General de Rentas Santiago del Estero</option>
                                <option value="arf">Agencia de Recaudación Fueguina</option>
                                <option value="dgrt">Dirección General de Rentas Tucumán</option>
                            </Form.Select>
                        </Col>
                        <Col className="mb-3">
                            <Form.Label>Clave de acceso</Form.Label>
                            <Form.Control name='claveDeAcceso' className='bg-input text-white' placeholder="Clave de acceso" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Button onClick={() => { postClient() }} variant="primary">
                        Alta
                    </Button>
                    <Link to='/clients'>Ir a clientes</Link>
                </Form>
            </Container>
        </div>
    )
}

export default FormClient

