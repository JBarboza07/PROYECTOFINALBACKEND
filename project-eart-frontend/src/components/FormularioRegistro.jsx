import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Registro.css';

function FormularioRegistro() {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro sin necesidad de una base de datos
    console.log('Formulario enviado:', { name, correo, clave });
    // Redirigir al usuario a la página de inicio
    navigate('/');
  };

  return (
    
    <div className="base1">
      
      <div>
        
        <div className="form">
            <h1 className="tittle">Registro De Usuarios</h1>
          <label htmlFor="name" className="label">Nombre</label>
          <br />
          <input type="text"className="inputs"value={name}
            onChange={(evento) => setName(evento.target.value)}/>
          <br />

          <label htmlFor="correo" className="label">Correo</label>
          <br />
          <input type="email"className="inputs"value={correo}
           onChange={(evento) => setCorreo(evento.target.value)}/>
          <br />

          <label htmlFor="clave" className="label">Contraseña</label>
          <br />
          <input type="password"className="inputs"value={clave}
            onChange={(evento) => setClave(evento.target.value)}/>
          <br />

             <Link to="/Login">
          <button onClick={handleSubmit} className="button">Registrar
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
