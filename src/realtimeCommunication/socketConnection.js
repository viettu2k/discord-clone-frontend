import io from 'socket.io-client';
import {
    setPendingFriendsInvitations,
    setFriends,
    setOnlineUsers,
} from '../store/actions/friendsActions';
import store from '../store/store';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;

    socket = io(process.env.REACT_APP_SOCKET_URL, {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {
        console.log(socket.id);
    });

    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

    socket.on('friends-list', (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    });

    socket.on('online-users', (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });
};