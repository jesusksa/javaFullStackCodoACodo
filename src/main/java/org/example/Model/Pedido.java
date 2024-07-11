package org.example.Model;

public class Pedido {
    private Integer idpedidos;
    private String producto;
    private String especie;
    private String formapago;
    private String direccion;
    private String contacto;

    public Pedido() {
    }
    public Pedido(Integer idpedidos, String producto, String especie, String formapago, String direccion, String contacto) {
        this.idpedidos = idpedidos;
        this.producto = producto;
        this.especie = especie;
        this.formapago = formapago;
        this.direccion = direccion;
        this.contacto = contacto;
    }

    public Pedido(String producto, String especie, String formapago, String direccion, String contacto) {
        this.producto = producto;
        this.especie = especie;
        this.formapago = formapago;
        this.direccion = direccion;
        this.contacto = contacto;
    }

    public Integer getIdpedidos() {
        return idpedidos;
    }

    public void setIdpedidos(Integer idpedidos) {
        this.idpedidos = idpedidos;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public String getFormapago() {
        return formapago;
    }

    public void setFormapago(String formapago) {
        this.formapago = formapago;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }
}
