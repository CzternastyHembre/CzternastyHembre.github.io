document.write(`
<div id="navbar">
  <div class="logo_nav" id="logo_navigationbar" >
    <a href="./index.html"><img src="bilder/logo2.svg" alt=""></a>
  </div>
  <div class="navBarElement" id="utoverElement">
    <a>Athletes</a>

  </div>
  <div class="navBarElement">
    <a href="./sponsor.html">Sponsors</a>
  </div>
  <div class="navBarElement">
    <a href="./nyheter.html">News</a>
  </div>
  <div class="navBarElement">
    <a href="./om_oss.html">About us</a>
  </div>
  <div class="navBarElement">
    <button type="button" name="button" id="kontaktKnapp">
      <a href="./kontakt.html">Contact</a>
    </button>
  </div>
</div>

<div id="submenus">
  <div class="submenu" id="submenu_1"></div>

  <div class="submenu" id="submenu_2">
    <div class="submenuElement_2" id="resultat">
      <a href="#">Best Result</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_2" id="gjennomsnitt">
      <a href="#">Average</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_2" id="start">
      <a href="#">Starts</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_2" id="stevner">
      <a href="#">Events this year</a>
    </div>
  </div>
</div>`); //Skriver ut siden fra js for å slippe å ha mye repetiv HTML

let submenu_1 = document.getElementById("submenu_1");

//Lager elementer til navbaren(athletes)
for (let skytter of skyttere) {
  if (!skytter.isShown) continue;
  let containerDiv = document.createElement("div");
  containerDiv.classList += "submenuElement_1";

  let anchorElement = document.createElement("a");

  let fullname = skytter.about.surName + skytter.about.lastName;
  anchorElement.href = "./skyttere.html?skytter=" + skytter.id;
  anchorElement.innerText =
    skytter.about.surName + " " + skytter.about.lastName;

  let hr = document.createElement("hr");
  hr.classList += "underline";

  containerDiv.appendChild(anchorElement);
  containerDiv.appendChild(hr);
  submenu_1.appendChild(containerDiv);
}

let submenuElement_1 = document.getElementsByClassName("submenuElement_1");
let submenu_2 = document.getElementById("submenu_2");
let submenuElement_2 = document.getElementsByClassName("submenuElement_2");
let utoverElement = document.getElementById("utoverElement");
let submenusElement = document.getElementById("submenus");
let navBarElements = document.getElementsByClassName("navBarElement");
let logo_navigationbar = document.getElementById("logo_navigationbar");

let submenuElement_1_Array = Array.from(submenuElement_1);
let submenuElement_2_Array = Array.from(submenuElement_2);
let navBarElements_Array = Array.from(navBarElements);

submenusElement.addEventListener("mouseleave", hideSubmenus);

for (element of navBarElements_Array) {
  if (element.id == "utoverElement") continue;
  element.addEventListener("mouseover", hideSubmenus);
}

logo_navigationbar.addEventListener("mouseover", hideSubmenus);

if (screen.width > 500) {
  utoverElement.children[0].addEventListener("mouseover", showSub1);

  for (let element of submenuElement_1_Array) {
    element.onmouseover = (event) => {
      let shooter = getShooterobject(element.children[0]);

      if (shooter.stasticsLinks.length == 0) {
        submenu_2.style.display = "none";
        return;
      }

      let rect = element.getBoundingClientRect();
      submenu_2.style.display = "flex";
      submenu_2.style.left = rect.x + rect.width + "px";
      submenu_2.style.top = rect.y + "px";

      for (i in submenuElement_2_Array) {
        submenuElement_2_Array[i].children[0].href =
          shooter.stasticsLinks[i][0];
        submenuElement_2_Array[i].children[0].target = "_blank";
      }
    };
  }
} else utoverElement.children[0].addEventListener("click", showSub1);

function hideSubmenus() {
  submenu_1.style.display = "none";
  submenu_2.style.display = "none";
}

function showSub1(event) {
  let rect = utoverElement.getBoundingClientRect();
  submenu_1.style.display = "flex";
  submenu_1.style.left = rect.x + "px";
  submenu_1.style.top = rect.y + rect.height + 2 + "px";
}

function getShooterobject(href) {
  let strHref = String(href);
  index = strHref.search("=");
  id = strHref.slice(index + 1);

  for (skytter of skyttere) {
    if (skytter.id == id) {
      return skytter;
    }
  }
}
