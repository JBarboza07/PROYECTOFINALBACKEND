import React from 'react';
import "../styles/Nav.css";
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Navbar({ onLogout }) {
  const navigate = useNavigate(); // React Router redirection hook

  return (
    <AppBar position="sticky" className="nav-appbar">
      <Toolbar className="nav-toolbar">
        <Typography
          variant="h6"
          className="nav-title"
          onClick={() => navigate('/feed')}
          style={{ cursor: 'pointer' }}
        >
          Project Earth
        </Typography>

        <Box className="nav-search-container">
          <Box className="nav-search-icon">
            <SearchIcon />
          </Box>
          <InputBase placeholder="Buscar" className="nav-search-input" />
        </Box>

        <Box className="nav-icons">
          <IconButton onClick={() => navigate('/explore')}>
            <ExploreIcon className="nav-icon" />
          </IconButton>
          <IconButton onClick={() => navigate('/notifications')}>
            <FavoriteBorderIcon className="nav-icon" />
          </IconButton>
          <IconButton onClick={() => navigate('/Panel')}>
            <AccountCircleIcon className="nav-icon" />
          </IconButton>
          <IconButton onClick={() => navigate('/')}>
            <ExitToAppIcon className="nav-icon" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
