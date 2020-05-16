const db = firebase.firestore();
const Garn = db.collection("Garn");
const handlekurv = db.collection("GarnIHandlekurv");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const visGarn = async (id) => {
  const svar = await Garn.doc(id).get();
  lagHTML(svar.data());
}

async function hentData (){
//henter alle dyrene i kolleksjonen (firestore) som heter Dyreklinikk
  const garn = await GarnColl.get();
  for(const Farge of garn.docs){
    lagHTML(Farge.data(),Farge.id)
  }
}

visGarn(id);

const lagHTML = (Garn) => {
  secGarn.innerHTML += `
              <img src=${Garn.Bilder} alt="Bilder av ${Garn.Farge}">
              <div>
                <h1>${Garn.Farge}</h1>
                <p><b>Merke</b> : ${Garn.Merke}</p>
                <p><b>Pris</b> : ${Garn.Pris}kr</p>
                <button onclick="leggIHandlekurv('${id}')">Kjop</button>
              </div>
  `;
}
const leggIHandlekurv = async (id) => {
  await handlekurv.add({
    garnId: id,
    tid: firebase.firestore.FieldValue.serverTimestamp()
  });
  alert("Garn lagt til i handlekurv");
}
