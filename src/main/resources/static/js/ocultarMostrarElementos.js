document.addEventListener("DOMContentLoaded", function() {
    console.log('JavaScript cargado correctamente');
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

