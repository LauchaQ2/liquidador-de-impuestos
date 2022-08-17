import React from 'react'
import {useNavigate} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className='d-flex p-2 bg-black'>
      <Button onClick={() => navigate(-1)}><i class="fa-solid fa-left-long"></i></Button>
    </Container>
  )
}

export default NavBar