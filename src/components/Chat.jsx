import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../context/ChatProvider'
import Agregar from './Agregar'


const Chat = () => {

    const {mensajes, usuario} = useContext(ChatContext)
    const refZonaChat = useRef(null)

    useEffect(() => {
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])

    return (
        <div
            className="mt-3 px-2"
            style={{height: '75vh', overflow: 'scroll'}}
            ref={refZonaChat}
        >

            {
                mensajes.map((item, index) => (
                    usuario.uid === item.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <div className="badge badge-pill badge-primary">
                                {item.texto}
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                            <div className="badge badge-pill badge-secondary">
                                {item.texto}
                            </div>
                        </div>
                    )
                ))
            }

            <Agregar/>
        </div>
    )
}

export default Chat
