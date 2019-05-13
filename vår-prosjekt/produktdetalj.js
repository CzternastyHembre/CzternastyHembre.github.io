const main = document.querySelector("main")

var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get("id");
var parent = url.searchParams.get("parent");

const db = firebase.database();
const valgtProdukt = db.ref("varer/"+parent+"/"+id);



function genererHTML(snapshot){
  let varer = snapshot.val();
  main.innerHTML = `
  <article class="infovarer">
    <h1 id="produktNavn">${varer.navn}</h1>
    <p id="produktPris">${varer.pris} kr </p>
    <img id="produktBilde" src="bilder/${varer.bilde}">
    <form action="handlekurv.html">
                  <select required name="">
                    <option class="str" value="">${varer.navn}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button class="kjøp" type="submit">Legg til i handlekurv</button>
                </form>
  </article>

  `;


}

valgtProdukt.on("value",genererHTML);
