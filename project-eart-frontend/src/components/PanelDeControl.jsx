import { Box, Typography, Avatar, Button, Tabs, Tab, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../services/llamadosUsuarios';

function Cards() {
  return <Box sx={{ p: 2, border: '1px solid #ccc' }}>Publicación de prueba</Box>;
}

function PanelDeControl() {
  const [tabIndex, setTabIndex] = useState(0);
  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{
    async function allUsers() {
      const users = await getData('CustomUser')
      setUsuarios(users)
    }

    allUsers()
  },[])

  const handleCambioDeTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        {usuarios.map((usuario)=>(
          <div key={usuario.id}>
            <p>{usuario.username}</p>
          </div>
        ))}
        <Avatar sx={{ width: 80, height: 80, mr: 3 }}>
          
        </Avatar>
        <Box>
          <Typography variant="h6"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
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
          
          </Grid>
        )}
        {tabIndex === 1 && (
          <Grid container spacing={2}>
           
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
