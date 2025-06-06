// import React from 'react';
import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Social = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <IconButton color="primary" href="https://github.com/nirjo" target="_blank">
        <GitHub />
      </IconButton>
      <IconButton color="primary" href="https://www.linkedin.com/in/nirmalraj-joseph-390614ba/" target="_blank">
        <LinkedIn />
      </IconButton>
      <IconButton color="primary" href="https://twitter.com/yourprofile" target="_blank">
        <Twitter />
      </IconButton>
    </Box>
  );
};

export default Social;
