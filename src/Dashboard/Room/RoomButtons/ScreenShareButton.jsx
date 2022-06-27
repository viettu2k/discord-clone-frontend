import React, { useState } from 'react';
import { IconButton } from '@mui/material/IconButton';
import ScreenShareIcon from '@material-ui/icons/ ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';

const ShareScreenButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: 'white' }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ShareScreenButton;
