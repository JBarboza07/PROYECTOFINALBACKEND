import React, { useState } from 'react';
import '../styles/Noticias.css';

const noticiasAmbientales = [
  {
    id: 1,
    titulo: "🌱 Nueva ley protege bosques tropicales en América Latina",
    descripcion: "Se ha aprobado una nueva legislación que busca frenar la deforestación ilegal y promover la reforestación en zonas críticas.",
    detalle: "Esta ley busca crear reservas ecológicas y fomentar el empleo sostenible en comunidades rurales para evitar la destrucción de ecosistemas clave.",
    imagen: "https://images.unsplash.com/photo-forest",
  },
  {
    id: 2,
    titulo: "🌊 Microplásticos encontrados en aguas profundas del Atlántico",
    descripcion: "Un estudio reciente revela que los microplásticos han llegado a zonas oceánicas que antes se creían vírgenes.",
    detalle: "Los científicos detectaron restos de plásticos a más de 5,000 metros de profundidad, lo que indica que la contaminación ha llegado a todos los niveles del océano.",
    imagen: "https://images.unsplash.com/photo-ocean",
  },
  {
    id: 3,
    titulo: "🔋 Energía solar alcanza récord mundial de producción",
    descripcion: "Gracias a nuevos paneles solares más eficientes, el mundo ha alcanzado un nuevo récord en generación limpia.",
    detalle: "El avance tecnológico ha permitido reducir los costos de producción y aumentar la eficiencia energética en más del 20%.",
    imagen: "https://images.unsplash.com/photo-solarpanel",
  },
  {
    id: 4,
    titulo: "🦋 Declive de insectos afecta polinización global",
    descripcion: "Científicos advierten que la pérdida de insectos como abejas y mariposas amenaza la seguridad alimentaria del planeta.",
    detalle: "La agricultura depende en un 75% de los insectos polinizadores. Sin ellos, se reduce la producción de frutas, verduras y granos.",
    imagen: "https://images.unsplash.com/photo-bee",
  },
  {
    id: 5,
    titulo: "🌍 ONU lanza campaña de educación ambiental para jóvenes",
    descripcion: "El nuevo programa busca formar a millones de estudiantes sobre sostenibilidad, cambio climático y acción ecológica.",
    detalle: "El contenido se impartirá en más de 50 idiomas y se integrará en los planes educativos de varios países a partir del próximo año.",
    imagen: "https://images.unsplash.com/photo-education",
  },
  {
    id: 6,
    titulo: "🔥 Ola de calor extremo afecta biodiversidad en Europa",
    descripcion: "Altas temperaturas están impactando ecosistemas frágiles, especialmente en zonas montañosas y mediterráneas.",
    detalle: "Muchas especies animales y vegetales no pueden adaptarse tan rápido al cambio, provocando desequilibrios en los hábitats.",
    imagen: "https://images.unsplash.com/photo-heatwave",
  },
  {
    id: 7,
    titulo: "🌾 Agricultura regenerativa gana terreno entre campesinos",
    descripcion: "Técnicas sostenibles como la rotación de cultivos y el compost natural están mejorando la salud del suelo en varias regiones.",
    detalle: "Estas prácticas también ayudan a capturar carbono, lo que contribuye a mitigar el cambio climático de forma directa.",
    imagen: "https://images.unsplash.com/photo-agriculture",
  },
  {
    id: 8,
    titulo: "🏭 Grandes empresas reducirán emisiones 50% para 2030",
    descripcion: "Un grupo de 100 compañías firmaron un acuerdo internacional para acelerar la transición hacia la neutralidad de carbono.",
    detalle: "El acuerdo incluye auditorías anuales, uso de energías limpias y reducción de residuos en todas las operaciones.",
    imagen: "https://images.unsplash.com/photo-industry",
  },
  {
    id: 9,
    titulo: "🚴‍♀️ Ciudades verdes promueven movilidad sostenible",
    descripcion: "Más ciudades están invirtiendo en ciclovías, transporte eléctrico y espacios peatonales para reducir la huella de carbono.",
    detalle: "Ciudades como Ámsterdam, Copenhague y Bogotá sirven de modelo al priorizar al peatón y al ciclista sobre los autos.",
    imagen: "https://images.unsplash.com/photo-bikecity",
  },
  {
    id: 10,
    titulo: "🧼 Campaña global de limpieza de playas bate récords",
    descripcion: "Voluntarios de más de 80 países recogieron toneladas de basura en playas y riberas durante el Día Mundial del Medio Ambiente.",
    detalle: "Se recolectaron más de 10,000 toneladas de residuos, principalmente plásticos de un solo uso y botellas.",
    imagen: "https://images.unsplash.com/photo-cleanbeach",
  },
];

function Noticias() {
  const fechaActual = new Date().toLocaleDateString('es-CR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [expandida, setExpandida] = useState({});

  const toggleDetalle = (id) => {
    setExpandida((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

            {expandida[noticia.id] && (
              <p className="detalle-noticia">{noticia.detalle}</p>
            )}

            <button className="btn-saber-mas" onClick={() => toggleDetalle(noticia.id)}>
              {expandida[noticia.id] ? 'Saber menos' : 'Saber más'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
