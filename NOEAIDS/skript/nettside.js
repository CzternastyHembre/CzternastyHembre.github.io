const main = document.querySelector("main");
const db = firebase.database();
const frukter = db.ref("Frukt");
const bakverk = db.ref("Bakverk");
const drikkevarer = db.ref("Drikkevarer")
const annet = db.ref("Annet")
// let bilde;
// bilde = "fruktBilder/${mat.Img}";

function genererHTML(snapshot){
 let mat = snapshot.val();
 let key = snapshot.key;

  main.innerHTML +=`
      <a class="${mat.bildeStoorrelse}" href="matinfo.html?id=${key}">
        <article>
          <h1>${mat.Navn}</h1>
          <img src="fruktBilder/${mat.Img[0]}" alt="Bilde Av ${mat.Navn}">
          <button type="button">Detaljer</button>
          <div>Pris per ${mat.Salgstype} : ${mat.Pris}kr</div>
        </article>
      </a>
  `
}
function genererHTMLL(snapshot){
 let mat = snapshot.val();
 let key = snapshot.key;

  main.innerHTML +=`
      <a class="${mat.bildeStoorrelse}" href="matinfo.html?id=${key}">
        <article>
          <h1>${mat.Navn}</h1>
          <img src="bakverkBilder/${mat.Img[0]}" alt="Bilde Av ${mat.Navn}">
          <button type="button">Detaljer</button>
          <div>Pris per ${mat.Salgstype} : ${mat.Pris}kr</div>
        </article>
      </a>
    `
}

function genererHTMLLL(snapshot){
 let mat = snapshot.val();
 let key = snapshot.key;

  main.innerHTML +=`
  <a class="${mat.bildeStoorrelse}" href="matinfo.html?id=${key}">
    <article>
      <h1>${mat.Navn}</h1>
      <img src="drikkeBilder/${mat.Img[0]}" alt="Bilde Av ${mat.Navn}">
      <button type="button">Detaljer</button>
      <div>Pris per ${mat.Salgstype} : ${mat.Pris}kr</div>
    </article>
  </a>
`
}

function genererHTMLLLL(snapshot){
 let mat = snapshot.val();
 let key = snapshot.key;

  main.innerHTML +=`
  <a class="${mat.bildeStoorrelse}" href="matinfo.html?id=${key}">
    <article>
      <h1>${mat.Navn}</h1>
      <img src="diverseBilder/${mat.Img[0]}" alt="Bilde Av ${mat.Navn}">
      <button type="button">Detaljer</button>
      <div>Pris per ${mat.Salgstype} : ${mat.Pris}kr</div>
    </article>
  </a>
`
}

function visAlle() {
  main.innerHTML = "";
  bakverk.on("child_added",genererHTMLL);
  frukter.on("child_added",genererHTML);
  drikkevarer.on("child_added",genererHTMLLL)
  annet.on("child_added",genererHTMLLLL)
}

function visFrukter() {
  main.innerHTML = "";
  frukter.on("child_added",genererHTML);
}

function visBakverk() {
  main.innerHTML = "";
  bakverk.on("child_added",genererHTMLL);
}

function visDrikkevarer() {
  main.innerHTML = "";
  drikkevarer.on("child_added",genererHTMLLL);
}

function visPaaprotein() {
  main.innerHTML = "";
  bakverk.orderByChild("protein").on("child_added",genererHTMLL);
}

function visFPris() {
  main.innerHTML = "";
  frukter.orderByChild("Pris").on("child_added",genererHTML);
}

function visFkcal() {
  main.innerHTML = "";
  frukter.orderByChild("kcal").on("child_added",genererHTML);
}

function visBPris() {
  main.innerHTML = "";
  bakverk.orderByChild("Pris").on("child_added",genererHTMLL);
}

function visBKcal() {
  main.innerHTML = "";
  bakverk.orderByChild("kcal").on("child_added",genererHTMLL);
}

function visDPris() {
  main.innerHTML = "";
  drikkevarer.orderByChild("Pris").on("child_added",genererHTMLLL);
}

function visDKcal() {
  main.innerHTML = "";
  drikkevarer.orderByChild("kcal").on("child_added",genererHTMLLL);
}

function visDiverse() {
  main.innerHTML = "";
  annet.on("child_added",genererHTMLLLL);
}
function visAPris() {
  main.innerHTML = "";
  annet.orderByChild("Pris").on("child_added",genererHTMLLLL)
}
function visKjøtt() {
  main.innerHTML = "";
  annet.orderByChild("type").equalTo("kjøtt").on("child_added",genererHTMLLLL)
}
function visSøtt() {
  main.innerHTML = "";
  annet.orderByChild("type").equalTo("søtt").on("child_added",genererHTMLLLL)
}

function visFAlf() {
  main.innerHTML = "";
  frukter.orderByChild("Navn").on("child_added",genererHTML)
}
function visBAlf() {
  main.innerHTML = "";
  bakverk.orderByChild("Navn").on("child_added",genererHTMLL)
}
function visDAlf() {
  main.innerHTML = "";
  drikkevarer.orderByChild("Navn").on("child_added",genererHTMLLL)
}

visAlle();
