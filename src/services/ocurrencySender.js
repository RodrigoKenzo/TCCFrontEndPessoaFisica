import { io } from "socket.io-client";

const socket = io('http://127.0.0.1/3000', {
    cors: {
        origin: ['http://localhost:3000','http://127.0.0.1:3000']
    }
})

socket.on('conect', () => {
    console.log('connected to socket server.')
})

const newOcurrency = (newOcurrencyInfo) => {
    socket.emit('ocurrency', {
    
    })
}