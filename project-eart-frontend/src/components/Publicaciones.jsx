import React, { useState, useEffect } from "react";

const publicacionesSimuladas = [
  {
    id: 1,
    publicacion: "¡Reciclando! 🌅✨",
    publicacionFoto: "https://example.com/imagen1.jpg",
  },
  {
    id: 2,
    publicacion: "Café y libros, la mejor combinación ☕📖",
    publicacionFoto: "https://example.com/imagen2.jpg",
  },
];

const App = () => {
  const [likes, setLikes] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [mostrarInput, setMostrarInput] = useState({});
  const [usuariosLikes, setUsuariosLikes] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resLikes = await fetch("/api/likes");
        const dataLikes = await resLikes.json();
        setLikes(dataLikes);

        const resComentarios = await fetch("/api/comentarios");
        const dataComentarios = await resComentarios.json();
        setComentarios(dataComentarios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  const toggleLike = async (id) => {
    try {
      if (usuariosLikes[id]) {
        await fetch(`/api/likes/${id}`, { method: "DELETE" });
        setLikes((prev) => ({
          ...prev,
          [id]: Math.max((prev[id] || 0) - 1, 0),
        }));
        setUsuariosLikes((prev) => ({ ...prev, [id]: false }));
      } else {
        await fetch(`/api/likes/${id}`, { method: "POST" });
        setLikes((prev) => ({
          ...prev,
          [id]: (prev[id] || 0) + 1,
        }));
        setUsuariosLikes((prev) => ({ ...prev, [id]: true }));
      }
    } catch (error) {
      console.error("Error al registrar 'Me gusta':", error);
    }
  };

  const toggleComentario = (id) => {
    setMostrarInput((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const agregarComentario = async (id, texto) => {
    if (!texto.trim()) return;
    try {
      await fetch(`/api/comentarios/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto }),
      });
      setComentarios((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), texto],
      }));
    } catch (error) {
      console.error("Error al agregar comentario:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "500px", margin: "auto", backgroundColor: "#fafafa" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📸 Publicaciones</h2>

      {publicacionesSimuladas.map((post) => (
        <div key={post.id} id={`post-${post.id}`} style={{ backgroundColor: "#fff", borderRadius: "8px", marginBottom: "20px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
          <img src={post.publicacionFoto} alt="Publicación" style={{ width: "100%", height: "auto" }} />
          <div style={{ padding: "15px" }}>
            <p>{post.publicacion}</p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <div style={{ display: "flex", gap: "15px", fontSize: "22px", cursor: "pointer" }}>
                <span onClick={() => toggleLike(post.id)} style={{ opacity: usuariosLikes[post.id] ? 0.5 : 1 }}>❤️</span>
                <span onClick={() => toggleComentario(post.id)}>💬</span>
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                {likes[post.id] ? `${likes[post.id]} Me gusta` : "0 Me gusta"}
              </div>
            </div>

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

            {comentarios[post.id]?.map((c, i) => (
              <p key={i} style={{ fontSize: "14px", margin: "5px 0", color: "#333" }}>💬 {c}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;