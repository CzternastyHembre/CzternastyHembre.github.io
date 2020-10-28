document.write(`
<div id="navbar">
<div class="logo_nav" >
<a href="index.html"><img src="bilder/logo2.svg" alt=""></a>

</div>
  <div class="navBarElement" id="utoverElement">
    <a href="#">Athletes</a>
  </div>
  <div class="navBarElement">
    <a href="./sponsor.html">Sponsors</a>
  </div>
  <div class="navBarElement">
    <a href="./news.html">News</a>
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
  <div class="submenu" id="submenu_1">
    <div class="submenuElement_1">
      <a href="./skyttere.html?skytter=palhembre">Pål Hembre</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_1">
      <a href="./skyttere.html?skytter=mattishembre">Mattis Hembre</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_1">
      <a href="./skyttere.html?skytter=ludvikhembre">Ludvik Hembre</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_1">
      <a href="./skyttere.html?skytter=timleohembre">Tim Leo Hembre</a>
    </div>
  </div>

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
</div>`);
let submenu_1 = document.getElementById("submenu_1");
let submenuElement_1 = document.getElementsByClassName("submenuElement_1");
let submenu_2 = document.getElementById("submenu_2");
let submenuElement_2 = document.getElementsByClassName("submenuElement_2");
let utoverElement = document.getElementById("utoverElement");
let submenusElement = document.getElementById("submenus");

let submenuElement_1_Array = Array.from(submenuElement_1);
let submenuElement_2_Array = Array.from(submenuElement_2);

submenusElement.addEventListener("mouseleave", hideSubmenus);
utoverElement.addEventListener("mouseover", showSub1);
//test
function hideSubmenus() {
  submenu_1.style.display = "none";
  submenu_2.style.display = "none";
}

function showSub1() {
  let rect = utoverElement.getBoundingClientRect();
  submenu_1.style.display = "flex";
  submenu_1.style.left = rect.x + "px";
  submenu_1.style.top = rect.y + rect.height + 2 + "px";
}

for (let element of submenuElement_1_Array) {
  element.onmouseover = (event) => {
    let rect = element.getBoundingClientRect();
    submenu_2.style.display = "flex";
    submenu_2.style.left = rect.x + rect.width + "px";
    submenu_2.style.top = rect.y + "px";
    for (i of submenuElement_2_Array) {
      i.children[0].href = fixHref(element.children[0].href, i.id);
    }
  };
}

function fixHref(parentHref, childId) {
  let slicedHref = parentHref.slice(0, parentHref.length - 11);
  return slicedHref + "/" + childId + ".html";
}
