import { Box, Typography, Avatar, Button, Tabs, Tab, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../services/llamadosUsuarios';
function PanelDeControl() {
  const [tabIndex, setTabIndex] = useState(0);
  const [usuarios, setUsuarios] = useState([])
  useEffect(()=>{
    async function allUsers() {
      const users = await getData(`user_unico/${localStorage.getItem('usuarioID')}`)
      // Ensure usuarios is always an array
      if (Array.isArray(users)) {
        setUsuarios(users);
      } else if (users) {
        setUsuarios([users]);
      } else {
        setUsuarios([]);
      }
      console.log(users);
      
    }
    allUsers()
  },[])
  const handleCambioDeTab = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        {usuarios.map((usuario) => {
          return (
            <p key={usuario.id}>Bienvenido, {usuario.username}!</p>
          )
        })}

        <Avatar sx={{ width: 80, height: 80, mr: 3 }}>
        </Avatar>
        <Box>
          <Typography variant="h6"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          <Button variant="outlined" size="small" sx={{ mt: 1 }}>Editar perfil</Button>
        </Box>
      </Box>
      <Tabs value={tabIndex} onChange={handleCambioDeTab} centered>
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
