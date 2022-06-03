import { io } from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = () => {
    socket = io(process.env.REACT_APP_SOCKET_URL);

    socket.on('connect', () => {
        console.log('Connected to socket server');
        console.log(socket.id);
    });
};