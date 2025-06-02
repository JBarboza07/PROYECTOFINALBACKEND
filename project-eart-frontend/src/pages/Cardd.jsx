import React from 'react';
import Cards from '../components/cards';
import { Box, Typography } from '@mui/material';

function Cardd() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Project Earth Feed
      </Typography>

      {/* Simula múltiples publicaciones */}
      <Cards />
      <Cards />
      <Cards />
    </Box>
  );
}

export default Cardd;
