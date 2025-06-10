import React, { useState, useEffect } from "react";
import { getPublicaciones, postDataPublcaciones } from "../../services/llamados";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);

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
      const now = new Date();
      const defaultTime = now.toTimeString().split(" ")[0]; // "HH:MM:SS"

      const obj = {
        fechaPublicaion: "2025-06-10",
        timePublicacion: defaultTime,
        publicacionFoto: "urlimagen",
        publicacion: newPost,
      };

      console.log(obj);

      const res = await postDataPublcaciones("api/Publicaciones/", obj);
      console.log(res);

      // Actualizar el estado `posts` con la nueva publicación
      setPosts([...posts, res]);

      // Limpiar el formulario
      setNewPost("");
      setImage(null);
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
      <button onClick={handleAddPost} style={{ padding: "8px 12px", cursor: "pointer" }}>
        Subir
      </button>
    </div>
  );
};

export default App;