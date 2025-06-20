import React, { useState } from 'react';
import '../styles/Noticias.css';

const noticiasAmbientales = [
  {
    id: 1,
    titulo: "🌱 Nueva ley protege bosques tropicales en América Latina",
    descripcion:
      "Se ha aprobado una nueva legislación que busca frenar la deforestación ilegal...",
    fecha: "20 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-forest",
    contenidoCompleto:
      "Esta ley incluye incentivos a comunidades indígenas, vigilancia satelital de los bosques y sanciones severas a empresas que destruyan zonas protegidas.",
  },
  {
    id: 2,
    titulo: "🌊 Microplásticos encontrados en aguas profundas del Atlántico",
    descripcion:
      "Un estudio reciente revela que los microplásticos han llegado a zonas oceánicas...",
    fecha: "18 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-ocean",
    contenidoCompleto:
      "Los investigadores hallaron partículas de plástico a más de 8,000 metros de profundidad, lo que alerta sobre la magnitud del problema global de contaminación.",
  },
  {
    id: 3,
    titulo: "🔋 Energía solar alcanza récord mundial de producción",
    descripcion:
      "Gracias a nuevos paneles solares más eficientes, el mundo ha alcanzado un nuevo récord...",
    fecha: "15 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-solarpanel",
    contenidoCompleto:
      "La energía solar generada en 2025 cubrió el 40% del consumo energético de varios países europeos, marcando un avance clave hacia la descarbonización.",
  },
  {
    id: 4,
    titulo: "🦋 Declive de insectos afecta polinización global",
    descripcion:
      "Científicos advierten que la pérdida de insectos amenaza la seguridad alimentaria...",
    fecha: "14 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-bee",
    contenidoCompleto:
      "El estudio muestra que un 75% de los cultivos dependen de la polinización natural, y la reducción de abejas podría llevar a una crisis agrícola sin precedentes.",
  },
  {
    id: 5,
    titulo: "🌍 ONU lanza campaña de educación ambiental para jóvenes",
    descripcion:
      "El nuevo programa busca formar a millones de estudiantes sobre sostenibilidad...",
    fecha: "12 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-education",
    contenidoCompleto:
      "Se impartirán talleres en más de 100 países sobre cambio climático, reciclaje, energías limpias y activismo juvenil para cuidar el planeta.",
  },
  {
    id: 6,
    titulo: "🔥 Ola de calor extremo afecta biodiversidad en Europa",
    descripcion:
      "Altas temperaturas están impactando ecosistemas frágiles en Europa...",
    fecha: "10 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-heatwave",
    contenidoCompleto:
      "La sequía prolongada ha provocado incendios forestales en zonas protegidas, afectando especies vulnerables como el lince ibérico y aves migratorias.",
  },
  {
    id: 7,
    titulo: "🌾 Agricultura regenerativa gana terreno entre campesinos",
    descripcion:
      "Técnicas sostenibles como la rotación de cultivos están mejorando la salud del suelo...",
    fecha: "9 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-agriculture",
    contenidoCompleto:
      "Pequeños productores están adoptando compostaje natural, agroforestería y cultivos de cobertura para restaurar la fertilidad del suelo y evitar químicos.",
  },
  {
    id: 8,
    titulo: "🏭 Grandes empresas reducirán emisiones 50% para 2030",
    descripcion:
      "Un grupo de 100 compañías firmaron un acuerdo internacional de neutralidad...",
    fecha: "7 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-industry",
    contenidoCompleto:
      "Empresas de tecnología, moda, energía y transporte se comprometen a usar energías limpias, electrificar flotas y optimizar procesos para reducir emisiones.",
  },
  {
    id: 9,
    titulo: "🚴‍♀️ Ciudades verdes promueven movilidad sostenible",
    descripcion:
      "Más ciudades están invirtiendo en ciclovías, transporte eléctrico y espacios peatonales...",
    fecha: "5 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-bikecity",
    contenidoCompleto:
      "Ámsterdam, Bogotá y San José son ejemplos de cómo la movilidad activa puede mejorar la calidad del aire y reducir el tráfico.",
  },
  {
    id: 10,
    titulo: "🧼 Campaña global de limpieza de playas bate récords",
    descripcion:
      "Voluntarios de más de 80 países recogieron toneladas de basura en playas y riberas...",
    fecha: "3 de junio de 2025",
    imagen: "https://images.unsplash.com/photo-cleanbeach",
    contenidoCompleto:
      "Más de 500,000 personas participaron en esta jornada mundial, recolectando más de 3,000 toneladas de residuos plásticos y educando a las comunidades.",
  },
];

function Noticias() {
  const [expandida, setExpandida] = useState(null);

  const toggleExpandir = (id) => {
    setExpandida(expandida === id ? null : id);
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
            <small className="noticia-fecha">{noticia.fecha}</small>
            <br />
            <button className="boton-saber-mas" onClick={() => toggleExpandir(noticia.id)}>
              {expandida === noticia.id ? "Ocultar" : "Saber más"}
            </button>
            {expandida === noticia.id && (
              <p className="contenido-expandido">{noticia.contenidoCompleto}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
