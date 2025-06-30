import React from 'react';
import Cards from '../components/CardsComponente';
import { Box, Typography } from '@mui/material';
import Publicaciones1 from '../components/Publicaciones1';
import Navbar from '../components/Navbar';
function Publicaciones() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Project Earth Feed
      </Typography>
       <Navbar/>
       <Publicaciones1/>
      </Box>
   
    
  );
}

export default Publicaciones;
