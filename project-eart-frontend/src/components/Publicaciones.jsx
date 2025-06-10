import React, { useState } from "react";

const publicacionesSimuladas = [
  {
    id: 1,
    publicacion: "¡Explorando nuevos horizontes! 🌅✨",
    publicacionFoto: "https://source.unsplash.com/random/?nature",
  },
  {
    id: 2,
    publicacion: "Café y libros, la mejor combinación ☕📖",
    publicacionFoto: "https://source.unsplash.com/random/?coffee",
  },
  {
    id: 3,
    publicacion: "Momentos que valen oro 💛 #Recuerdos",
    publicacionFoto: "https://source.unsplash.com/random/?sunset",
  },
  {
    id: 4,
    publicacion: "Arte en cada rincón 🎨🖌️",
    publicacionFoto: "https://source.unsplash.com/random/?art",
  },
  {
    id: 5,
    publicacion: "El viaje comienza con un paso 🚶🌍",
    publicacionFoto: "https://source.unsplash.com/random/?travel",
  },
];

const App = () => {
  const [posts] = useState(publicacionesSimuladas);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Mis Publicaciones Simuladas</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px"
      }}>
        {posts.map((post) => (
          <div key={post.id} style={{
            padding: "15px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <p>{post.publicacion}</p>
            <img 
              src={post.publicacionFoto} 
              alt="Publicación" 
              style={{ maxWidth: "100%", borderRadius: "8px" }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;