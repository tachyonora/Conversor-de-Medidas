
/**
 * Converte quilômetros para metros.
 *
 * Fórmula:
 * metros = quilômetros * 1000
 *
 * Exemplos:
 * 1 km -> 1000 m
 * 2.5 km -> 2500 m
 */
function converter(valor) {

    if (typeof valor !== "number") {
        throw new TypeError("O valor deve ser um número.");
    }

    return valor  * 1000;
}

module.exports = converter;