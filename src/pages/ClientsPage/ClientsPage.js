import React, { useContext, useEffect, useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Col, Form, Row, Button, Table } from 'react-bootstrap'
import ClientContext from '../../context/ClientContext';


const ClientsPage = () => {

    const navigate = useNavigate();

    const { clients, setClients, clientsOrder, setClientsOrder,sorted, setSorted,ordenar,optionOrder, setOptionOrder } = useContext(ClientContext)

    const idx = 1; 
    
    useEffect(() => {
        if (sorted === true) {
        setClients(clientsOrder)
          setSorted(false)
        }
      }, [sorted]);

    


    const handleChange = (e) => {
        e.preventDefault();
        const opt = e.target.value
        setOptionOrder(opt)
    }

    return (
        <Container fluid>
            <h1 className='mb-3'>Lista de Clientes</h1>
            <Container fluid>
                <Button onClick={() => navigate('/newclient', { clients })}><i class="fa-solid fa-plus"></i></Button>
                <Col className="mb-3">
                    <Form.Label>Tipo de Contribuyente</Form.Label>
                    <Form.Select className='bg-input' name='tipoDeContribuyente' onChange={handleChange}>
                        <option value="nombre">Nombre</option>
                        <option value="apellido">Apellido</option>
                        <option value="cuilcuit">CUIL/CUIT</option>
                        <option value="tipoDeContribuyente">Tipo de Contribuyente</option>
                        <option value="domicilioReal">Domicilio Real</option>
                    </Form.Select>
                </Col>
                <Button onClick={() => ordenar()}>Buscar</Button>
            </Container>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>CUIT</th>
                        <th>Dirección</th>
                        <th>Tipo de Contribuyente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, idx) => {
                        idx=idx+1
                        return (
                            <tr key={client.uid}>
                                <td>{idx}</td>
                                <td>{client.nombre}</td>
                                <td>{client.apellido}</td>
                                <td>{client.cuilcuit}</td>
                                <td>{client.domicilioReal}</td>
                                <td>{client.tipoDeContribuyente}</td>
                                <td><Button>Ver Perfil</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default ClientsPage