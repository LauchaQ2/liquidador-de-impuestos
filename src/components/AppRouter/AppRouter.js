import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ClientProvider } from '../../context/ClientContext'
import ClientsPage from '../../pages/ClientsPage/ClientsPage'
import HomePage from '../../pages/HomePage/HomePage'
import FormClient from '../FormClient/FormClient'
import NavBar from '../NavBar/NavBar'

const AppRouter = () => {
  return (
    <div>
    <ClientProvider>
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path='/newclient' element={<FormClient/>}/>
            <Route path='/clients' element={<ClientsPage/>}/>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
    </ClientProvider>
    </div>
  )
}

export default AppRouter