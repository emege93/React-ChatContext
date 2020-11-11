import React, { useContext } from 'react'
import Navbar from './components/Navbar';
import { ChatContext } from "./context/ChatProvider";



const App = () => {

    const {usuario} = useContext(ChatContext)

    return usuario !== null ? (
        <div>
            <Navbar/>
            chat
        </div>
    ) : (
        <div>
            Cargando...
        </div>
    )
}

export default App
