package org.example.DAO;

import org.example.DB.ConexionDB;
import org.example.Model.Pedido;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
public class PedidoDAO {

    public List<Pedido> View(){
        try {
            Statement statement = ConexionDB.getStatement();
            ResultSet resultados = statement.executeQuery("Select * from pedidos");

            List<Pedido> pedidos = new ArrayList();

            while (resultados.next()){
                Pedido pedido = new Pedido(resultados.getInt("idpedidos"),
                        resultados.getString("producto"),
                        resultados.getString("especie"),
                        resultados.getString("formapago"),
                        resultados.getString("direccion"),
                        resultados.getString("contacto")
                );
            }

            return pedidos;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public Boolean Push(Pedido pedido){
        try {
            Statement statement = ConexionDB.getStatement();
            Integer cantIngresar = statement.executeUpdate("Insert Into pedidos (producto, especie, formapago, direccion, contacto) Values ('"+pedido.getTipoProducto()+
                    "', "+pedido.getEspecieProducto()+
                    "', "+pedido.getFormaPago()+
                    "', "+pedido.getDireccion()+
                    "', "+pedido.getContacto()+"')"
            );
            Boolean ingresoOk = (cantIngresar == 1);
            return ingresoOk;
        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }

    public Boolean Pop(Pedido pedido){
        try {
            Statement statement = ConexionDB.getStatement();
            Integer cantidadBorrar = statement.executeUpdate("Delete From pedidos Where idpedido="+pedido.getId());
            Boolean borradoOk = (cantidadBorrar == 1);
            return borradoOk;
        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
