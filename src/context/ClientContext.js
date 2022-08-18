import { createContext, useState, useEffect } from "react";
import axios from "axios";


const ClientContext = createContext();

const ClientProvider = ({ children }) => {

    const [clients, setClients] = useState([])
    const [clientsOrder, setClientsOrder] = useState([])
    const [sorted, setSorted] = useState(false)
    const [optionOrder, setOptionOrder] = useState("")


    const getClients = async () => {
      const res = await axios.get(`https://restserver-lautaro-quevedo.herokuapp.com/api/clients`)
      setClients(res.data.clients)
  }

  useEffect(() => {
    getClients()
}, []);

const ordenar = () => {
  const data = clients.sort((a, b) => {
      if (a[optionOrder] > b[optionOrder]) {
          return 1;
      }
      if (a[optionOrder] < b[optionOrder]) {
          return -1;
      }
      return 0;
  })
  setClientsOrder(data)
  setSorted(true)
}



  const data = {
    clients, 
    setClients,
    clientsOrder, 
    setClientsOrder,
    sorted, 
    setSorted,
    ordenar,
    optionOrder, 
    setOptionOrder
  }

  return (
    <ClientContext.Provider value={data} >
      {children}
    </ClientContext.Provider>
  )
}
export { ClientProvider }
export default ClientContext