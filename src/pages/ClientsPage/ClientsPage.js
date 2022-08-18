import React, { useContext, useEffect } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Container,Table,Button } from 'react-bootstrap'
import ClientContext from '../../context/ClientContext';
import axios from "axios";


const ClientsPage = () => {

    const navigate = useNavigate();

    const { clients, setClients } = useContext(ClientContext)

    const getClients = async () => {
        const res = await axios.get(`https://restserver-lautaro-quevedo.herokuapp.com/api/clients`)
        setClients(res.data.clients)
      }

    useEffect(() => {
        getClients()
        console.log(clients)
    }, []);


    return (
        <Container fluid>
            <h1 className='mb-3'>Lista de Clientes</h1>
            <Container fluid>
                <Button onClick={()=>navigate('/newclient', {clients})}><i class="fa-solid fa-plus"></i></Button>
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
                    {clients.map((client, index)=>{
                        return(
                            <tr>
                                <td>{index}</td>
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