//kobling til database og HTML-elementer
const db = firebase.firestore();
const GarnColl = db.collection("Garn");
const GarnDiv = document.querySelector("#secStrikkebutikk")

//lager en funksjon som henter data fra Firestore
async function hentData (){
//henter alle dyrene i kolleksjonen (firestore) som heter Dyreklinikk
  const garn = await GarnColl.get();
  for(const Farge of garn.docs){
    lagHTML(Farge.data(),Farge.id)
  }
}
//lager en funksjon som skriver HTML-kode basert på dyrene den får tilsendt fra hentData
function lagHTML(garnData,id){
  GarnDiv.innerHTML += `
    <section>
    <a href="garn.html?id=${id}">
      <img src="${garnData["Bilder"]}">
      <div>${garnData["Farge"]}</div>
      <div>pris : ${garnData["Pris"]}kr</div>
      </a>
    </section>
  `
}
//kjører hentData funksjonen slik at vi kommer i gang
hentData();
const prisHoy = async () => {
    GarnDiv.innerHTML = ``; //Sletter gammelt innhold i secBoker.
    const svar = await GarnColl.orderBy("Pris","desc").get();
    for(const Farge of svar.docs){
        lagHTML(Farge.data(), Farge.id);
    }
}
const prisLav = async () => {
    GarnDiv.innerHTML = ``; //Sletter gammelt innhold i secBoker.
    const svar = await GarnColl.orderBy("Pris","asc").get();
    for(const Farge of svar.docs){
        lagHTML(Farge.data(), Farge.id);
    }
}
