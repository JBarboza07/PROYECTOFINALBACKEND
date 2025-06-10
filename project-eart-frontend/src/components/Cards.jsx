import React, { useState, useEffect } from "react";
import { getPublicaciones, postDataPublcaciones } from "../../services/llamados";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPublicaciones();
      setPosts(data); // <-- Aquí seteas los posts en el estado
    };
    fetchPosts();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddPost = async () => {
    if (newPost.trim() && image) {
      const now = new Date();
      const today = now.toISOString().split("T")[0]; // YYYY-MM-DD
      const time = now.toTimeString().split(" ")[0]; // HH:MM:SS

      // Crear FormData para subir imagen y texto
      const formData = new FormData();
      formData.append("fechaPublicaion", today);
      formData.append("timePublicacion", time);
      formData.append("publicacionFoto", image); // archivo, no string
      formData.append("publicacion", newPost);

      try {
        const res = await postDataPublcaciones("api/Publicaciones/", formData);
        console.log(res);

        // Actualizar publicaciones después de subir
        const updatedPosts = await getPublicaciones();
        setPosts(updatedPosts);

        // Limpiar campos
        setNewPost("");
        setImage(null);
      } catch (error) {
        console.error("Error al subir la publicación:", error);
      }
    } else {
      alert("Por favor, escribe algo y selecciona una imagen.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>Mis Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.publicacion}</p>
            {post.publicacionFoto && (
              <img
                src={post.publicacionFoto}
                alt="Publicación"
                style={{ maxWidth: "100%", marginTop: "10px" }}
              />
            )}
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
      <button onClick={handleAddPost} style={{ padding: "8px 12px", cursor: "pointer", marginTop: "10px" }}>
        Subir
      </button>
    </div>
  );
};

export default App;
