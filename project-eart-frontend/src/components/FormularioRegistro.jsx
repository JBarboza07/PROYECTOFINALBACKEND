import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../styles/Registro.css';
import { postData } from '../../services/llamados';
function FormularioRegistro() {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
<<<<<<< HEAD
  const [alerta, setAlerta] = useState(null); // mensaje de alerta
  const navigate = useNavigate();

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const edad = calcularEdad(fechaNacimiento);
    if (edad < 15) {
      setAlerta({ tipo: 'error', mensaje: 'Debes tener al menos 15 años para registrarte.' });
      return;
    }

    // Simular creación exitosa
    console.log('Formulario enviado:', { name, correo, clave, fechaNacimiento });

    setAlerta({ tipo: 'success', mensaje: '¡Registro exitoso! Redirigiendo...' });

    // Redirigir luego de unos segundos
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
=======
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
>>>>>>> e02536952659bd57ea27c11e00bd60779c66948f

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
<<<<<<< HEAD
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

          <button onClick={handleSubmit} className="button">Registrar</button>

          <Link to="/Login" className="loginlink">¿Ya tienes cuenta?</Link>
=======
          <br />
          <input type="password"className="inputs"value={clave}
            onChange={(evento) => setClave(evento.target.value)}/>

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
>>>>>>> e02536952659bd57ea27c11e00bd60779c66948f
        </div>
      </div>
    </div>
  );
}

export default FormularioRegistro;
