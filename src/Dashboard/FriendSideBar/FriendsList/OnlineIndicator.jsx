import { Box } from '@mui/system';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: '#3ba55d',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '5px',
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};

export default OnlineIndicator;
