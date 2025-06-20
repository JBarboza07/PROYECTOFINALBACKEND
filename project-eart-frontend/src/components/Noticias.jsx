import React from 'react';
import '../styles/Noticias.css';

const noticiasAmbientales = [
  {
    id: 1,
    titulo: "🌱 Nueva ley protege bosques tropicales en América Latina",
    descripcion: "Se ha aprobado una nueva legislación que busca frenar la deforestación ilegal y promover la reforestación en zonas críticas.",
    imagen: "https://images.unsplash.com/photo-forest",
  },
  {
    id: 2,
    titulo: "🌊 Microplásticos encontrados en aguas profundas del Atlántico",
    descripcion: "Un estudio reciente revela que los microplásticos han llegado a zonas oceánicas que antes se creían vírgenes.",
    imagen: "https://images.unsplash.com/photo-ocean",
  },
  {
    id: 3,
    titulo: "🔋 Energía solar alcanza récord mundial de producción",
    descripcion: "Gracias a nuevos paneles solares más eficientes, el mundo ha alcanzado un nuevo récord en generación limpia.",
    imagen: "https://images.unsplash.com/photo-solarpanel",
  },
  {
    id: 4,
    titulo: "🦋 Declive de insectos afecta polinización global",
    descripcion: "Científicos advierten que la pérdida de insectos como abejas y mariposas amenaza la seguridad alimentaria del planeta.",
    imagen: "https://images.unsplash.com/photo-bee",
  },
  {
    id: 5,
    titulo: "🌍 ONU lanza campaña de educación ambiental para jóvenes",
    descripcion: "El nuevo programa busca formar a millones de estudiantes sobre sostenibilidad, cambio climático y acción ecológica.",
    imagen: "https://images.unsplash.com/photo-education",
  },
  {
    id: 6,
    titulo: "🔥 Ola de calor extremo afecta biodiversidad en Europa",
    descripcion: "Altas temperaturas están impactando ecosistemas frágiles, especialmente en zonas montañosas y mediterráneas.",
    imagen: "https://images.unsplash.com/photo-heatwave",
  },
  {
    id: 7,
    titulo: "🌾 Agricultura regenerativa gana terreno entre campesinos",
    descripcion: "Técnicas sostenibles como la rotación de cultivos y el compost natural están mejorando la salud del suelo en varias regiones.",
    imagen: "https://images.unsplash.com/photo-agriculture",
  },
  {
    id: 8,
    titulo: "🏭 Grandes empresas reducirán emisiones 50% para 2030",
    descripcion: "Un grupo de 100 compañías firmaron un acuerdo internacional para acelerar la transición hacia la neutralidad de carbono.",
    imagen: "https://images.unsplash.com/photo-industry",
  },
  {
    id: 9,
    titulo: "🚴‍♀️ Ciudades verdes promueven movilidad sostenible",
    descripcion: "Más ciudades están invirtiendo en ciclovías, transporte eléctrico y espacios peatonales para reducir la huella de carbono.",
    imagen: "https://images.unsplash.com/photo-bikecity",
  },
  {
    id: 10,
    titulo: "🧼 Campaña global de limpieza de playas bate récords",
    descripcion: "Voluntarios de más de 80 países recogieron toneladas de basura en playas y riberas durante el Día Mundial del Medio Ambiente.",
    imagen: "https://images.unsplash.com/photo-cleanbeach",
  },
];

function Noticias() {
  // Obtener fecha actual
  const fechaActual = new Date().toLocaleDateString('es-CR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="noticias-container">
      <h1 className="titulo-principal">Noticias Ambientales</h1>
      {noticiasAmbientales.map((noticia) => (
        <div key={noticia.id} className="noticia-card">
          <img src={noticia.imagen} alt={noticia.titulo} className="noticia-img" />
          <div className="noticia-info">
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descripcion}</p>
            <small className="noticia-fecha">Publicado: {fechaActual}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
