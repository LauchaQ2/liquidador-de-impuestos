import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div>
        <h1 className='text-center mb-3'>Liquidación de impuestos</h1>
        <Link to="/clients">
        <Button variant='primary'>Ver Clientes</Button>
        </Link>
        </div>
  )
}

export default HomePage