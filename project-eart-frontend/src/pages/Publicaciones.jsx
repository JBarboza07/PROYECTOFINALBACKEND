import React from 'react';
import Cards from '../components/CardsComponente';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Publicaciones1 from '../components/Publicaciones1';
function Publicaciones() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Project Earth Feed
      </Typography>

      {/* Simula múltiples publicaciones */}
       <Navbar/>
       
      </Box>
   
    
  );
}

export default Publicaciones;
