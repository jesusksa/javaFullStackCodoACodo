// Codigo que valida si no ah seleccionado ninguna opcion y que los campos de imput no esten vacios
function validarCampos(){
    //obtiene el el valor seleccionado del Tipo de producto que quiere
    const producto = document.getElementById("producto").value;

    //valida que en el primer campo no este seleccionado la primera(Option 0) opcion
    if(document.getElementById("producto").selectedIndex == 0){
        alert("No ha seleccionado ningun tipo de Producto")
        return 0;
    }else{
        switch(producto){
            case "Planta": 
                if(document.getElementById("plantas").selectedIndex == 0){
                    alert("Debe seleccionar una Planta");
                    return 0;
                }
            break;
            case "Árbol":
                if(document.getElementById("arboles").selectedIndex == 0){
                    alert("Debe seleccionar un Arbol");
                    return 0;
                }
            break;
            case "Flor":
                if(document.getElementById("flores").selectedIndex == 0){
                    alert("Debe seleccionar una Flor");
                    return 0;
                }
            break;
            case "Cultivo":
                if(document.getElementById("cultivos").selectedIndex == 0){
                    alert("Debe seleccionar un producto");
                    return 0;
                }
            break;
        }
    }

    if(document.getElementById("pago") == 0){
        alert("Debe seleccionar un metodo de pago");
        return 0;
    }

    if(document.getElementById("direccion").length == 0){
        alert("Debe ingresar su domicilio donde entregar el producto");
        return 0;
    }

    if(document.getElementById("contacto").length == 0){
        alert("Debe introdcir un numero de contacto");
        return 0;
    }
    
    alert("Pedido recibido con exito");
    window.location.reload();
}
