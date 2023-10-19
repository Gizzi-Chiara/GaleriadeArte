import React, { useState } from "react";
import ChatBot from 'react-simple-chatbot'
import LinkPintura from "./LinksChat/LinkPintura";
import LinkLugares from "./LinksChat/LinkLugares";
import LinkM from "./LinksChat/LinkM";
import "./Modal/Modal.css";

const Chat = () => {
    return (
        <div>
            <ChatBot
                steps={[
                    {
                        id: 'bienvenido',
                        message: '¡Bienvenido a nuestra Galería de Arte!',
                        trigger: '1'
                    },
                    {
                        id: '1',
                        message: '¿Cuál es tu nombre?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hola {previousValue}, ¡gusto en conocerte!',
                        trigger: '4'
                    },
                    {
                        id: "4",
                        message: "¿Te puedo ayudar en algo?",
                        trigger: "5"
                    },
                    {
                        id: "5",
                        options: [
                            { value: "y", label: "Sí", trigger: "6A" },
                            { value: "n", label: "No", trigger: "6B" },
                        ]
                    },
                    {
                        id: "6A",
                        message: "¡Excelente! ¿Buscas algo en particular?",
                        trigger: "seleccion"
                    },
                    {
                        id: "6B",
                        message: "Lamento no poder ayudarte. Espero que vuelvas pronto.",
                        end: true
                    },
                    {
                        id: "seleccion",
                        options: [
                            { value: "pinturas", label: "Mis obras", trigger: "7A" },
                            { value: "mapa", label: "Museos", trigger: "7B" },
                            { value: "monumentos", label: "Actividades", trigger: "7C" },
                        ]
                    },
                    {
                        id: '7A',
                        component: <LinkPintura />,
                        trigger: "8"
                    },
                    {
                        id: '7B',
                        component: <LinkLugares />,
                        trigger: "8"
                    },
                    {
                        id: '7C',
                        component: <LinkM />,
                        trigger: "8"
                    },
                    {
                        id: "8",
                        message: "¿Te puedo ayudar en algo más?",
                        trigger: "9"
                    },
                    {
                        id: "9",
                        options: [
                            { value: "y", label: "Sí", trigger: "9A" },
                            { value: "n", label: "No", trigger: "9B" },
                        ]
                    },
                    {
                        id: "9A",
                        message: "Claro, ¿qué más te gustaría ver?",
                        trigger: "seleccion"
                    },
                    {
                        id: "9B",
                        message: "Fue un gusto ayudarte, ¡vuelve pronto!",
                        end: true
                    },
                ]}
            />
        </div>
    )
}
export default Chat;