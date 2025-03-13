function calcularPrimo() {
    const entrada = document.getElementById("entrada").value;
    const texto = document.getElementById("texto");

    if (!entrada) {
        texto.innerHTML = "Por favor, introduce un número.";
        return;
    }

    const numero = parseInt(entrada, 10);
    if (esPrimo(numero)) {
        texto.innerHTML = `${numero} es un número primo`;
    } else {
        texto.innerHTML = `${numero} no es un número primo`;
    }
}

// Función para verificar si un número es primo
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
