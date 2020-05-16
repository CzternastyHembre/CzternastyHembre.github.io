
  const db = firebase.database();
  const spillere = db.ref("spillere")
  const main = document.querySelector("main");


  function genererHTML(snapshot){
    let spiller = snapshot.val();
    let key = snapshot.key;
    console.log(spiller.dato);
    main.innerHTML +=`
      <a href="spillerinfo.html?id=${key}">
          <img src="bilder/${spiller.img.profil}">
          <div class="draktNr">${spiller.draktNr}</div>
          <div class="navn">${spiller.navn}</div>
      </a>
    `
  }
  function visAlle() {
    main.innerHTML = ""
    spillere.on("child_added",genererHTML)
  }
  function visKeeper(){
    main.innerHTML = ""
    spillere.orderByChild("posisjon").equalTo("Keeper").on("child_added",genererHTML)
  }
  function visForsvar(){
    main.innerHTML = ""
    spillere.orderByChild("posisjon").equalTo("Forsvar").on("child_added",genererHTML)
  }
  function visMidtbane(){
    main.innerHTML = ""
    spillere.orderByChild("posisjon").equalTo("Midtbane").on("child_added",genererHTML)
  }
  function visAngrep(){
    main.innerHTML = ""
    spillere.orderByChild("posisjon").equalTo("Angrep").on("child_added",genererHTML)
  }
  function visMål(){
    main.innerHTML = ""
    spillere.orderByChild("mål").on("child_added",genererHTML)
  }
  function visKamper(){
    main.innerHTML = ""
    spillere.orderByChild("kamper").on("child_added",genererHTML)
  }
  function visHøyde(){
    main.innerHTML = ""
    spillere.orderByChild("høyde").on("child_added",genererHTML)
  }
  function visPris(){
    main.innerHTML = ""
    spillere.orderByChild("pris").on("child_added",genererHTML)
  }
  function visDato(){
    main.innerHTML = ""
    spillere.orderByChild("dato").on("child_added",genererHTML)
  }
  visAlle()
