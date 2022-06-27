import io from 'socket.io-client';
import {
    setPendingFriendsInvitations,
    setFriends,
    setOnlineUsers,
} from '../store/actions/friendsActions';
import store from '../store/store';
import { updateDirectChatHistoryIfActive } from '../shared/utils/chat';
import * as roomHandler from './roomHandler';

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

    socket.on('direct-chat-history', (data) => {
        updateDirectChatHistoryIfActive(data);
    });

    socket.on('room-create', (data) => {
        roomHandler.newRoomCreated(data);
    });
};

export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
    socket.emit('direct-chat-history', data);
};

export const createNewRoom = (data) => {
    socket.emit('room-create', data);
};