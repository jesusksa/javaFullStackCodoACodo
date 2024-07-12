document.addEventListener("DOMContentLoaded", function() {
    const formProducto = document.getElementById("producto");
    const formPlantas = document.getElementById("form-plantas");
    const formArboles = document.getElementById("form-arboles");
    const formFlores = document.getElementById("form-flores");
    const formCultivo = document.getElementById("form-cultivo");

    // Inicialmente ocultar todos los formularios específicos
    formPlantas.style.display = "none";
    formArboles.style.display = "none";
    formFlores.style.display = "none";
    formCultivo.style.display = "none";

    // Mostrar el formulario correspondiente al seleccionar un producto
    formProducto.addEventListener("change", function() {
        formPlantas.style.display = "none";
        formArboles.style.display = "none";
        formFlores.style.display = "none";
        formCultivo.style.display = "none";
        switch (formProducto.value) {
            case "Planta":
                formPlantas.style.display = "flex";
                break;
            case "Árbol":
                formArboles.style.display = "flex";
                break;
            case "Flor":
                formFlores.style.display = "flex";
                break;
            case "Cultivo":
                formCultivo.style.display = "flex";
                break;
        }
    });
});