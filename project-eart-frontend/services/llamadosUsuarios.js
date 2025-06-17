async function postData(endpoint,obj) {
  const peticion = await fetch(`http://127.0.0.1:8000/api/${endpoint}`, {
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

async function getData(endpoint) {
    const peticion = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`)
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
}


 
export { postData, getData }