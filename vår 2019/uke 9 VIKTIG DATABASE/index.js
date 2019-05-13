//HTML
const main = document.querySelector('main');

//databasereferanser
const db = firebase.database();
const prosjekter = db.ref('ting/prosjekter')

function visPorsjekt(snap) {

  const key = snap.key
  let prosjekt = snap.val();
  const bilder = prosjekt.bilder;
  const index = prosjekt.forsidebilde;

  main.innerHTML += `
    <article style="background-image: url('${bilder[index]}');">
      <h1>${prosjekt.tittel}</h1>
      <p>${prosjekt.beskrivelse}</p>
      <a href="øvprøv .html/${key}">${prosjekt.tittel}</a>
    </article>
  `;
}
//Event listner
prosjekter.on("child_added",visPorsjekt);
