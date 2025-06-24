import React, { useEffect, useState } from 'react';
import '../styles/AdminPanel.css';
import { getData } from '../services/llamadosUsuarios';

function AdminPanel() {
  const [usuarios, setUsuarios] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const usuariosData = await getData('users');
        const publicacionesData = await getData('Publicaciones');
        setUsuarios(usuariosData);
        
        setPosts(publicacionesData);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    }
    fetchData();
  }, []);

  const eliminarPublicacion = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar esta publicación?")) return;
    try {
      // Asumiendo que tienes un servicio deletePublicacion
      await getData(`/publicaciones/${id}`, { method: 'DELETE' });
      setPosts(posts.filter((post) => post.id !== id));
      alert("Publicación eliminada");
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar publicación");
    }
  };

  return (
    <div className="admin-panel">
      <h1 className="panel-title">🌍 Panel de Administración - Project Earth</h1>

      <section className="admin-section">
        <h2 className="section-title">👥 Usuarios registrados</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Registro</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.fechaRegistro ? new Date(user.fechaRegistro).toLocaleDateString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="admin-section">
        <h2 className="section-title">🖼️ Publicaciones</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Likes</th>
              <th>Comentarios</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  {post.imagenURL ? (
                    <img src={post.imagenURL} alt="Post" className="post-img" />
                  ) : (
                    "—"
                  )}
                </td>
                <td>{post.usuario}</td>
                <td>{new Date(post.fecha).toLocaleDateString()}</td>
                <td>{post.likes ?? 0}</td>
                <td>{Array.isArray(post.comentarios) ? post.comentarios.length : '-'}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => eliminarPublicacion(post.id)}
                  >
                    ❌ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminPanel;
