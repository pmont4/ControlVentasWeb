function mostrarVista(idVista) {
    var divElement = document.getElementById(idVista);

    var vistas = document.querySelectorAll('[id^="vista"]');
    vistas.forEach(function(v) {
        v.style.display = 'none';
    });
    
    divElement.style.display = "block";

    var textoInicial = document.getElementById("textoInicial");
    textoInicial.style.display = "none";
}