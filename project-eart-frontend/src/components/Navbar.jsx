import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar({ user, onLogout, onNavigate }) {
  return (
    <AppBar position="sticky" color="default" sx={{ borderBottom: '1px solid #ddd' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#262626' }}>
          Project Earth
        </Typography>

        <Box sx={{ flexGrow: 1, mx: 2, maxWidth: 400, position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              height: '100%',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              color: 'gray',
            }}
          >
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Buscar"
            sx={{
              pl: 4,
              width: '100%',
              borderRadius: 1,
              backgroundColor: '#efefef',
              height: 35,
            }}
          />
        </Box>

        <Box>
          <IconButton onClick={() => onNavigate('feed')}><HomeIcon sx={{ color: '#262626' }} /></IconButton>
          <IconButton onClick={() => onNavigate('explore')}><ExploreIcon sx={{ color: '#262626' }} /></IconButton>
          <IconButton onClick={() => onNavigate('addPost')}><AddBoxIcon sx={{ color: '#262626' }} /></IconButton>
          <IconButton onClick={() => onNavigate('notifications')}><FavoriteBorderIcon sx={{ color: '#262626' }} /></IconButton>
          <IconButton onClick={() => onNavigate('profile')}><AccountCircleIcon sx={{ color: '#262626' }} /></IconButton>
          <Button color="error" onClick={onLogout}>Cerrar sesión</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
