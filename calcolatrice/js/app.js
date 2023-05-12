let elNum1 = document.getElementById("n1");
let elNum2 = document.getElementById("n2");
let elBtnSomma = document.getElementById("+");
let elBtnSottrai = document.getElementById("-");
let elBtnMoltiplica = document.getElementById("*");
let elBtnDividi = document.getElementById("/");
let elRes = document.getElementById("res");

elBtnSomma.addEventListener('click', function(){
    let n1= parseInt(elNum1.value);
    let n2= parseInt(elNum2.value);

    elRes.innerText = "Risultato: " + (n1 + n2);
});

elBtnSottrai.addEventListener('click', function(){
    let n1= parseInt(elNum1.value);
    let n2= parseInt(elNum2.value);

    elRes.innerText = "Risultato: " + (n1 - n2);
});

elBtnMoltiplica.addEventListener('click', function(){
    let n1= parseInt(elNum1.value);
    let n2= parseInt(elNum2.value);

    elRes.innerText = "Risultato: " + (n1 * n2);
});

elBtnDividi.addEventListener('click', function(){
    let n1= parseInt(elNum1.value);
    let n2= parseInt(elNum2.value);

    if (n1 == 0 && n2 == 0) elRes.innerText = "Indeterminato";
    else elRes.innerText = "Risultato: " + (n1 / n2);
});