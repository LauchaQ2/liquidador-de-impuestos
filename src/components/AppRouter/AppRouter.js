import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ClientsPage from '../../pages/ClientsPage/ClientsPage'
import HomePage from '../../pages/HomePage/HomePage'
import NavBar from '../NavBar/NavBar'

const AppRouter = () => {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path='/clients' element={<ClientsPage/>}/>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouter