import React from 'react';


const User = () => {
  return (
    <section className="usuario">
      <div className="usuario-header">
        <img
          className="usuario-avatar"
          src="https://via.placeholder.com/120"
          alt="Avatar del usuario"
        />
        <div className="usuario-detalles">
          <h2>@aventurera_latina</h2>
          <p><strong>Sofía Vargas</strong></p>
          <div className="estadisticas">
            <span><strong>213</strong> publicaciones</span>
            <span><strong>12.5k</strong> seguidores</span>
            <span><strong>643</strong> siguiendo</span>
          </div>
        </div>
      </div>

      <div className="usuario-bio">
        <p>
          Amante del café ☕, la fotografía 📷 y los atardeceres 🌅.<br />
          Viajando por el mundo un país a la vez ✈️🌍
        </p>
        <p>📍 Costa Rica</p>
      </div>
    </section>
  );
};

export default User;