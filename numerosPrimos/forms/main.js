document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga del formulario

    const entrada = document.getElementById("entrada").value;
    const texto = document.getElementById("texto");

    if (esPrimo(entrada)) {
        texto.innerHTML = `${entrada} es un número primo`;
    } else {
        texto.innerHTML = `${entrada} no es un número primo`;
    }
});

// Función para verificar si un número es primo
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
