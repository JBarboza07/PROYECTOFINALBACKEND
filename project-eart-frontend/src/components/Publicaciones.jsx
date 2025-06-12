import React, { useState } from "react";

// Publicaciones con datos simulados
const publicacionesSimuladas = [
  {
    id: 1,
    publicacion: "¡Reciclando! 🌅✨",
    publicacionFoto: "https://source.unsplash.com/random/400x400/?recycle",
  },
  {
    id: 2,
    publicacion: "Café y libros, la mejor combinación ☕📖",
    publicacionFoto:
      "https://imgs.search.brave.com/lrbAXAibiRNdhIw0GXJTF4VTsYHDt0-zUnsr9sfLJVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/ODU2MDA5Ni9lcy9m/b3RvL3ZvbGMlQzMl/QTFuLWFyZW5hbC15/LWxhZ28tYXJlbmFs/LWNvc3RhLXJpY2Eu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUlPanZpUHl3LWJM/ZVZLMlN5MWJIRHZC/T3QwTnBvbm1HcVBv/NWFFT3RtSDg9",
  },
  {
    id: 3,
    publicacion: "Momentos que valen oro 💛 #Recuerdos",
    publicacionFoto: "https://source.unsplash.com/random/400x400/?sunset",
  },
  {
    id: 4,
    publicacion: "Arte en cada rincón 🎨🖌️",
    publicacionFoto: "https://source.unsplash.com/random/400x400/?art",
  },
  {
    id: 5,
    publicacion: "El viaje comienza con un paso 🚶🌍",
    publicacionFoto: "https://source.unsplash.com/random/400x400/?travel",
  },
];

const App = () => {
  const [likes, setLikes] = useState({});

  // Función para manejar "me gusta"
  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📸 Publicaciones</h2>

      {publicacionesSimuladas.map((post) => (
        <div
          key={post.id}
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src={post.publicacionFoto}
            alt="Publicación"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ padding: "15px" }}>
            <p>{post.publicacion}</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ display: "flex", gap: "15px", fontSize: "22px", cursor: "pointer" }}>
                <span onClick={() => toggleLike(post.id)}>❤️</span>
                <span>💬</span>
                <span>🔄</span>
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                {likes[post.id] ? `${likes[post.id]} Me gusta` : "0 Me gusta"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
