import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../styles/Registro.css';
import { postData } from '../../services/llamadosUsuarios';

function FormularioRegistro() {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [alerta, setAlerta] = useState(null);

  const navigate = useNavigate();

  const enviarUsuario = async () => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;

    if (!usernameRegex.test(name)) {
      setAlerta({
        tipo: 'error',
        mensaje: 'El nombre de usuario solo puede contener letras, números, guiones (-) y guiones bajos (_).'
      });
      return;
    }

    if (!correo || !clave || !fechaNacimiento || !name) {
      setAlerta({
        tipo: 'warning',
        mensaje: 'Por favor, completa todos los campos.'
      });
      return;
    }

    const objUsuario = {
      username: name,
      email: correo,
      password: clave,
      fechaNacimiento: fechaNacimiento
    };

    try {
      const respuesta = await postData("api/CustomUser/", objUsuario);
      
      if (respuesta && respuesta.id) {
        setAlerta({
          tipo: 'success',
          mensaje: 'Usuario registrado con éxito. Redirigiendo a login...'
        });

        setTimeout(() => {
          navigate('/Login');
        }, 2000);
      } else {
        throw new Error("No se pudo registrar.");
      }

    } catch (error) {
      setAlerta({
        tipo: 'error',
        mensaje: 'Ocurrió un error al registrar. Intenta de nuevo.'
      });
      console.error(error);
    }
  };

  return (
    <div className="base1">
      <div>
        <div className="form">
          <h1 className="tittle">Registro De Usuarios</h1>

          {alerta && (
            <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={1}>
              <Alert severity={alerta.tipo}>{alerta.mensaje}</Alert>
            </Stack>
          )}

          <label htmlFor="name" className="label">Nombre de Usuario</label>
          <input
            type="text"
            className="inputs"
            value={name}
            onChange={(evento) => setName(evento.target.value)}
          />

          <label htmlFor="correo" className="label">Correo</label>
          <input
            type="email"
            className="inputs"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
          />

          <label htmlFor="clave" className="label">Contraseña</label>
          <input
            type="password"
            className="inputs"
            value={clave}
            onChange={(evento) => setClave(evento.target.value)}
          />

          <label htmlFor="fechaNacimiento" className="label">Fecha de Nacimiento</label>
          <input
            type="date"
            className="inputs"
            value={fechaNacimiento}
            onChange={(evento) => setFechaNacimiento(evento.target.value)}
          />

          <button onClick={enviarUsuario} className="button">Registrar</button>

          <br />
          <Link to="/Login" className="loginlink">
            ¿Ya tienes cuenta?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormularioRegistro;
