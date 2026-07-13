/**
 * Converte metros para quilômetros.
 *
 * Fórmula:
 * quilômetros = metros / 1000
 *
 * Exemplos:
 * 1000 m -> 1 km
 * 2500 m -> 2.5 km
 */
function converter(valor) {

    if (typeof valor !== "number") {
        throw new TypeError("O valor deve ser um número.");
    }

    return valor / 1000;
}

module.exports = converter;