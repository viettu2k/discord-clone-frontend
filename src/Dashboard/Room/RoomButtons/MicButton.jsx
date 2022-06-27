import React, { useState } from 'react';
import { IconButton } from '@mui/material/IconButton';
import MicIcon from '@material-ui/icons/MicIcon';
import MicOffIcon from '@material-ui/icons/MicOffIcon';

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    setMicEnabled(!micEnabled);
  };

  return (
    <IconButton onClick={handleToggleMic} style={{ color: 'white' }}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
