import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function FormularioLogin() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  async function validarUsuario() {
    // Aquí deberías conectar con la nueva base de datos en el futuro
    // Por ahora, simplemente imprimimos los datos en consola
    console.log("Correo ingresado:", correo);
    console.log("Contraseña ingresada:", clave);

    // Simulación de validación exitosa para prueba
    if (correo && clave) {
      navigate("/dhcitas");
    } else {
      alert("Por favor completa ambos campos.");
    }
  }

  return (
    <div className='base1-login'>
      <div>
        <h1 className="tittle">Iniciar Sesión</h1>
        <div className='form-login'>

          <label htmlFor="correo" className="label">Correo</label> <br />
          <input
            type="email"
            className='inputs'
            onChange={(evento) => setCorreo(evento.target.value)}
            value={correo}
          /> <br />

          <label htmlFor="clave" className="label">Contraseña</label><br />
          <input
            type="password"
            className='inputs'
            onChange={(evento) => setClave(evento.target.value)}
            value={clave}
          /><br />
          
          <button onClick={validarUsuario} className="button">
            Iniciar Sesión
          </button> <br />

          <Link to="/Registro" className="registerlink">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormularioLogin;
