import { createContext, useState, useEffect } from "react";


const ClientContext = createContext();

const ClientProvider = ({ children }) => {

    const [clients, setClients] = useState([])

    

console.log(clients)
  const data = {
    clients, 
    setClients
  }

  return (
    <ClientContext.Provider value={data} >
      {children}
    </ClientContext.Provider>
  )
}
export { ClientProvider }
export default ClientContext