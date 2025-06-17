import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Inicio.css"

const Inicio = () => {
 return (
   <div 
   className="Home-container">
       <header className="Home-header">
         <h1 className="Home-title">Project Earth</h1>
         <p className="Home-subtitle">Conectando personas para un planeta más verde 🌍</p>

           <div className="Home-button">
           <Link to="/Registro"> <button>
           Únete ahora</button></Link>

           <Link to="/QuienesSomos"><button className=
           "Home-button2">Saber más</button></Link>  
           </div>
           <div>
           <hr className='Home-hr'/>
           </div>
           </header>
           <div> <hr className='Home-hr2'/>
           </div>
           <div className="Home-h2">
           <h2>¿Qué es Project Earth?</h2>
           <p>
           Project Earth es una red social dedicada al reciclaje y la sostenibilidad. Comparte ideas, conecta con otras personas
           comprometidas con el medio ambiente y ayuda a construir un futuro más limpio.
           </p>
         </div>
       <footer className="-Homefooter">
      <p>&copy; 2025 Project Earth. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Inicio;
