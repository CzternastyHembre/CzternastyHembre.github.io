//main ref
  const main = document.querySelector("main");
//url ref
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
//database ref
  const db = firebase.database();
  const frukter = db.ref("Frukt/" + id);
  const bakverk = db.ref("Bakverk/" + id);
  const drikkevarer = db.ref("Drikkevarer/" + id)
  const annet = db.ref("Annet/" + id)

  function genererHTML(snapshot){
   let mat = snapshot.val();
    main.innerHTML +=`
    <article class="matinfo">
      <h1>${mat.Navn}</h1>
      <div class="kont">
      <img src="fruktBilder/${mat.Img[1]}" alt="Bilde Av ${mat.Navn}">

      <table>
      <tr>
          <th>Næringsstoffer</th>
          <th>Per 100gram</th>
        </tr>
        <tr>
          <td>kcal</td>
          <td>${mat.kcal}</td>
        </tr>
        <tr>
          <td>Fett</td>
          <td>${mat.fett}g</td>
        </tr>
        <tr>
          <td>Proteiner</td>
          <td>${mat.protein}g</td>
        </tr>
        <tr>
          <td>Karbohydrater</td>
          <td>${mat.karbohydrat}g</td>
        </tr>
      </table>

      <p>${mat.beskrivelse}</p>

      <div>
      <b>Pris per ${mat.Salgstype} : ${mat.Pris}kr (${mat.Dosering})</b>
      <form action="handlekurv.html">
        <select required name="">
          <option class="str" value="">${mat.Salgstype}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button class="kjøp" type="submit">Legg til i handlekurv</button>
      </form>
      </div>

      </div>
    </article>
    <a href="Nettside.html">Tilbake</a>
`
  }

  function genererHTMLL(snapshot){
   let mat = snapshot.val();
    main.innerHTML +=`
    <article class="matinfo">
      <h1>${mat.Navn}</h1>
      <div class="kont">
      <img src="bakverkBilder/${mat.Img[1]}" alt="Bilde Av ${mat.Navn}">

      <table>
      <tr>
          <th>Næringsstoffer</th>
          <th>Per 100gram</th>
        </tr>
        <tr>
          <td>kcal</td>
          <td>${mat.kcal}</td>
        </tr>
        <tr>
          <td>Fett</td>
          <td>${mat.fett}g</td>
        </tr>
        <tr>
          <td>Proteiner</td>
          <td>${mat.protein}g</td>
        </tr>
        <tr>
          <td>Karbohydrater</td>
          <td>${mat.karbohydrat}g</td>
        </tr>
      </table>

      <p>${mat.beskrivelse}</p>

      <div>
      <b>Pris per ${mat.Salgstype} : ${mat.Pris}kr (${mat.Dosering})</b>
      <form action="handlekurv.html">
        <select required name="">
          <option class="str" value="">${mat.Salgstype}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button class="kjøp" type="submit">Legg til i handlekurv</button>
      </form>
      </div>

      </div>
    </article>
    <a href="Nettside.html">Tilbake</a>
`
  }

   function genererHTMLLL(snapshot){
     let mat = snapshot.val();
      main.innerHTML +=`
      <article class="matinfo">
        <h1>${mat.Navn}</h1>
        <div class="kont">
        <img src="drikkeBilder/${mat.Img[1]}" alt="Bilde Av ${mat.Navn}">

        <table>
        <tr>
            <th>Næringsstoffer</th>
            <th>Per 100gram</th>
          </tr>
          <tr>
            <td>kcal</td>
            <td>${mat.kcal}</td>
          </tr>
          <tr>
            <td>Fett</td>
            <td>${mat.fett}g</td>
          </tr>
          <tr>
            <td>Proteiner</td>
            <td>${mat.protein}g</td>
          </tr>
          <tr>
            <td>Karbohydrater</td>
            <td>${mat.karbohydrat}g</td>
          </tr>
        </table>

        <p>${mat.beskrivelse}</p>

        <div>
        <b>Pris per ${mat.Salgstype} : ${mat.Pris}kr (${mat.Dosering})</b>
        <form action="handlekurv.html">
          <select required name="">
            <option class="str" value="">${mat.Salgstype}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button class="kjøp" type="submit">Legg til i handlekurv</button>
        </form>
        </div>

        </div>
      </article>
      <a href="Nettside.html">Tilbake</a>
      `
    }

    function genererHTMLLLL(snapshot){
     let mat = snapshot.val();
      main.innerHTML +=`
          <article class="matinfo">
            <h1>${mat.Navn}</h1>
            <div class="kont">
            <img src="diverseBilder/${mat.Img[1]}" alt="Bilde Av ${mat.Navn}">

            <table>
            <tr>
                <th>Næringsstoffer</th>
                <th>Per 100gram</th>
              </tr>
              <tr>
                <td>kcal</td>
                <td>${mat.kcal}</td>
              </tr>
              <tr>
                <td>Fett</td>
                <td>${mat.fett}g</td>
              </tr>
              <tr>
                <td>Proteiner</td>
                <td>${mat.protein}g</td>
              </tr>
              <tr>
                <td>Karbohydrater</td>
                <td>${mat.karbohydrat}g</td>
              </tr>
            </table>

            <p>${mat.beskrivelse}</p>

            <div>
            <b>Pris per ${mat.Salgstype} : ${mat.Pris}kr (${mat.Dosering})</b>
            <form action="handlekurv.html">
              <select required name="">
                <option class="str" value="">${mat.Salgstype}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button class="kjøp" type="submit">Legg til i handlekurv</button>
            </form>
            </div>

            </div>
          </article>
          <a href="Nettside.html">Tilbake</a>
          `
    }


  // frukter.on("child_added",genererHTML);
  // bakverk.on("child_added",genererHTMLL)

  if (id.charAt(0) === "F") {
    frukter.on("value",genererHTML)
  } else if (id.charAt(0) === "B") {
    bakverk.on("value",genererHTMLL)
  } else if (id.charAt(0) === "D") {
    drikkevarer.on("value",genererHTMLLL)
  } else if (id.charAt(0) === "A") {
    annet.on("value",genererHTMLLLL)
  }
