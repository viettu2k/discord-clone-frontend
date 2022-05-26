import React from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendSideBar from './FriendSideBar/FriendSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

export default function Dashboard() {
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}
