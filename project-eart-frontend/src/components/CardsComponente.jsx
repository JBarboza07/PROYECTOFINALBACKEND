import React, { useState, useEffect } from "react";
import "../styles/CardsComponente.css";
import {
  getPublicaciones,
  postDataPublcaciones,
  deletePublicacion,
  editPublicacion,
} from "../../services/llamados";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dy2zlumk8/image/upload";
const UPLOAD_PRESET = "imgUsuarios";

const CardsComponente = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const publicaciones = await getPublicaciones("Publicaciones");
      setPosts(publicaciones);
    }
    fetchPosts();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      // Subir a Cloudinary automáticamente
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        setImageUrl(data.secure_url); // Guardar la URL de la imagen
      } catch (err) {
        console.error("Error al subir imagen a Cloudinary:", err);
      }
    }
  };

  const handleAddPost = async () => {
    if (newPost.trim() && imageUrl) {
      const obj = {
        publicacionFoto: imageUrl,
        publicacion: newPost,
      };

      const res = await postDataPublcaciones("Publicaciones", obj);
      setPosts([...posts, res]);
      setNewPost("");
      setImage(null);
      setImageUrl("");
    }
  };

  const handleDeletePost = async (id) => {
    const success = await deletePublicacion("/api/Publicaciones", id + "/");
    if (success) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const handleEditPost = (post, id) => {
    setEditingPost(post);
    setNewPost(post.publicacion);
    setImageUrl(post.publicacionFoto || "");
    localStorage.setItem("idPublicacion", id);
  };

  const handleUpdatePost = async () => {
    const id = localStorage.getItem("idPublicacion");
    if (editingPost) {
      const objEditar = {
        publicacion: newPost,
        publicacionFoto: imageUrl,
      };
      const updatedPost = await editPublicacion("Publicaciones", id, objEditar);
      if (updatedPost) {
        setPosts(
          posts.map((post) =>
            post.id === parseInt(id)
              ? { ...post, publicacion: newPost, publicacionFoto: imageUrl }
              : post
          )
        );
        setEditingPost(null);
        setNewPost("");
        setImage(null);
        setImageUrl("");
      }
    }
  };

  return (
    <div className="cards-container">
      <h2 className="cards-title">Mis Publicaciones</h2>

      <ul className="card-list">
        {posts.map((post) => (
          <li key={post.id} className="card-item">
            <p className="card-text">{post.publicacion}</p>
            {post.publicacionFoto && (
              <img
                src={post.publicacionFoto}
                alt="Publicación"
                className="card-img"
              />
            )}
            <div className="card-buttons">
              <button
                onClick={() => handleEditPost(post, post.id)}
                className="card-button btn-edit"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="card-button btn-delete"
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
        className="input-text"
      />
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="input-file"
      />
      {editingPost ? (
        <button onClick={handleUpdatePost} className="submit-button">
          Actualizar
        </button>
      ) : (
        <button onClick={handleAddPost} className="submit-button">
          Subir
        </button>
      )}
    </div>
  );
};

export default CardsComponente;


