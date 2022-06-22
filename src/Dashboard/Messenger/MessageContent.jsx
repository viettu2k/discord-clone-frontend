import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';

const Wrapper = styled('div')({
  flexGrow: 1,
});

const MessageContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    // TODO
    // fetching chat history from specific user id
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessageContent;
