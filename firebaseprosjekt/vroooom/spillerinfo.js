let url_string = window.location.href; //window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");

const db = firebase.database();
const main = document.querySelector("main");
const spillere = db.ref("spillere/" + id)

function genererHTML(snapshot){
  let spiller = snapshot.val();
  main.innerHTML +=`
  <article>
    <div class="bildecont">
      <img class="info" src="bilder/${spiller.img.info}">
      <div class="draktNr">${spiller.draktNr}</div>
    </div>
    <div class="tabellFar">
      <img id="profil" src="bilder/${spiller.img.profil}">
      <table>
        <tr>
          <td>Kamper</td>
          <td>${spiller.kamper}</td>
        </tr>
        <tr>
          <td>Mål</td>
          <td>${spiller.mål}</td>
        </tr>
        <tr>
          <td>Posisjon</td>
          <td>${spiller.posisjon}</td>
        </tr>
        <tr>
          <td>Pris</td>
          <td>£${spiller.pris}M</td>
        </tr>
        <tr>
          <td>Født</td>
          <td>${spiller.dato} <br> ${spiller.sted}</td>
        </tr>
        <tr>
          <td>Høyde</td>
          <td>${spiller.høyde}cm</td>
        </tr>
      </table>
    </div>

    <div class="infocont">
      <div>
        <div class="navn">${spiller.navn}</div>
        <p>${spiller.beskrivelse}</p>
      </div>

      <div id="kjøp">
        <b>Pris for ${spiller.navn} sin signerte drakt :  ${spiller.draktPris}kr</b>
        <form action="test.html">
          <select required name="">
            <option class="str" value="">Størrelse</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <button class="kjøp" type="submit">Legg til i handlekurv</button>
        </form>
      </div>
    </div>
    <a id="button" href="spillerstall.html"><button>Tilbake</button></a>
  </article>

`
}

spillere.on("value",genererHTML)
