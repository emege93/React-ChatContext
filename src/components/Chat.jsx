import React from 'react'
import Agregar from './Agregar'

const Chat = () => {
    return (
        <div className="mt-3 px-2">
            <div className="d-flex justify-content-end mb-2">
                <div className="badge badge-pill badge-primary">
                    Mensaje del usuario activo
                </div>
            </div>
            <div className="d-flex justify-content-start mb-2">
                <div className="badge badge-pill badge-secondary">
                    Mensaje del usuario externo
                </div>
            </div>

            <Agregar/>
        </div>
    )
}

export default Chat
