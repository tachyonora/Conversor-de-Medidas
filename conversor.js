const unidades = {
  nm: { nome: "Nanômetro", simbolo: "nm", fatorEmMetros: 1e-9 },
  um: { nome: "Micrômetro", simbolo: "µm", fatorEmMetros: 1e-6 },
  mm: { nome: "Milímetro", simbolo: "mm", fatorEmMetros: 0.001 },
  cm: { nome: "Centímetro", simbolo: "cm", fatorEmMetros: 0.01 },
  dm: { nome: "Decímetro", simbolo: "dm", fatorEmMetros: 0.1 },
  m: { nome: "Metro", simbolo: "m", fatorEmMetros: 1 },
  dam: { nome: "Decâmetro", simbolo: "dam", fatorEmMetros: 10 },
  hm: { nome: "Hectômetro", simbolo: "hm", fatorEmMetros: 100 },
  km: { nome: "Quilômetro", simbolo: "km", fatorEmMetros: 1000 },
  pol: { nome: "Polegada", simbolo: "in", fatorEmMetros: 0.0254 },
  pe: { nome: "Pé", simbolo: "ft", fatorEmMetros: 0.3048 },
  jarda: { nome: "Jarda", simbolo: "yd", fatorEmMetros: 0.9144 },
  milha: { nome: "Milha", simbolo: "mi", fatorEmMetros: 1609.344 },
  milhaNautica: {
    nome: "Milha náutica",
    simbolo: "nmi",
    fatorEmMetros: 1852
  }
};

function validarValor(valorDigitado) {
  if (typeof valorDigitado === "number") {
    if (!Number.isFinite(valorDigitado)) {
      throw new Error("O valor informado não é válido.");
    }

    return valorDigitado;
  }

  if (typeof valorDigitado !== "string") {
    throw new Error("O valor precisa ser um número.");
  }

  const valorLimpo = valorDigitado.trim();

  if (valorLimpo === "") {
    throw new Error("Digite um valor para realizar a conversão.");
  }

  const formatoValido = /^[-+]?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/;

  if (!formatoValido.test(valorLimpo)) {
    throw new Error(
      "Valor inválido. Digite somente números, usando vírgula ou ponto."
    );
  }

  const numero = Number(valorLimpo.replace(",", "."));

  if (!Number.isFinite(numero)) {
    throw new Error("O número informado não é válido.");
  }

  return numero;
}

function validarUnidade(codigoUnidade) {
  if (!unidades[codigoUnidade]) {
    throw new Error(
      `Unidade "${codigoUnidade}" inválida.`
    );
  }
}

function converterMedida(valorDigitado, unidadeOrigem, unidadeDestino) {
  const valor = validarValor(valorDigitado);

  validarUnidade(unidadeOrigem);
  validarUnidade(unidadeDestino);

  const origem = unidades[unidadeOrigem];
  const destino = unidades[unidadeDestino];

  const valorEmMetros = valor * origem.fatorEmMetros;
  const resultado = valorEmMetros / destino.fatorEmMetros;

  return resultado;
}

function formatarNumero(numero) {
  if (numero === 0) {
    return "0";
  }

  const valorAbsoluto = Math.abs(numero);

  if (valorAbsoluto >= 1e15 || valorAbsoluto < 1e-9) {
    return numero.toExponential(10).replace(".", ",");
  }

  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 12
  }).format(numero);
}

function gerarResultado(valor, unidadeOrigem, unidadeDestino) {
  try {
    const resultado = converterMedida(
      valor,
      unidadeOrigem,
      unidadeDestino
    );

    const origem = unidades[unidadeOrigem];
    const destino = unidades[unidadeDestino];

    return `${formatarNumero(validarValor(valor))} ${origem.simbolo} = ` +
      `${formatarNumero(resultado)} ${destino.simbolo}`;
  } catch (erro) {
    return `Erro: ${erro.message}`;
  }
}

// Exemplos
console.log(gerarResultado("1000", "m", "km"));
console.log(gerarResultado("15,5", "km", "m"));
console.log(gerarResultado("10", "pol", "cm"));
console.log(gerarResultado("abc", "m", "km"));