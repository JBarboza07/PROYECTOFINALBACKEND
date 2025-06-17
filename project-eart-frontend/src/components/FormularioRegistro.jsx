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
  const [alerta, setAlerta] = useState(null); // Estado para manejar la alerta
  // Hook para la navegación
  const navigate = useNavigate();
  // Función para manejar el envío del formulario
  const enviarUsuario = async()=>{
    const objUsuario = {
      username: name,
      email: correo,
      password: clave,
      fechaNacimiento: fechaNacimiento
    }
    const enviar = await postData("api/CustomUser/",objUsuario)
    console.log(enviar);
  }
  return (
    <div className="base1">
      <div>
        <div className="form">
          <h1 className="tittle">Registro De Usuarios</h1>
          {/* Alerta condicional */}
          {alerta && (
            <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={1}>
              <Alert severity={alerta.tipo}>{alerta.mensaje}</Alert>
            </Stack>
          )}
          <label htmlFor="name" className="label">Nombre</label>
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
          <br />
          <input type="password"className="inputs"value={clave}
            onChange={(evento) => setClave(evento.target.value)}/>
            <label htmlFor="">Fecha de Nacimiento</label>
             <input type="date"className="inputs"value={fechaNacimiento}
            onChange={(evento) => setFechaNacimiento(evento.target.value)}/>
          <br />
             <Link to="/Login">
          <button onClick={enviarUsuario} className="button">Registrar
          </button></Link>
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