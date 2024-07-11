document.addEventListener("DOMContentLoaded", function() {
    function toggleCarouselVisibility() {
        var contenedor2 = document.getElementById("contenedor2");
        if (window.innerWidth < 800) {
            contenedor2.style.display = "none";
        } else {
            contenedor2.style.display = "block";
        }
    }

    // Run the function on initial load
    toggleCarouselVisibility();

    // Run the function whenever the window is resized
    window.addEventListener("resize", toggleCarouselVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
    function toggleCarouselVisibility() {
        var contenedor3 = document.getElementById("contenedor3");
        if (window.innerWidth < 800) {
            contenedor3.style.display = "block";
        } else {
            contenedor3.style.display = "none";
        }
    }

    // Run the function on initial load
    toggleCarouselVisibility();

    // Run the function whenever the window is resized
    window.addEventListener("resize", toggleCarouselVisibility);
});

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
            case "plantas":
                formPlantas.style.display = "flex";
                break;
            case "arboles":
                formArboles.style.display = "flex";
                break;
            case "flores":
                formFlores.style.display = "flex";
                break;
            case "plantacion":
                formCultivo.style.display = "flex";
                break;
        }
    });
});