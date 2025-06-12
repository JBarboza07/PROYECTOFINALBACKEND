import React, { useState, useEffect } from "react";
import {
  getPublicaciones,
  postDataPublcaciones,
  deletePublicacion,
  editPublicacion,
} from "../../services/llamados";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const publicaciones = await getPublicaciones("api/Publicaciones/");
      setPosts(publicaciones);
    }
    fetchPosts();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddPost = async () => {
    if (newPost.trim() && image) {
      const obj = {
        publicacionFoto: "urlimagen",
        publicacion: newPost,
      };

      const res = await postDataPublcaciones("api/Publicaciones/", obj);
      setPosts([...posts, res]);
      setNewPost("");
      setImage(null);
    }
  };

  const handleDeletePost = async (id) => {
    const success = await deletePublicacion("api/Publicaciones", id);
    if (success) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const handleEditPost = (post, id) => {
    setEditingPost(post);
    setNewPost(post.publicacion);
    localStorage.setItem("idPublicacion", id);
  };

  const handleUpdatePost = async () => {
    const id = localStorage.getItem("idPublicacion");
    if (editingPost) {
      const objEditar = {
        publicacion: newPost,
      };
      const updatedPost = await editPublicacion(`api/Publicaciones`, id, objEditar);
      if (updatedPost) {
        setPosts(posts.map(post => post.id === parseInt(id) ? { ...post, publicacion: newPost } : post));
        setEditingPost(null);
        setNewPost("");
      }
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#e8f5e9", // Fondo general
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#0f4c1d", marginBottom: "20px" }}>
        Mis Publicaciones
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              backgroundColor: "#ffffff", // Fondo de cada post
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <p style={{ margin: "0 0 10px", color: "#333" }}>{post.publicacion}</p>
            {post.publicacionFoto && (
              <img
                src={post.publicacionFoto}
                alt="Publicación"
                style={{ maxWidth: "100%", borderRadius: "4px" }}
              />
            )}
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleEditPost(post, post.id)}
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  backgroundColor: "#1976d2",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  marginRight: "10px",
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  backgroundColor: "#d32f2f",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Escribe tu publicación..."
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        style={{
          width: "100%",
          marginBottom: "12px",
        }}
      />
      {editingPost ? (
        <button
          onClick={handleUpdatePost}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: "#0f4c1d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Actualizar
        </button>
      ) : (
        <button
          onClick={handleAddPost}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: "#0f4c1d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Subir
        </button>
      )}
    </div>
  );
};

export default App;
