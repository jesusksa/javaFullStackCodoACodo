const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
  };
  

  function getPedidos() {
    const respuesta = fetch(`http://localhost:8080/listarPedidos`);

    //2 invocar
    respuesta
        .then(response => response.json())
        .then(response => renderPedidos(response))//fulfilled
        .catch(error => dibujarError(error))//rejected
  }

  function renderPedidos(response) {
    const pedidos = response;
    let rows = '';
    for(let pedido of pedidos) {
        rows += `
        <tr>
            <td class="text-center">${pedido.producto}</td>
            <td class="text-center">${pedido.especie}</td>
            <td class="text-center">${pedido.formapago}</td>
            <td class="text-center">${pedido.direccion}</td>
            <td class="text-center">${pedido.contacto}</td>
            <td class="text-center">
              <button onclick="delPedido(${pedido.idpedidos})">Borrar Pedido</button>  
            </td>
        </tr>
        `
    }
    // document.getElementById("peliculas").innerHTML = rows;
    document.querySelector('#pedidos').innerHTML = rows;
}

function delPedido(id) {
  //    const respuesta = fetch(`https://api.themoviedb.org/3/movie/top_rated`, options);
      const respuesta = fetch(`http://localhost:8080/delPedido/${id}`, {
        method: 'DELETE',
      });
  
      //2 invocar
      respuesta
          .then(response => okDel(response))//fulfilled
          .catch(error => dibujarError(error))//rejected
    }

function okDel(response) {
  document.querySelector('#pedidos').innerHTML = "Se eliminó exitosamente";
}

function dibujarError(error) {
  document.querySelector('#pedidos').innerHTML = error;
}

formNuevoPedido = document.getElementById('formPedido');
formNuevoPedido.addEventListener('submit',async (event) =>{
  event.preventDefault();
  const producto = document.getElementById('producto').value;
  const especie = document.getElementById('plantas').value || document.getElementById('arboles').value || document.getElementById('flores').value || document.getElementById('cultivos').value;
  const formaPago = document.getElementById('pago').value;
  const direccion = document.getElementById('direccion').value;
  const contacto = document.getElementById('contacto').value;

  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      producto: producto,
      especie: especie,
      formapago: formaPago,
      direccion: direccion,
      contacto: contacto
    })
  };

  const reponse = await fetch('http://localhost:8080/addPedido', options);
  console.log(reponse);
  const data = await reponse.json();


  if (response.status === 201 && validarCampos()) {
    alert('Pedido agregado correctamente');
    // que se recargue la pagina para ver la pelicula agregada
    location.reload();
  } else {
      alert('Error al agregar la pelicula');
  }
});