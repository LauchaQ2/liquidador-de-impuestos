import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import ClientContext from '../../context/ClientContext';
import './FormClient.css';

const FormClient = () => {

    const { clients, setClients, getClients } = useContext(ClientContext)

    const [inputSede, setInputSede] = useState([
        {id: uuidv4(),
        sede: ''}
    ])

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
        agencia: '',
        claveDeAcceso: '',
        sedeDeExplotacion: ''
    })

    useEffect(() => {
        formData.sedeDeExplotacion = inputSede
    }, [inputSede]);


    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleChange2 = (id,e) => {
        e.preventDefault();
        const { name, value } = e.target
        // setFormData({ ...prevstate, sedeDeExplotacion: {...sedeDeExplotacion, [name]: value }})
        // setFormData(prevState => ({
        //     ...prevState,
        //     sedeDeExplotacion: {
        //         id: id,
        //         [name]: value
        //     }
        // }))
        const newInputFields = inputSede.map(i => {
            if(id === i.id) {
              i[e.target.name] = e.target.value
            }
            return i;
          })
          setInputSede(newInputFields);
    }
    console.log(formData)
    console.log(inputSede)

    const postClient = async () => {
        const headers = {
            "Content-Type": "application/json",
            'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmU3MTcyNzZiZjhmM2VhNTA4NTUxOGMiLCJpYXQiOjE2NjEyMDgzODgsImV4cCI6MTY2MTQ2NzU4OH0.FGdjanSpTIVMz9H-AlKcTBaorJC7JXKHtchTN158ARI"
        }
        const resp = await axios.post('https://restserver-lautaro-quevedo.herokuapp.com/api/clients', formData, { headers })
            .then(res => {
                console.log(res)
                getClients()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const Add =()=>{
        setInputSede([...inputSede, {id: uuidv4() , sede: ''}])
        console.log(inputSede)
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
                            <Form.Label>Tel??fono</Form.Label>
                            <Form.Control className='bg-input' name='telefono' type='tel' placeholder="Tel??fono" onChange={handleChange} />
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
                                <option>R??gimen simplificado</option>
                                <option>R??gimen general</option>
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
                        {inputSede.map((input, index) =>{
                            return(
                            <Col key={index} id='sedeExp' className="mb-3">
                            <Form.Label>Sede de explotaci??n</Form.Label>
                            <Form.Control className='bg-input' name="sede" placeholder="Sede de Expotaci??n" onChange={e => handleChange2(input.id,e)} />
                            <Button onClick={()=>{Add(index)}}>+</Button>
                        </Col>)
                        })}
                        <Col className="mb-3">
                            <Form.Label>Agencia</Form.Label>
                            <Form.Select name='agencia' className='bg-input' onChange={handleChange}>
                                <option value="arba">Agencia de Recaudaci??n Provincia de Buenos Aires</option>
                                <option value="agip">Administraci??n Gubernamental de Ingresos P??blicos - CABA</option>
                                <option value="arca">Agencia de Recaudaci??n de Catamarca</option>
                                <option value="cordoba">Rentas C??rdoba</option>
                                <option value="dgrc">Direci??n General de Rentas Corrientes</option>
                                <option value="atp">Administraci??n Tributaria Provincial Chaco</option>
                                <option value="dgrch">Direci??n General de Rentas Chubut</option>
                                <option value="ater">Administradora Tributaria de Entre R??os</option>
                                <option value="dgrf">Direci??n General de Rentas Formosa</option>
                                <option value="dgrj">Direci??n Provincial de Rentas Jujuy</option>
                                <option value="dgrp">Direci??n General de Rentas La Pampa</option>
                                <option value="dgrr">Direci??n General de Ingresos La Rioja</option>
                                <option value="atm">Administraci??n Tributaria Mendoza</option>
                                <option value="atmi">Agencia Tributaria Misiones</option>
                                <option value="dgrn">Direcci??n Provincial de Rentas Neuqu??n</option>
                                <option value="artrn">Agencia de Recaudaci??n Tributaria de la Provincia de R??o Negro</option>
                                <option value="dgrs">Direcci??n General de Rentas de la Provincia de Salta</option>
                                <option value="dgrsj">Direcci??n General de Rentas de la Provincia de San Juan</option>
                                <option value="dgrsl">Direcci??n Provincial de Ingresos P??blicos San Luis</option>
                                <option value="asip">Agencia Santacruce??a de Ingresos P??blicos</option>
                                <option value="apisf">Administraci??n Provincial de Impuestos Santa Fe</option>
                                <option value="dgrse">Direcci??n General de Rentas Santiago del Estero</option>
                                <option value="arf">Agencia de Recaudaci??n Fueguina</option>
                                <option value="dgrt">Direcci??n General de Rentas Tucum??n</option>
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

