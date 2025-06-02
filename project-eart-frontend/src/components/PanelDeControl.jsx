import { Box, Typography, Avatar, Button, Tabs, Tab, Grid } from '@mui/material';
import { useState } from 'react';

function Cards() {
  return <Box sx={{ p: 2, border: '1px solid #ccc' }}>Publicación de prueba</Box>;
}

function PanelDeControl() {
  const [tabIndex, setTabIndex] = useState(0);
  const userData = {
    username: 'usuario_earth',
    bio: 'Amante de la naturaleza 🌍🌱',
    posts: [1, 2],
    saved: [1],
  };

  const handleCambioDeTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar sx={{ width: 80, height: 80, mr: 3 }}>
          {userData.username[0].toUpperCase()}
        </Avatar>
        <Box>
          <Typography variant="h6">{userData.username}</Typography>
          <Typography variant="body2" color="text.secondary">{userData.bio}</Typography>
          <Button variant="outlined" size="small" sx={{ mt: 1 }}>Editar perfil</Button>
        </Box>
      </Box>

      <Tabs value={tabIndex} onChange={handleCambioDeTab} centered>
        <Tab label="Publicaciones" />
        <Tab label="Guardadas" />
        <Tab label="Configuración" />
      </Tabs>

      <Box sx={{ mt: 4 }}>
        {tabIndex === 0 && (
          <Grid container spacing={2}>
            {userData.posts.map((post, index) => (
              <Grid item xs={12} key={index}><Cards /></Grid>
            ))}
          </Grid>
        )}
        {tabIndex === 1 && (
          <Grid container spacing={2}>
            {userData.saved.map((post, index) => (
              <Grid item xs={12} key={index}><Cards /></Grid>
            ))}
          </Grid>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>Configuración</Typography>
            <Typography variant="body2" color="text.secondary">
              Aquí podrás ajustar las opciones de tu cuenta, privacidad, notificaciones, etc.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PanelDeControl;
