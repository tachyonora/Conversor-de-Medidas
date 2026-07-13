import { ft_mt, mt_ft, ml_km, km_ml } from './utils/index.js';

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
    const result = mt_ft(n);  // may be ft_mt, ml_km or km_ml as well
    addResult(result);
}
