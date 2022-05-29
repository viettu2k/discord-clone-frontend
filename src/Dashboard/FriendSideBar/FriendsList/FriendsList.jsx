import React from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIEND = [
  { id: 1, username: 'Mark', isOnline: true },
  { id: 2, username: 'Dark', isOnline: false },
  { id: 3, username: 'Bruh', isOnline: true },
  { id: 4, username: 'Lmao', isOnline: false },
];

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIEND.map((friend) => (
        <FriendsListItem
          key={friend.id}
          username={friend.username}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
