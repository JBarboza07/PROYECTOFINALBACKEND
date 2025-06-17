import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <header className="info-header">
        <h1>Sobre Project Earth</h1>
        <p>Una red social para quienes quieren marcar la diferencia en el planeta 🌱</p>
      </header>

      <div className="info-section">
        <h2>¿Qué es Project Earth?</h2>
        <p>
          Project Earth es una red social dedicada a unir a personas, comunidades y organizaciones enfocadas en el reciclaje,
          la sostenibilidad y la acción ambiental. Aquí puedes compartir ideas, eventos, logros y colaborar con otros usuarios.
        </p>
      </div>

      <div className="info-section">
        <h2>¿Qué puedes hacer en Project Earth?</h2>
        <ul>
          <li>📸 Compartir tus proyectos de reciclaje</li>
          <li>🤝 Conectar con personas con intereses similares</li>
          <li>📅 Publicar y unirte a eventos ecológicos</li>
          <li>📚 Aprender sobre prácticas sostenibles</li>
          <li>🏆 Participar en desafíos ecológicos</li>
        </ul>
      </div>

      <div className="info-section">
        <h2>¿Por qué unirte?</h2>
        <p>
          Porque cada acción cuenta. Project Earth busca crear una comunidad comprometida con el cambio positivo,
          facilitando la colaboración y el aprendizaje entre quienes comparten la misma visión: un mundo más limpio y justo.
        </p>
      </div>

      <footer className="info-footer">
        <p>¿Listo para unirte? Visita nuestra página de inicio o crea tu cuenta ahora.</p>
        <Link to="/" className="back-button">Volver al inicio</Link>
      </footer>
    </div>
  );
};

export default Info;
