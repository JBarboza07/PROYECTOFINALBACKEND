import React, { useState, useEffect } from "react";
import { getPublicaciones, postDataPublcaciones, deletePublicacion, editPublicacion } from "../../services/llamados";

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(null); // Estado para editar una publicación

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

      console.log(obj);

      const res = await postDataPublcaciones("api/Publicaciones/", obj);
      console.log(res);

      setPosts([...posts, res]);

      setNewPost("");
      setImage(null);
    }
  };

  const handleDeletePost = async (id) => {
    const success = await deletePublicacion("api/Publicaciones", id);
    if (success) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleEditPost = (post,id) => {
    setEditingPost(post)
    setNewPost(post.publicacion);
    localStorage.setItem("idPublicacion", id);
  };

  const handleUpdatePost = async (id) => {
     if (editingPost) {
      const objEditar = {
        publicacion: newPost
      }
      const success = await editPublicacion(`api/Publicaciones`,id, objEditar);

      // if (success) {
      //   setPosts(posts.map(post => post.id === editingPost.id ? updatedPost : post));
      //   setEditingPost(null);
      //   setNewPost("");
      // }
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>Mis Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.publicacion}</p>
            {post.publicacionFoto && <img src={post.publicacionFoto} alt="Publicación" style={{ maxWidth: "100%" }} />}
            <button 
              onClick={() => {
                handleEditPost(post)
                localStorage.setItem("idPublicacion", post.id);
              }} 
              style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "blue", color: "white", border: "none", marginLeft: "10px" }}>
              Editar
            </button>
            <button 
              onClick={() => handleDeletePost(post.id)} 
              style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "red", color: "white", border: "none", marginLeft: "10px" }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Escribe tu publicación..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {editingPost ? (
        <button onClick={handleUpdatePost(localStorage.getItem("idPublicacion"))} style={{ padding: "8px 12px", cursor: "pointer", backgroundColor: "green", color: "white" }}>
          Actualizar
        </button>
      ) : (
        <button onClick={(e)=>handleAddPost()} style={{ padding: "8px 12px", cursor: "pointer" }}>
          Subir
        </button>
      )}
    </div>
  );
};

export default Cards;