const db = firebase.firestore();
const Strikkeoppskrifter = db.collection("Strikkeoppskrifter");
const Garn = db.collection("Garn");
const handlekurv = db.collection("GarnIHandlekurv");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const visStrikkeoppskrifter = async (id) => {
  const svar = await Strikkeoppskrifter.doc(id).get();
  lagHTML(svar.data());
}

async function hentData (){
//henter alle dyrene i kolleksjonen (firestore) som heter Dyreklinikk
  const oppskrift = await StrikkeoppskrifterColl.get();
  for(const Navn of oppskrift.docs){
    lagHTML(Navn.data(),Navn.id)
  }
}

visStrikkeoppskrifter(id);

const lagHTML = (Strikkeoppskrifter) => {
  secKlaer.innerHTML += `
              <img src=${Strikkeoppskrifter.Bilder} alt="Bilder av ${Strikkeoppskrifter.Navn}">
              <div>
                <h1>${Strikkeoppskrifter.Navn}</h1>
                <p>Pinneforslag: <br> ${Strikkeoppskrifter.Pinneforslag}</p>
                <p>Strikkefasthet:<br> ${Strikkeoppskrifter.Strikkefasthet}</p>
              </div>
  `;
  hentGarn(Strikkeoppskrifter.Farge)
  // visGarn(Strikkeoppskrifter.GarnId)
}

const hentGarn = async (farge) => {
  const svar = await Garn.where("Farge", "==",farge).get();
  for (const navn of svar.docs){
    lagGarnHTML(navn.data(), navn.id)
  }
}


const lagGarnHTML = (Garn, id) => {
  secKlaer.innerHTML += `
              <div>
                <a href="garn.html?id=${id}">
                  <img src=${Garn.Bilder} alt="Bilder av ${Garn.Farge}">
                  <h1>${Garn.Farge}</h1>
                  </a>
                <button onclick="leggIHandlekurv('${id}')">Kjøp</button>
              </div>
  `;console.log(Garn.Strikkefasthet);
}
const leggIHandlekurv = async (id) => {
  await handlekurv.add({
    garnId: id,
    tid: firebase.firestore.FieldValue.serverTimestamp()
  });
  alert("Garn lagt til i handlekurv");
}
