import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { postData,getData } from  '../../services/llamadosUsuarios';
import { BiObjectsVerticalBottom } from 'react-icons/bi';
function FormularioLogin() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();
    
  const validarUsuario = async()=> {
    const ObjetoUsuario = {
      username: correo,
      password: clave
    }
    const enviar = await postData("api/loginUser/",ObjetoUsuario)

    console.log(enviar);

    if(enviar.exito){
      console.log("usuario logueado");
      navigate("/card")    }
    else{
      console.log("usuario no logueado");
      alert("Usuario o contraseña incorrectos");
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
