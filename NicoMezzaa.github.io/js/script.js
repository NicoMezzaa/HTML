function fadeIn(element) {
  element.classList.remove("fade-out");
  element.classList.add("fade-in");
}

function fadeOut(element) {
  element.classList.remove("fade-in");
  element.classList.add("fade-out");
}

function resetMenuState() {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  navbarCollapse.classList.remove('show');
}

function updateContent(numero) {
  var titolo = document.getElementById("page-title");
  var descrizioneIniziale = document.getElementById("page-description");
  var paragrafo1 = document.getElementById("paragraph-1");
  var paragrafo2 = document.getElementById("paragraph-2");
  var paragrafo3 = document.getElementById("paragraph-3");
  var img1 = document.getElementById("img-1");
  var img2 = document.getElementById("img-2");
  var img3 = document.getElementById("img-3");
  var img4 = document.getElementById("img-4");

  fadeOut(titolo);
  fadeOut(descrizioneIniziale);
  fadeOut(paragrafo1);
  fadeOut(paragrafo2);
  fadeOut(paragrafo3);
  fadeOut(img1);
  fadeOut(img2);
  fadeOut(img3);
  fadeOut(img4);

  setTimeout(function () {
    switch (numero) {
      case 1:
        titolo.innerHTML = "LA STORIA DI IVREA";
        descrizioneIniziale.innerHTML = "La città di Ivrea ha una storia che affonda le radici nell'epoca romana, quando svolgeva un ruolo cruciale come stazione lungo una strada che collegava Milano a Torino. Nel corso dei secoli, Ivrea ha assunto un'importanza sempre maggiore diventando un centro politico, culturale ed economico di rilievo. Durante il periodo medievale, Ivrea si elevò a capitale di un potente Marchesato, acquisendo una posizione di grande prestigio politico. La città fu governata da diverse famiglie nobiliari, tra cui i Savoia, i Visconti e i Valperga. In quel periodo furono edificati importanti monumenti storici che ancora oggi testimoniano la sua grandezza passata, come il maestoso Castello di Ivrea e la splendida Cattedrale di Santa Maria Assunta.";
        paragrafo1.innerHTML = "La città divenne un centro di scambi commerciali e di attività artigianali, contribuendo così alla sua crescita economica. Durante questo periodo, furono costruite imponenti mura difensive per proteggere la città, e le sue strade si popolarono di mercanti, artigiani e nobili. La presenza di un'importante nobiltà locale, come i Savoia e i Valperga, contribuì anche alla crescita economica di Ivrea. La nobiltà non solo si occupava di affari e commercio, ma sostenne anche lo sviluppo di attività commerciali e artigianali nella città.";
        paragrafo2.innerHTML = "Negli anni successivi, Ivrea continuò a essere un importante centro culturale. La città ospitava scuole, istituzioni religiose e artisti di talento. Furono promossi studi umanistici e scientifici, e si diffusero opere d'arte e architettoniche di grande pregio. Ivrea fu un luogo di incontro per scienziati, filosofi e letterati, che contribuirono alla diffusione delle idee rinascimentali. La sua posizione strategica, tra Milano e Torino, la rese anche un punto di passaggio per le carovane commerciali che viaggiavano lungo la strada principale.";
        paragrafo3.innerHTML = "Durante il periodo napoleonico, Napoleone Bonaparte invase Ivrea nel 1800 e la integrò nel Dipartimento della Doire dell'Impero francese. Furono attuate riforme politiche e amministrative, con l'introduzione di nuove leggi e opere pubbliche. Ivrea divenne un importante centro militare e subì l'influenza della presenza francese. Tuttavia, l'occupazione francese fu di breve durata e la città tornò sotto il controllo del Regno di Sardegna nel 1814.";
        img1.src = 'img/ivrea-medioevo.png';
        img2.src = 'img/ivrea-mura.png';
        img3.src = 'img/ivrea-posizione.png';
        img4.src = 'img/ivrea-napoleone.png';
        break;

      case 2:
        titolo.innerHTML = "FESTIVITA' CELEBRATE AD IVREA";
        descrizioneIniziale.innerHTML = "Ad Ivrea sono celebrate diverse festività che hanno radici storiche e coinvolgono attivamente la comunità locale. Queste festività, con le loro tradizioni uniche, permettono agli abitanti di Ivrea di celebrare la loro storia, la loro cultura e le loro radici, coinvolgendo attivamente la comunità e creando un senso di appartenenza e identità condivisa.";
        paragrafo1.innerHTML = "Il Carnevale di Ivrea è una festa famosa in tutta Italia ed è considerato uno dei più antichi e suggestivi. La caratteristica distintiva di questo Carnevale è la famosa Battaglia delle Arance, un evento che richiama migliaia di partecipanti ogni anno. Durante la battaglia, le squadre di aranceri si sfidano lanciandosi arance a vicenda per le strade della città. Questa tradizione unica ha origini antiche e simboleggia la lotta del popolo contro l'oppressione.";
        paragrafo2.innerHTML = "Oltre alla famosa Battaglia delle Arance, il Carnevale di Ivrea include una serie di eventi tradizionali che richiamano le radici storiche della festa. Ci sono sfilate di carri allegorici decorati con grande cura e abilità artigianale, in cui i partecipanti indossano costumi elaborati e rappresentano scene storiche e mitologiche. Durante il Carnevale storico, le strade si trasformano in un vero e proprio palcoscenico dove la storia prende vita attraverso le rappresentazioni e le performance degli abitanti di Ivrea.";
        paragrafo3.innerHTML = "La festività di Arduino è un evento speciale dedicato alla celebrazione dell'innovazione tecnologica e della creatività. Durante la festività di Arduino ad Ivrea, vengono organizzati eventi, workshop e incontri che coinvolgono appassionati, studenti, professionisti e semplici curiosi. Si promuove la condivisione di conoscenze, l'ispirazione reciproca e lo sviluppo di progetti innovativi. È un'occasione per celebrare la creatività umana e l'impatto che la tecnologia può avere sulla nostra vita quotidiana.";
        img1.src = 'img/ivrea-festivita.png';
        img2.src = 'img/ivrea-battaglia-arance.png';
        img3.src = 'img/ivrea-storico.carnevale.png';
        img4.src = 'img/ivrea-arduino-day.png';
        break;

      case 3:
        titolo.innerHTML = "TRADIZIONI E CULTURA";
        descrizioneIniziale.innerHTML = "Ivrea è un luogo ricco di cultura e tradizioni che si mescolano armoniosamente con l'innovazione e lo spirito moderno. Con una storia millenaria che si riflette nelle sue strade e architetture, Ivrea è un crogiolo di arte, eventi e manifestazioni che celebrano le sue radici e l'identità della comunità locale.";
        paragrafo1.innerHTML = "Ivrea vanta un ricco patrimonio culturale, tanto che nel 2018 è stata riconosciuta come Patrimonio dell'Umanità UNESCO. Questo prestigioso riconoscimento è dovuto principalmente all'architettura industriale unica dell'area di Ivrea, che rappresenta un importante esempio di città industriale del XX secolo. Gli edifici progettati da famosi architetti come Olivetti sono testimonianze tangibili del passato industriale di Ivrea e della sua evoluzione nel corso dei decenni.";
        paragrafo2.innerHTML = "La cucina locale è caratterizzata da piatti tradizionali e autentici che si basano su ingredienti freschi e di qualità. I sapori unici e genuini della regione Piemonte si fondono con le ricette tradizionali ivresi, creando un'esperienza gastronomica indimenticabile. Dai risotti cremosi alle carni pregiate, dai formaggi prelibati ai dolci artigianali, ogni piatto rappresenta una celebrazione del buon cibo e della convivialità. Tuttavia, la vera stella culinaria di Ivrea è la Torta 900, un dolce simbolo della città che incanta i palati con la sua morbidezza, la sua ricca farcitura di crema pasticcera e la sua forma evocativa.";
        paragrafo3.innerHTML = "Oltre alla sua ricca cultura e tradizioni, Ivrea offre anche una splendida cornice naturale. Circondata da montagne maestose, valli verdi e fiumi scintillanti, la città è un paradiso per gli amanti della natura. Escursioni panoramiche, passeggiate lungo i sentieri e attività all'aria aperta permettono di immergersi completamente nella bellezza incontaminata del territorio. Dai parchi naturali alle riserve protette, Ivrea offre una varietà di paesaggi mozzafiato che rappresentano un vero e proprio tesoro naturale.";
        img1.src = 'img/ivrea-anfiteatro-romano.png';     
        img2.src = 'img/ivrea-museo-olivetti.png'; 
        img3.src = 'img/ivrea-torta-900.png'; 
        img4.src = 'img/ivrea-paesaggio.png';
        break;
    }

    fadeIn(titolo);
    fadeIn(descrizioneIniziale);
    fadeIn(paragrafo1);
    fadeIn(paragrafo2);
    fadeIn(paragrafo3);
    fadeIn(img1);
    fadeIn(img2);
    fadeIn(img3);
    fadeIn(img4);
  }, 500); 
}

window.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');
  var activeLink = null;

  navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      if (this !== activeLink && !this.classList.contains('clicked')) {
        this.classList.add('active');
      }
    });

    link.addEventListener('mouseout', function() {
      if (this !== activeLink && !this.classList.contains('clicked')) {
        this.classList.remove('active');
      }
    });

    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      if (activeLink && activeLink !== this) {
        activeLink.classList.remove('active', 'clicked');
      }
      
      this.classList.add('active', 'clicked');
      activeLink = this;
      resetMenuState();
    });    
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".nav-link");
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarNav = document.querySelector('.navbar-nav');

  var numeroAperturaPagina = 1;
  
  navbarNav.classList.remove('active');

  updateContent(numeroAperturaPagina);

  navbarToggler.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
  });

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      navbarNav.classList.remove('active');
    });
  });

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});