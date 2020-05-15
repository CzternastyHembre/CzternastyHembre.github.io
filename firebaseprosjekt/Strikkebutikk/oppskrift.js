//kobling til database og HTML-elementer
const db = firebase.firestore();
const StrikkeoppskrifterColl = db.collection("Strikkeoppskrifter");
const StrikkeoppskrifterDiv = document.querySelector("#secOppskrift")

//lager en funksjon som henter data fra Firestore
const hentAlle = async () => {
//henter alle dyrene i kolleksjonen (firestore) som heter Dyreklinikk
  const oppskrift = await StrikkeoppskrifterColl.get();
  for(const navn of oppskrift.docs){
    lagHTML(navn.data(),navn.id)
  }
}
//lager en funksjon som skriver HTML-kode basert på dyrene den får tilsendt fra hentData
function lagHTML(strikkeoppskrifterData,id){
  StrikkeoppskrifterDiv.innerHTML += `
    <section>
      <a href="klaer.html?id=${id}">
        <img src="${strikkeoppskrifterData["Bilder"]}">
        <div>${strikkeoppskrifterData["Navn"]}</div>
      </a>
    </section>
  `

}
//kjører hentData funksjonen slik at vi kommer i gang
hentAlle();

const hentJakke = async () => {
  StrikkeoppskrifterDiv.innerHTML = ``;
  const svar = await StrikkeoppskrifterColl.where("Type", "==","Jakke").get();
  for (const navn of svar.docs){
    lagHTML(navn.data(), navn.id)
  }
}
const hentGenser = async () => {
  StrikkeoppskrifterDiv.innerHTML = ``;
  const svar = await StrikkeoppskrifterColl.where("Type", "==","Genser").get();
  for (const navn of svar.docs){
    lagHTML(navn.data(), navn.id)
  }
}
