async function PostComentarios(endpoint,obj) {
  const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });
  const respuesta = await peticion.json();
  console.log(respuesta);
  return respuesta;
}

async function getComentarios(endpoint) {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`)
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
}
async function deleteComentarios(endpoint, id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            console.log(`Comentario con ID ${id} eliminado correctamente.`);
            return true; // Retorna true si la eliminación fue exitosa
        } else {
            console.error("Error al eliminar comentario:", response.status);
            return false; // Retorna false si hay un error
        }
    } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        return false;
    }
}


 async function editComentarios(endpoint, id, updatedData) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar la publicación: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en editPublicacion:", error);
    return null;
  }
}

export { PostComentarios, getComentarios, deleteComentarios, editComentarios }