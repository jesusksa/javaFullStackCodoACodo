package org.example.Model;

public class Pedido {
    private Integer id;
    private String tipoProducto;
    private String especieProducto;
    private String formaPago;
    private String direccion;
    private String contacto;

    public Pedido() {
    }
    public Pedido(Integer id, String tipoProducto, String especieProducto, String formaPago, String direccion, String contacto) {
        this.id = id;
        this.tipoProducto = tipoProducto;
        this.especieProducto = especieProducto;
        this.formaPago = formaPago;
        this.direccion = direccion;
        this.contacto = contacto;
    }

    public Pedido(String tipoProducto, String especieProducto, String formaPago, String direccion, String contacto) {
        this.tipoProducto = tipoProducto;
        this.especieProducto = especieProducto;
        this.formaPago = formaPago;
        this.direccion = direccion;
        this.contacto = contacto;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipoProducto() {
        return tipoProducto;
    }

    public void setTipoProducto(String tipoProducto) {
        this.tipoProducto = tipoProducto;
    }

    public String getEspecieProducto() {
        return especieProducto;
    }

    public void setEspecieProducto(String especieProducto) {
        this.especieProducto = especieProducto;
    }

    public String getFormaPago() {
        return formaPago;
    }

    public void setFormaPago(String formaPago) {
        this.formaPago = formaPago;
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
