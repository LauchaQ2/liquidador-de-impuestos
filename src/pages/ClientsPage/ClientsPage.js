import React from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Container,Table,Button } from 'react-bootstrap'

const ClientsPage = () => {

    const navigate = useNavigate();

    const clients = [
        { "name": "Juan", "cuit": 546789231, "adress": "Av. Rivadavia 5432", "type": "Régimen General" },
        { "name": "Juan", "cuit": 546789231, "adress": "Av. Rivadavia 5432", "type": "Régimen General" },
        { "name": "Juan", "cuit": 546789231, "adress": "Av. Rivadavia 5432", "type": "Régimen General" },
        { "name": "Juan", "cuit": 546789231, "adress": "Av. Rivadavia 5432", "type": "Régimen General" },
        { "name": "Juan", "cuit": 546789231, "adress": "Av. Rivadavia 5432", "type": "Régimen General" }]

    return (
        <Container fluid>
            <h1 className='mb-3'>Lista de Clientes</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>CUIT</th>
                        <th>Dirección</th>
                        <th>Tipo de Contribuyente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index)=>{
                        return(
                            <tr>
                                <td>{index}</td>
                                <td>{client.name}</td>
                                <td>{client.cuit}</td>
                                <td>{client.adress}</td>
                                <td>{client.type}</td>
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