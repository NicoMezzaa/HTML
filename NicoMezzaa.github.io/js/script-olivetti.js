function updateContent(numero) {
    
    var titolo = document.getElementById("page-title");
    var paragrafo1 = document.getElementById("paragraph-1");
    var paragrafo2 = document.getElementById("paragraph-2");
    var img1 = document.getElementById("img-1");
    var img2 = document.getElementById("img-2");

    fadeOut(titolo);
    fadeOut(paragrafo1);
    fadeOut(paragrafo2);
    fadeOut(img1);
    fadeOut(img2);

    setTimeout(function(){
        switch (numero) {

        case 1:

            titolo.innerHTML = "LA STORIA DELLA OLIVETTI";
            paragrafo1.innerHTML = "La nascita dell'Olivetti rappresenta un capitolo significativo nella storia dell'industria italiana e dell'innovazione tecnologica. L'Olivetti fu fondata nel 1908 da Camillo Olivetti, nacque come piccolo laboratorio meccanico a Ivrea, una città situata nel nord Italia. Grazie alla combinazione di un design innovativo e una produzione di alta qualità, l'Olivetti riuscì a guadagnare prestigio a livello internazionale e divenne un importante simbolo dell'eccellenza italiana nel campo della tecnologia innovativa. Il suo successo si basava non solo sulla produzione di macchine funzionali, ma anche sull'attenzione all'ergonomia e all'estetica, in modo tale da creare un legame unico tra forma e funzione.";            
            paragrafo2.innerHTML = "Camillo Olivetti, un ingegnere di formazione e visionario imprenditore, aveva una forte passione per la tecnologia. L'Olivetti si differenziava dalle altre aziende per la sua attenzione verso l'ambiente di lavoro e il benessere dei dipendenti. Camillo Olivetti credeva nell'importanza di un ambiente di lavoro stimolante e confortevole, dove i dipendenti potessero esprimere la propria creatività. Questo approccio olistico si rifletteva nella progettazione degli edifici aziendali, caratterizzati da spazi aperti e aree verdi, che favorivano un clima di collaborazione e innovazione.";            
            img1.src = 'img/ivrea-olivetti-programma-101.png';
            img2.src = 'img/ivrea-camillo-olivetti.png';
            break;
        
        case 2:

            titolo.innerHTML = "IL MUSEO STORICO";
            paragrafo1.innerHTML = "Il Museo Storico Olivetti ad Ivrea è una destinazione affascinante per gli amanti della storia e della tecnologia. Attraverso una serie di esposizioni interattive, il museo è in grado di raccontare la storia dell'Olivetti, dalla sua fondazione nel 1908 fino ai giorni nostri. Puoi esplorare la visione di Adriano Olivetti e l'impatto che ha avuto sul design, sull'architettura e sulla società stessa. Potrai ammirare una vasta collezione di macchine da scrivere, calcolatrici e computer che rappresentano l'avanguardia dell'epoca. Inoltre, il museo offre anche una panoramica delle innovazioni tecnologiche dell'Olivetti le quali hanno lasciato un'impronta indelebile nella storia delle macchine per scrivere.";            
            paragrafo2.innerHTML = "Una delle macchine Olivetti più iconiche e influenti è la Olivetti Lettera 22. Introdotto nel 1950, questo modello di macchina per scrivere ha rivoluzionato il concetto di macchina per scrivere domestica. La Olivetti Lettera 22 è diventata un'icona di design, ammirata per la sua estetica e funzionalità, rappresenta un importante punto di svolta nella storia delle macchine per scrivere, lasciando un'impronta duratura nel settore e nella cultura. Grazie alla sua portabilità, facilità d'uso e qualità di scrittura, ha consentito a molte persone di esprimere la propria creatività e produttività ovunque si trovassero. La sua presenza nelle case e negli uffici di tutto il mondo ha contribuito a definire l'immagine della macchina da scrivere e ha ispirato generazioni di giornalisti e professionisti.";            
            img1.src = 'img/ivrea-museo-olivetti.png';     
            img2.src = 'img/ivrea-olivetti-lettera22.png'; 
            break;
    
        case 3:

            titolo.innerHTML = "IL PROGETTO ARDUINO"
            paragrafo1.innerHTML = "Il progetto Arduino di Ivrea ha avuto origine nel 2005 come un'iniziativa volta a creare una piattaforma open-source accessibile per l'elettronica e la prototipazione. L'obiettivo era fornire a designer, artisti, hobbisti e appassionati di tecnologia uno strumento semplice da usare per creare dispositivi interattivi. Grazie alla sua filosofia di condivisione e collaborazione, Arduino ha catalizzato una comunità globale di maker e innovatori che hanno dato vita a innumerevoli progetti e applicazioni creative. L'approccio inclusivo e accessibile di Arduino ha contribuito a democratizzare l'elettronica e ha reso possibile l'emergere di una nuova generazione di creatori digitali.";
            paragrafo2.innerHTML = "Uno degli aspetti del software Arduino che lo rende unico è il suo approccio open-source. Tutti i progetti, i codici sorgente e le specifiche hardware sono liberamente disponibili per la comunità, permettendo a tutte le persone di utilizzare, modificare e condividere le proprie creazioni. Questa filosofia ha favorito lo sviluppo di una vasta comunità di utenti e ha permesso l'evoluzione continua di questa piattaforma. Grazie alla collaborazione e alla condivisione di conoscenze, gli utenti di Arduino hanno la possibilità di imparare dagli altri, contribuire allo sviluppo della tecnologia e creare soluzioni innovative in una modalità di fare insieme che caratterizza la cultura del maker. L'approccio open-source di Arduino ha aperto nuove possibilità per l'innovazione e ha ispirato una generazione di creativi e appassionati di tecnologia. L'ecosistema Arduino ha avuto un impatto significativo nell'ambito dell'elettronica e della prototipazione.";            
            img1.src = 'img/ivrea-arduino-logo.png';     
            img2.src = 'img/ivrea-open-source-logo.png'; 
            break;
        }

        fadeIn(titolo);
        fadeIn(paragrafo1);
        fadeIn(paragrafo2);
        fadeIn(img1);
        fadeIn(img2);
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    var museoInfo = document.querySelector(".museo-info");
    var museoLink = document.querySelector("#museo-link");
    var navLinks = document.querySelectorAll(".nav-link");
  
    museoInfo.style.display = "none";
    var numeroAperturaPagina = 1;
  
    updateContent(numeroAperturaPagina);
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        if (this === museoLink) {
          museoInfo.style.display = "block";
        } else {
          museoInfo.style.display = "none";
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
});