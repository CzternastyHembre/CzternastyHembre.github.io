let dataBase = firebase.datbase();
let bukser = dataBase.ref("varer/bukser");
let skjorter = database.ref("varer/skorter")
let main = document.querySelector("main");
var sokefelt = document.getElementById("sokefelt");
var søketekst ="";

function visVare(snapshot) {
   let vare = snapshot.val();
   main.innerHTML += `
       <article>
           <img src="bilder/${vare.bilde}">
           <section>
              <h1>${vare.merke} ${vare.modell}</h1>
              <p>${vare.pris}</p>
            </section>
       </article>
   `;
}
sokefelt.oninput = sok;
function sok () {
   søketekst=sokefelt.value;
   visBukser();

}
function visAlleVarer() {
   bukser.on("child_added", visVare);
   skjorter.on("child_added", visVare);
}
visAlleVarer();
function visAlleVarer() {
   main.innerHTML = " "; //Fjerner alt innhold i main
   bukser.on("child_added", visVare);
   skjorter.on("child_added", visVare);
}
function visBukser() {
   main.innerHTML = " ";
   //bukser.on("child_added", visVare);
   bukser
       .orderByChild("merke")
       .startAt(søketekst)
       .endAt(søketekst + '\uf8ff')
       .on("child_added", visVare);
}
function visSkjorter() {
   main.innerHTML = " ";
   skjorter.on("child_added", visVare);
}
