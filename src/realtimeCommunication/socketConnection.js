import { io } from 'socket.io-client';
import { sendPendingFriendsInvitations } from '../store/actions/friendsActions';

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

    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;
        console.log('friends invitations event came', pendingInvitations);
        console.log(pendingInvitations);

        store.dispatch(sendPendingFriendsInvitations());
    });
};