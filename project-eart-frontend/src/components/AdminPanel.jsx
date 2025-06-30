import React, { useEffect, useState } from 'react';
import '../styles/AdminPanel.css'; // puedes adaptar el estilo con tus colores verdes/naturales
import { getData } from '../../services/llamadosUsuarios'; // asegúrate de tener este servicio configurado

function AdminPanel() {
  const [usuarios, setUsuarios] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usuariosData = await getData('/users'); // ajusta la ruta según tu backend
      const publicacionesData = await getData('/publicaciones'); // ajusta también esta ruta
      setUsuarios(usuariosData);
      console.log(usuariosData);
      
      setPosts(publicacionesData);
    }

    fetchData();
  }, []);

  const eliminarPublicacion = async (id) => {
    // Llama al backend para eliminar
    alert(`Eliminar publicación con ID: ${id}`);
    // Aquí deberías agregar la lógica para actualizar la lista
  };

  return (
    <div className="admin-panel">
      <h1>🌍 Panel de Administración - Project Earth</h1>

      <section>
        <h2>👤 Usuarios registrados</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Fecha de registro</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.nombreUsuario}</td>
                <td>{user.clave}</td>
                <td>{user.edad}</td>
                <td>{new Date(user.fechaRegistro).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>🖼️ Publicaciones</h2>
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
                <td><img src={post.imagenURL} alt="Post" width="100" /></td>
                <td>{post.usuario}</td>
                <td>{new Date(post.fecha).toLocaleDateString()}</td>
                <td>{post.likes}</td>
                <td>{post.comentarios?.length || 0}</td>
                <td>
                  <button onClick={() => eliminarPublicacion(post.id)}>❌ Eliminar</button>
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
