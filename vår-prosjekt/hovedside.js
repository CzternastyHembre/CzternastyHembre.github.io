  const main = document.querySelector("main");
  const db = firebase.database();
  const genser = db.ref("varer/genser");
  const topper = db.ref("varer/topper");
  const bukser = db.ref("varer/bukser");
  const skjort = db.ref("varer/skjørt");
  const kjoler = db.ref("varer/kjole");


  var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 2000);
}

  function VisVarer (snapshot){
    let varer = snapshot.val();
    let key = snapshot.key;
    let parent = snapshot.ref.parent.key;

    main.innerHTML +=`
      <a class="produkt" href="produktdetaljer.html?id=${key}&parent=${parent}">
      <article>
          <h1>${varer.navn}</h1>
          <img src="bilder/${varer.bilde}" alt="">
          <p> ${varer.type}, ${varer.stoff}</p>
          <p>${varer.pris} kr </p>
      </article>
    `
  }


  function VisGensere() {
      main.innerHTML=" " ;
      genser.on("child_added",VisVarer);
  }

  function VisTopper() {
      main.innerHTML=" " ;
      topper.on("child_added",VisVarer);
  }

  function VisBukser() {
      main.innerHTML=" " ;
      bukser.on("child_added",VisVarer);
  }

  function VisSkjort() {
      main.innerHTML=" " ;
      skjort.on("child_added",VisVarer);
  }

  function VisKjoler() {
      main.innerHTML=" " ;
      kjoler.on("child_added",VisVarer);
  }



  /*FILTER PÅ GENSERE*/
  function VisGKnit() {
    main.innerHTML="";
    genser
          .orderByChild("type")
          .equalTo("knit")
          .on("child_added",VisVarer);
  }

  function VisGGenser() {
    main.innerHTML="";
    genser
          .orderByChild("type")
          .equalTo("genser")
          .on("child_added",VisVarer);
  }
  function VisGHoodie() {
    main.innerHTML="";
    genser
          .orderByChild("type")
          .equalTo("hoodie")
          .on("child_added",VisVarer);
  }

  function VisGHvit() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }

  function VisGGrå() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("grå")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("grå")
        .on("child_added",VisVarer);
  }
  function VisGSort() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisGBlå() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisGGrønn() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }

  function VisGGul() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("gul")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("gul")
        .on("child_added",VisVarer);
  }
  function VisGRød() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisGLilla() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("lilla")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("lilla")
        .on("child_added",VisVarer);
  }
  function VisGRosa() {
    main.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisGFest() {
    main.innerHTML="";
    genser
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisGHverdag() {
    main.innerHTML="";
    genser
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }

  /*FILTER PÅ TOPPER*/
  function VisTBluse() {
    main.innerHTML="";
    topper
          .orderByChild("type")
          .equalTo("bluse")
          .on("child_added",VisVarer);
  }

  function VisTSinglet() {
    main.innerHTML="";
    topper
          .orderByChild("type")
          .equalTo("singlet")
          .on("child_added",VisVarer);
  }
  function VisTTskjorte() {
    main.innerHTML="";
    topper
          .orderByChild("type")
          .equalTo("tskjorte")
          .on("child_added",VisVarer);
  }

  function VisTHvit() {
    main.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }
  function VisTSort() {
    main.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisTBlå() {
    main.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisTGrønn() {
    main.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }
  function VisTRød() {
    main.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisTRosa() {
    main.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisTFest() {
    main.innerHTML="";
    topper
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisTHverdag() {
    main.innerHTML="";
    topper
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }
  /*FILTER PÅ BUKSER*/
  function VisBJeans() {
    main.innerHTML="";
    bukser
          .orderByChild("type")
          .equalTo("jeans")
          .on("child_added",VisVarer);
  }

  function VisBBukse() {
    main.innerHTML="";
    bukser
          .orderByChild("type")
          .equalTo("bukse")
          .on("child_added",VisVarer);
  }

  function VisBHvit() {
    main.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }
  function VisBSort() {
    main.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisBBlå() {
    main.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisBGrønn() {
    main.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }
  function VisBRød() {
    main.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisBRosa() {
    main.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisBFest() {
    main.innerHTML="";
    bukser
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisBHverdag() {
    main.innerHTML="";
    bukser
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }

  /*FILTER PÅ SKJØRT*/
  function VisSKortskjort() {
    main.innerHTML="";
    skjort
          .orderByChild("type")
          .equalTo("kortskjørt")
          .on("child_added",VisVarer);
  }

  function VisSMaxiskjort() {
    main.innerHTML="";
    skjort
          .orderByChild("type")
          .equalTo("maxiskjørt")
          .on("child_added",VisVarer);
  }

  function VisSHvit() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }

  function VisSSort() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisSBlå() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisSGrønn() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }

  function VisSGul() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("gul")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("gul")
        .on("child_added",VisVarer);
  }
  function VisSRød() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisSRosa() {
    main.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisSFest() {
    main.innerHTML="";
    skjort
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisSHverdag() {
    main.innerHTML="";
    skjort
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }


  /*FILTER PÅ KJOLER*/
  function VisKKortkjole() {
    main.innerHTML="";
    kjoler
          .orderByChild("type")
          .equalTo("kortkjole")
          .on("child_added",VisVarer);
  }

  function VisKMaxikjole() {
    main.innerHTML="";
    kjoler
          .orderByChild("type")
          .equalTo("maxikjole")
          .on("child_added",VisVarer);
  }

  function VisKHvit() {
    main.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }

  function VisKSort() {
    main.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisKBlå() {
    main.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisKGrønn() {
    main.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }

  function VisKGul() {
    main.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("gul")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("gul")
        .on("child_added",VisVarer);
  }

  function VisKRosa() {
    main.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisKFest() {
    main.innerHTML="";
    kjoler
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisKHverdag() {
    main.innerHTML="";
    kjoler
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }

  function vis4utvalgte() {
    skjort
          .orderByChild("navn")
          .equalTo("Astrids sommer")
          .on("child_added",VisVarer);
    genser
          .orderByChild("navn")
          .equalTo("Cabin")
          .on("child_added",VisVarer);
    bukser
          .orderByChild("navn")
          .equalTo("Trøkk")
          .on("child_added",VisVarer);
  }

  vis4utvalgte();
