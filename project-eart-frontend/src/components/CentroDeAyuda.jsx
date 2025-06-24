import React from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/CentroDeAyuda.css';

function CentroDeAyuda() {
  return (
    <Box className="centro-ayuda-container">
      <Typography variant="h4" className="titulo-principal">
        Centro de Ayuda - Project Earth :tierra_áfrica:
      </Typography>
      <Typography variant="body1" className="descripcion">
        Encuentra respuestas a preguntas frecuentes, cómo usar la plataforma, reportar problemas y más.
      </Typography>
      <Box className="faq-section">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Cómo puedo crear una publicación?
          </AccordionSummary>
          <AccordionDetails>
            Ve a la barra de navegación, haz clic en el ícono de "+" y selecciona una imagen desde tu galería. Escribe una descripción y publica.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Cómo puedo editar mi perfil?
          </AccordionSummary>
          <AccordionDetails>
            Dirígete a tu perfil y haz clic en "Editar perfil". Allí podrás cambiar tu nombre, foto y descripción.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Cómo reporto una publicación o usuario?
          </AccordionSummary>
          <AccordionDetails>
            En cada publicación o perfil verás un menú con tres puntos (⋯). Haz clic y selecciona "Reportar".
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Cómo contacto con el soporte técnico?
          </AccordionSummary>
          <AccordionDetails>
            Puedes enviarnos un correo a soporte@projectearth.com o usar el formulario de contacto dentro de la app en esta misma página.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default CentroDeAyuda;