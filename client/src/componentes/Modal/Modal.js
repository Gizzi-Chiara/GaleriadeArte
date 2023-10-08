import React, {useState} from "react";
import "./Modal.css";
import Chat from "../Chat";
import chat from "../Chat/chat-bubble.png";
import close from "../Chat/delete-button.png";



const Modal = () => {
    const [mostrar, setMostrar] = useState(false);

    const cerrarModal = e => {
        setMostrar(false);
    }

    const abrirModal = e => {
        setMostrar(true);
    }
    

    return (
        <div>
            <div hidden={!mostrar}>
                <div className="modal-background">
                    <div className="modal-card">
                        <img src={close} className="button-c" onClick={cerrarModal}/>
                        <Chat/>
                    </div>
                </div>
            </div>
            <img src={chat} className="button" onClick={abrirModal}/>
            
        </div>
    );
}

export default Modal;