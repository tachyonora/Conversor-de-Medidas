function converter(valor) {

    if (typeof valor !== "number") {
        throw new TypeError("O valor deve ser um número.");
    }

    return valor / 100;
}

module.exports = converter;