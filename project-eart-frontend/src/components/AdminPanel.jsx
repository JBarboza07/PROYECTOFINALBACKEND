import React, { useEffect, useState } from 'react';
import '../styles/AdminPanel.css';
import { getData, deleteData } from '../services/llamadosUsuarios'; // Asegúrate de tener deleteData configurado

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
      await deleteData(`publicaciones/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      alert("Publicación eliminada");
    } catch (error) {
      console.error("Error al eliminar publicación:", error);
      alert("Error al eliminar publicación");
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este usuario?")) return;
    try {
      await deleteData(`users/${id}`);
      setUsuarios(usuarios.filter((user) => user.id !== id));
      alert("Usuario eliminado");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      alert("No se pudo eliminar el usuario");
    }
  };

  const editarUsuario = (usuario) => {
    alert(`Editar usuario: ${usuario.username}`);
    // Aquí puedes abrir un modal o navegar a otra vista para editarlo
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.fechaRegistro ? new Date(usuario.fechaRegistro).toLocaleDateString() : '-'}</td>
                <td>
                  <button className="btn-edit" onClick={() => editarUsuario(usuario)}>✏️ Editar</button>
                  <button className="btn-delete" onClick={() => eliminarUsuario(usuario.id)}>🗑️ Eliminar</button>
                </td>
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
                  <button className="btn-delete" onClick={() => eliminarPublicacion(post.id)}>❌ Eliminar</button>
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
