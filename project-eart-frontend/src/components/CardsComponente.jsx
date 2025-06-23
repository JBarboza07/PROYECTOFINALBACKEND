import React, { useState, useEffect } from "react";
import {
  getPublicaciones,
  postDataPublcaciones,
  deletePublicacion,
  editPublicacion,
} from "../services/llamados";

const CardsComponente = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      console.log("Fetching posts...");
      
      const publicaciones = await getPublicaciones("Publicaciones");
      setPosts(publicaciones);
      console.log(publicaciones);
    }
    fetchPosts();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddPost = async () => {
    if (newPost.trim() && image) {
      const obj = {
        publicacionFoto: "urlimagen", // TODO: aquí debes subir realmente la imagen o usar FileReader
        publicacion: newPost,
      };

      const res = await postDataPublcaciones("Publicaciones", obj);
      setPosts([...posts, res]);
      setNewPost("");
      setImage(null);
    }
  };

  const handleDeletePost = async (id) => {
    const success = await deletePublicacion("/api/Publicaciones", id+"/");
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
      const updatedPost = await editPublicacion("Publicaciones", id, objEditar);
      if (updatedPost) {
        setPosts(
          posts.map((post) =>
            post.id === parseInt(id)
              ? { ...post, publicacion: newPost }
              : post
          )
        );
        setEditingPost(null);
        setNewPost("");
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

