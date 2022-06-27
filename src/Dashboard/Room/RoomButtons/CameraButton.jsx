import React, { useState } from 'react';
import { IconButton } from '@mui/material/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };

  return (
    <IconButton onClick={handleToggleCamera} style={{ color: 'white' }}>
      {cameraEnabled ? <VideocamOffIcon /> : <VideocamIcon />}
    </IconButton>
  );
};

export default CameraButton;
