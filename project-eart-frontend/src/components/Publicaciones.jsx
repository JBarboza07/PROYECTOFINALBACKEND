import React, { useState } from "react";

const publicacionesSimuladas = [
  {
    id: 1,
    publicacion: "¡Reciclando! 🌅✨",
    publicacionFoto: "https://imgs.search.brave.com/RFDWYmmcia98zkaqvxYOk-WNbypFqRfmZSll9i8iE6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYw/MDgwMDgxNi9lcy9m/b3RvL2dydXBvLWRl/LXRyYWJhamFkb3Jl/cy1lbi1lbC1jZW50/cm8tZGUtcmVjaWNs/YWplLWNsYXNpZmlj/YW5kby1yZXNpZHVv/cy1wbCVDMyVBMXN0/aWNvcy15LXByZXBh/ciVDMyVBMW5kb3Nl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1vWFdEeV9ob0hD/QTBQX29JNGJXM2R4/bnEtWGpja3B3R3dX/NHlrY2pydW5RPQ",
  },
  {
    id: 2,
    publicacion: "Café y libros, la mejor combinación ☕📖",
    publicacionFoto:
      "https://imgs.search.brave.com/lrbAXAibiRNdhIw0GXJTF4VTsYHDt0-zUnsr9sfLJVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/ODU2MDA5Ni9lcy9m/b3RvL3ZvbGMlQzMl/QTFuLWFyZW5hbC15/LWxhZ28tYXJlbmFs/LWNvc3RhLXJpY2Eu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUlPanZpUHl3LWJM/ZVZLMlN5MWJIRHZC/T3QwTnBvbm1HcVBv/NWFFT3RtSDg9",
  },
  {
    id: 3,
    publicacion: "Momentos que valen oro 💛 ",
    publicacionFoto: "https:",
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
  const [comentarios, setComentarios] = useState({});
  const [mostrarInput, setMostrarInput] = useState({});

  // ❤️ Me gusta
  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  // 💬 Mostrar input comentario
  const toggleComentario = (id) => {
    setMostrarInput((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 💬 Agregar comentario
  const agregarComentario = (id, texto) => {
    if (!texto.trim()) return;
    setComentarios((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), texto],
    }));
  };

  // 🔄 Compartir (copiar al portapapeles)
  const compartir = (id) => {
    const url = window.location.href + `#post-${id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("📎 Enlace copiado al portapapeles");
    });
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
          id={`post-${post.id}`}
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
                <span onClick={() => toggleComentario(post.id)}>💬</span>
                <span onClick={() => compartir(post.id)}>🔄</span>
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                {likes[post.id] ? `${likes[post.id]} Me gusta` : "0 Me gusta"}
              </div>
            </div>

            {/* Comentario input */}
            {mostrarInput[post.id] && (
              <div style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Escribe un comentario..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      agregarComentario(post.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                  }}
                />
              </div>
            )}

            {/* Lista de comentarios */}
            {comentarios[post.id]?.map((c, i) => (
              <p key={i} style={{ fontSize: "14px", margin: "5px 0", color: "#333" }}>
                💬 {c}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

