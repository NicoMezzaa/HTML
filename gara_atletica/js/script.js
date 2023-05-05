var lblAt1 = document.getElementById("atleta 1");
var lblAt2 = document.getElementById("atleta 2");
var lblAt3 = document.getElementById("atleta 3");

var tmpAt1 = document.getElementById("tempo 1");
var tmpAt2 = document.getElementById("tempo 2");
var tmpAt3 = document.getElementById("tempo 3");

var message = document.getElementById("message");

var btnVincitore = document.getElementById("button");

btnVincitore.addEventListener('click', function(){
 
    var tmp1 = tmpAt1.value;
    var tmp2 = tmpAt2.value;
    var tmp3 = tmpAt3.value;
    
    if (tmp1 == "" || tmp2 == "" || tmp3 == "" || lblAt1.value == "" || lblAt2.value == "" || lblAt3.value == "") {
        message.innerText = "Errore, compilare tutti i campi!";
    } else if (tmp1 == tmp2 && tmp2 == tmp3) {
        message.innerText = "Pareggio! tutti gli atleti hanno lo stesso tempo";
    } else {
        if (tmp1 < tmp2 && tmp1 < tmp3) message.innerText = "Il vincitore della gara e' " + lblAt1.value + " con un tempo di " + tmp1 + " secondi";
        if (tmp2 < tmp1 && tmp2 < tmp3) message.innerText = "Il vincitore della gara e' " + lblAt2.value + " con un tempo di " + tmp2 + " secondi";
        if (tmp3 < tmp1 && tmp3 < tmp2) message.innerText = "Il vincitore della gara e' " + lblAt3.value + " con un tempo di " + tmp3 + " secondi";
    }
});