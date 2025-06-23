import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getData } from '../services/llamadosUsuarios';

function PanelDeControl() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function allUsers() {
      const users = await getData(`user_unico/${localStorage.getItem('usuarioID')}`);
      if (Array.isArray(users)) {
        setUsuarios(users);
      } else if (users) {
        setUsuarios([users]);
      } else {
        setUsuarios([]);
      }
    }
    allUsers();
  }, []);

  const styles = {
    contenedorPrincipal: {
      maxWidth: 900,
      mx: 'auto',
      mt: 4,
      p: 3,
      bgcolor: '#e8f5e9',
      borderRadius: 2,
      boxShadow: 1,
    },
    encabezado: {
      display: 'flex',
      alignItems: 'center',
      mb: 4,
    },
  };

  return (
    <Box sx={styles.contenedorPrincipal}>
      <Box sx={styles.encabezado}>
        <Box>
          {usuarios.map((usuario) => (
            <Typography key={usuario.id} variant="h6">
              Bienvenido, {usuario.username}!
            </Typography>
          ))}
          <Typography variant="body2" color="text.secondary">
            Tu perfil en Project Earth
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PanelDeControl;

