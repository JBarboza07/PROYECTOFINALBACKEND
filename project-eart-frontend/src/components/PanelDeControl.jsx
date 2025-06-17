import { Box, Typography, Avatar, Button, Tabs, Tab, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CardsComponente from './Cards';
import { getData } from '../../services/llamadosUsuarios';

  function Cards() {
    return <Box sx={{ p: 2, border: '1px solid #ccc' }}>Publicación de pruebaa</Box>;
  }

function PanelDeControl() {
  const [tabIndex, setTabIndex] = useState(0);
  const [users, setUsers] = useState([])

  useEffect(()=>{
    async function Data() {
      const Users = await getData('users')
      setUsers(Users)

    }
    Data()
  },[])

  const handleCambioDeTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
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
            {users.map((user)=>(
            <div key={user.id}>
              <Typography variant="h6">{user.username}</Typography>
            </div>
          ))}
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
        <CardsComponente/>
    </Box>
    </>
  );
}

export default PanelDeControl;
