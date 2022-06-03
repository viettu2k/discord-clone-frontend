import { io } from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const { token: jwtToken } = userDetails;
    socket = io(process.env.REACT_APP_SOCKET_URL, {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {
        console.log('Connected to socket server');
        console.log(socket.id);
    });
};