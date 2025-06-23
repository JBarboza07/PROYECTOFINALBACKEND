import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Avatar, Button, Tabs, Tab, Grid } from '@mui/material';
import { getData } from '../services/llamadosUsuarios';

function PanelDeControl() {
  const [tabIndex, setTabIndex] = useState(0);
  const [usuarios, setUsuarios] = useState([]);
  const [profilePic, setProfilePic] = useState(null); // URL para previsualización
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    async function allUsers() {
      const users = await getData('CustomUser');
      setUsuarios(users);
    }
    allUsers();
  }, []);

  const handleCambioDeTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  const usuarioActual = usuarios[0];

  const handleEditarPerfilClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Previsualización local inmediata
    const imageUrl = URL.createObjectURL(file);
    setProfilePic(imageUrl);

    // Enviar al backend
    setIsUploading(true);
    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      const response = await fetch('/api/upload-profile-pic', {
        method: 'POST',
        body: formData,
        // Si necesitas token o headers, agrégalos aquí
      });

      if (!response.ok) throw new Error('Error subiendo imagen');

      const data = await response.json();
      // data.url es la URL donde el backend guardó la imagen
      setProfilePic(data.url);

      // Aquí también podrías actualizar el estado del usuario o recargar info si quieres
      alert('Foto de perfil subida correctamente');
    } catch (error) {
      alert('Error al subir la imagen: ' + error.message);
      // Opcional: volver a la imagen anterior o quitar previsualización
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      {usuarioActual && (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{ width: 80, height: 80, mr: 3 }}
            src={profilePic || usuarioActual.profileImageUrl || undefined}
          >
            {!profilePic && !usuarioActual.profileImageUrl && usuarioActual.username.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="h6">{usuarioActual.username}</Typography>
            <Typography variant="body2" color="text.secondary">{usuarioActual.email}</Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{ mt: 1 }}
              onClick={handleEditarPerfilClick}
              disabled={isUploading}
            >
              {isUploading ? 'Subiendo...' : 'Editar perfil'}
            </Button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </Box>
        </Box>
      )}

      <Tabs value={tabIndex} onChange={handleCambioDeTab} centered>
        <Tab label="Resumen" />
        <Tab label="Actividad" />
        <Tab label="Configuración" />
      </Tabs>

      <Box sx={{ mt: 4 }}>
        {tabIndex === 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">Aquí verás un resumen general de tu cuenta.</Typography>
            </Grid>
          </Grid>
        )}

        {tabIndex === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">Actividad reciente del usuario.</Typography>
            </Grid>
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
