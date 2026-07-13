/**
 * Converte centímetros para metros.
 *
 * Fórmula:
 * metros = centímetros / 100
 *
 * Exemplos:
 * 100 cm -> 1 m
 * 250 cm -> 2.5 m
 */
function converter(valor) {

    if (typeof valor !== "number") {
        throw new TypeError("O valor deve ser um número.");
    }

    return valor / 100;
}

module.exports = converter;