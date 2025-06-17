import React, { useState, useEffect } from "react";

const publicacionesSimuladas = [
  {
    id: 1,
    publicacion: "¡Reciclando! 🌅✨",
    publicacionFoto: "https://imgs.search.brave.com/vJtPaZ_2Vvz7xDK-OKjq3bX9tgPe_CsfFLiMfSPWYsg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xNTE4NzY3/LzI2OTk5L2kvNDUw/L2RlcG9zaXRwaG90/by0yNjk5MzgwOS1z/dG9jay1waG90by1t/YW4taG9sZGluZy1i/b3gtb2YtcmVjeWNs/YWJsZXMuanBn",
    Likes: 23,
  },
];

const App = () => {
  const [likes, setLikes] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [mostrarInput, setMostrarInput] = useState({});
  const [usuariosLikes, setUsuariosLikes] = useState({});
  const [comentarioEditando, setComentarioEditando] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resLikes = await fetch("/api/Reacciones");
        const dataLikes = await resLikes.json();
        setLikes(dataLikes);

        const resComentarios = await fetch("/api/Comentarios");
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
        await fetch(`/api/Reacciones/${id}`, { method: "DELETE" });
        setLikes((prev) => ({
          ...prev,
          [id]: Math.max((prev[id] || 0) - 1, 0),
        }));
        setUsuariosLikes((prev) => ({ ...prev, [id]: false }));
      } else {
        await fetch(`/api/Reacciones/${id}`, { method: "POST" });
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
      await fetch(`/api/Comentarios/${id}`, {
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

  const editarComentario = async (id, index, nuevoTexto) => {
    if (!nuevoTexto.trim()) return;
    try {
      await fetch(`/api/Comentarios/${id}/${index}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: nuevoTexto }),
      });
      setComentarios((prev) => ({
        ...prev,
        [id]: prev[id].map((c, i) => (i === index ? nuevoTexto : c)),
      }));
      setComentarioEditando((prev) => ({ ...prev, [id]: null }));
    } catch (error) {
      console.error("Error al editar comentario:", error);
    }
  };

  const eliminarComentario = async (id, index) => {
    try {
      await fetch(`/api/Comentarios/${id}/${index}`, { method: "DELETE" });
      setComentarios((prev) => ({
        ...prev,
        [id]: prev[id].filter((_, i) => i !== index),
      }));
    } catch (error) {
      console.error("Error al eliminar comentario:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "500px", margin: "auto", backgroundColor: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontFamily: "sans-serif" }}>📸 Publicaciones</h2>

      {publicacionesSimuladas.map((post) => (
        <div key={post.id} id={`post-${post.id}`} style={{ backgroundColor: "#fff", borderRadius: "12px", marginBottom: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", overflow: "hidden" }}>
          <img src={post.publicacionFoto} alt="Publicación" style={{ width: "100%", height: "auto", borderBottom: "1px solid #ddd" }} />
          <div style={{ padding: "15px" }}>
            <p style={{ fontWeight: "bold" }}>{post.publicacion}</p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <div style={{ display: "flex", gap: "15px", fontSize: "22px", cursor: "pointer" }}>
                <span onClick={() => toggleLike(post.id)} style={{ opacity: usuariosLikes[post.id] ? 0.5 : 1 }}>❤️</span>
                <span onClick={() => toggleComentario(post.id)}>💬</span>
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                {(post.Likes + (likes[post.id] || 0))} Me gusta
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
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px" }}>
                {comentarioEditando[post.id] === i ? (
                  <input
                    type="text"
                    defaultValue={c}
                    onBlur={(e) => editarComentario(post.id, i, e.target.value)}
                    autoFocus
                  />
                ) : (
                  <p onClick={() => setComentarioEditando((prev) => ({ ...prev, [post.id]: i }))} style={{ cursor: "pointer", fontSize: "14px", color: "#333" }}>
                    💬 {c}
                  </p>
                )}
                <button onClick={() => eliminarComentario(post.id, i)}>❌</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;