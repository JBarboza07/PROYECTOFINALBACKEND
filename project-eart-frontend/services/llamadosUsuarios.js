async function postData(endpoint,obj) {
  const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(obj)
  });
  const respuesta = await peticion.json();
  console.log(respuesta);
  return respuesta;
}

async function getData(endpoint) {
    const peticion = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
}

async function deleteUsuarios(endpoint, id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        if (response.ok) {
            console.log(`Reacción con ID ${id} eliminada correctamente.`);
            return true; // Retorna true si la eliminación fue exitosa
        } else {
            console.error("Error al eliminar reacción:", response.status);
            return false; // Retorna false si hay un error
        }
    } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        return false;
    }
}


async function getDataUnico(endpoint,id) {
    const peticion = await fetch(`http://127.0.0.1:8000/api/${endpoint}/${id}/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
}



 
export { postData, getData, getDataUnico,deleteUsuarios };