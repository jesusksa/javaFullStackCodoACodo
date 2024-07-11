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
            <td>${pedido.producto}</td>
            <td>${pedido.especie}</td>
            <td>${pedido.formapago}</td>
            <td>${pedido.direccion}</td>
            <td>${pedido.contacto}</td>
            <td>
              <button>
                <i class="bi bi-trash-fill" onclick="delPedido(${pedido.idpedidos})"></i>
              </button>  
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