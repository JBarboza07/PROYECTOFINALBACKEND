import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Registro.css';
import { postData } from '../../services/llamados';
function FormularioRegistro() {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
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
