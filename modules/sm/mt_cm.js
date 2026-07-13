/**
 * Converte metros para centímetros.
 *
 * Fórmula:
 * centímetros = metros * 100
 *
 * Exemplos:
 * 1 m -> 100 cm
 * 2.5 m -> 250 cm
 */

function converter(valor) {

    if (typeof valor !== "number") {
        throw new TypeError("O valor deve ser um número.");
    }

    return valor * 100;
}

module.exports = converter;