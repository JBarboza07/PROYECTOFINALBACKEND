import React from 'react';
import Cards from '../components/Cards';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Publicaciones1 from '../components/Publicaciones1';
import Publicaciones2 from '../components/Publicaciones2';
import Publicaciones3 from '../components/Publicaciones3';
import Publicaciones4 from '../components/Publicaciones4';
function Cardd() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Project Earth Feed
      </Typography>

      {/* Simula múltiples publicaciones */}
       <Navbar/>
       <Publicaciones1/>
       <Publicaciones2/>
        <Publicaciones3/>
        <Publicaciones4/>
      </Box>
   
    
  );
}

export default Cardd;
