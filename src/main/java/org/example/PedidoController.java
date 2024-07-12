package org.example;

import java.util.List;

import org.example.DAO.PedidoDAO;
import org.example.Model.Pedido;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PedidoController {
    @CrossOrigin(origins = "*")
    @GetMapping("/listarPedidos")
    public List<Pedido> listarPedidos() {
        PedidoDAO peliculaDAO=new PedidoDAO();
        return peliculaDAO.View();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/addPedido")
    public void addPedido(@RequestBody String producto, String especie, String formapago, String direccion, String contacto) {
        Pedido pedido = new Pedido(producto, especie, formapago, direccion, contacto);
        PedidoDAO pedidoDAO = new PedidoDAO();
        System.out.println(pedido);
        pedidoDAO.Push(pedido);

    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/delPedido/{id}")
    public void delPedido(@PathVariable("id") Integer id) {
        Pedido pedido = new Pedido();
        pedido.setIdpedidos(id);
        PedidoDAO pedidoDAO = new PedidoDAO();
        pedidoDAO.Pop(pedido);

    }
}
