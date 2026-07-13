function mt_ft(mt) {
    if (mt === Infinity || mt === -Infinity) return mt;
    if (!Number.isFinite(mt)) return NaN;

    const conversion_ratio = 3.28084;
    return mt * conversion_ratio;
}

let addResult = result => {
    const answer = document.createTextNode(String(result));

    const newDiv = document.createElement("div");
    newDiv.classList.add("result");
    newDiv.appendChild(answer);

    const finalResult = document.getElementById("final-result");
    finalResult.prepend(newDiv);
}

function convert() {
    const n = document.getElementById('conversion-input').valueAsNumber;
    const result = mt_ft(n);
    addResult(result);
}
