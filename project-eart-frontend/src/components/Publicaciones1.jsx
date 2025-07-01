import React, { useEffect, useState } from "react";
import "../Styles/Publicaciones.css";

function Post({ post, onUpdate }) {
  const [commentText, setCommentText] = useState("");

  const toggleField = (field) => {
    const updated = {
      ...post,
      [field]: !post[field],
      likesCount:
        field === "likedByUser"
          ? post.likedByUser
            ? post.likesCount - 1
            : post.likesCount + 1
          : post.likesCount,
    };
    onUpdate(updated);
  };

  const submitComment = async(e) => {
    e.preventDefault();
    const text = commentText.trim();
    if (!text) return;

    const updated = {
      ...post,
      comments: [...(post.comments || []), { id: Date.now(), author: "Tú", text }],
    };
    const enviarComentario = await fetch("http://127.0.0.1:8000/api/Comentarios/",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"comentarios":commentText})
    })
    console.log(enviarComentario);
    
    onUpdate(updated);
    setCommentText("");
  };

  return (
    <div className="post-card">
      <p className="post-text">{post.publicacion}</p>
      {post.publicacionFoto && (
        <img src={post.publicacionFoto} alt="Publicación" className="post-img" />
      )}

      <div className="post-actions">
        <button onClick={() => toggleField("likedByUser")} className="btn">
          {post.likedByUser ? "💚 Unlike" : "🤍 Like"} ({post.likesCount || 0})
        </button>
        <button onClick={() => toggleField("savedByUser")} className="btn">
          {post.savedByUser ? "🌿 Guardado" : "🌱 Guardar"}
        </button>
      </div>

      <div className="comment-section">
        {(post.comments || []).map((c) => (
          <div key={c.id} className="comment">
            <strong>{c.author}:</strong> {c.text}
          </div>
        ))}

        <form onSubmit={submitComment} className="comment-form">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Añade un comentario…"
            className="comment-input"
          />
          <button type="submit" className="btn-comment">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function traePosts() {
      const response = await fetch("http://127.0.0.1:8000/api/Publicaciones/");
      const data = await response.json();
      setPosts(data);
    }
    traePosts();
  }, []);

  const updatePost = (updated) => {
    setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  return (
    <div className="feed-container">
      <h2 className="feed-title">🌍 Publicaciones Ambientales</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} onUpdate={updatePost} />
      ))}
    </div>
  );
}


