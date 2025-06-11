import React from 'react';
import Cards from '../components/Cards';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Publicaciones from '../components/Publicaciones';
function Cardd() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Project Earth Feed
      </Typography>

      {/* Simula múltiples publicaciones */}
       <Navbar/>
       <Cards/>
       <Publicaciones/>
      </Box>
   
    
  );
}

export default Cardd;
