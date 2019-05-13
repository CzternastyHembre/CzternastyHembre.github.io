let konteiner = document.querySelector("#konteiner")
let sykdom = document.querySelector("#sykdom")

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");

const db = firebase.database();
const sykdomHund = db.ref("Dyr/Hunder/" + id)
const sykdomKatt = db.ref("Dyr/Katter/" + id)

function genererHTML(snapshot){
  let dyr = snapshot.val(); //legger til "bilder/" i <img> og lager en mappe bilder med alle bilder for å få det mer oversiktlig
  let key = snapshot.key;

  konteiner.innerHTML = `
    <img src="bilder/${dyr.Bilde}">
  `;
  sykdom.innerHTML = `
    <p>Navn : ${dyr.Navn}</p>
    <p>Journal : ${dyr.Sykdom}</p>
  `;

}

  if (id.charAt(0) === "H") {
    sykdomHund.on("value",genererHTML);
  }
  else if (id.charAt(0) === "K") {
    sykdomKatt.on("value",genererHTML);
  };
