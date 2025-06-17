import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "../Styles/Cards.css";

const publicacionesSimuladas = [
  {
    id: 2,
    publicacion: "Café y libros, la mejor combinación ☕📖",
    publicacionFoto: "https://imgs.search.brave.com/ANXB5qZzm03XogmObhtIKrcJ6Ekt1aNbZPNblRJ7jHg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5hY29tdW5pY2Eu/dW5hLmFjLmNyL2lt/YWdlcy9HdWlsbGVy/bW8vMjAyNS9WYXJp/YXMvQW5pdmVyc2Fy/aW8lMjBNQ1AlMjAx/LmpwZw",
    Likes: 232
  },


];

const App = () => {
  const [likes, setLikes] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [mostrarInput, setMostrarInput] = useState({});
  const [usuariosLikes, setUsuariosLikes] = useState({});
  const [nuevosComentarios, setNuevosComentarios] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resLikes = await fetch("/api/likes");
        const dataLikes = await resLikes.json();
        setLikes(dataLikes);

        const resComentarios = await fetch("/api/comentarios");
        const dataComentarios = await resComentarios.json();
        setComentarios(dataComentarios);

        // Opcional: si recibes info de qué posts ya liked el usuario, inicializa usuariosLikes aquí
        // Ejemplo: setUsuariosLikes(dataUsuariosLikes);
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
          [id]: Math.max((prev[id] || 0) + 1, 0),
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

  const agregarComentario = async (id) => {
    const texto = nuevosComentarios[id];
    if (!texto?.trim()) return;
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
      setNuevosComentarios((prev) => ({ ...prev, [id]: "" }));
    } catch (error) {
      console.error("Error al agregar comentario:", error);
    }
  };

  return (
    <div className="interacciones-container">
      <h2 className="interacciones-titulo">📸 Publicaciones</h2>

      {publicacionesSimuladas.map((post) => (
        <div key={post.id} className="interaccion-post">
          <img
            src={post.publicacionFoto}
            alt="Publicación"
            className="interaccion-img"
          />
          <div className="interaccion-contenido">
            <p>{post.publicacion}</p>

            <div className="interaccion-actions">
              <div className="interaccion-buttons">
                <span
                  onClick={() => toggleLike(post.id)}
                  className="interaccion-like"
                  style={{ cursor: "pointer" }}
                  aria-label="Me gusta"
                >
                  {usuariosLikes[post.id] ? (
                    <FavoriteIcon style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon style={{ color: "#4e342e" }} />
                  )}
                </span>
                <span
                  onClick={() => toggleComentario(post.id)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  aria-label="Comentar"
                >
                  <ChatBubbleOutlineIcon style={{ color: "#4e342e" }} />
                </span>
              </div>
            <div style={{ fontSize: "14px", color: "#555" }}>
              {(post.Likes + (likes[post.id] || 0))} Me gusta
              </div>

            </div>

            {mostrarInput[post.id] && (
              <div className="interaccion-input">
                <input
                  type="text"
                  placeholder="Escribe un comentario..."
                  value={nuevosComentarios[post.id] || ""}
                  onChange={(e) =>
                    setNuevosComentarios((prev) => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      agregarComentario(post.id);
                    }
                  }}
                />
                <button onClick={() => agregarComentario(post.id)}>
                  Publicar
                </button>
              </div>
            )}

            {comentarios[post.id]?.map((c, i) => (
              <p key={i} className="interaccion-comentario-texto">
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
