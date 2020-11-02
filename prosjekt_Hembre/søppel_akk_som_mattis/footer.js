document.write(`
    <footer>

      <div class="footer-container-one">

        <img src="logo" alt="">

        <div class="listePaal">

          <ul>
            <li><p><a href="0">Pål Hembre</a></p></li>
            <li><a href="1">Best results</a></li>
            <li><a href="2">Average</a></li>
            <li><a href="3">Nr of starts</a></li>
            <li><a href="4">Events this year</a></li>
          </ul>

        </div>

        <div class="listeLudvik">

          <ul>
            <li><p><a href="0">Mattis Hembre</a></p></li>
            <li><a href="1">Best results</a></li>
            <li><a href="2">Average</a></li>
            <li><a href="3">Nr of starts</a></li>
            <li><a href="4">Events this year</a></li>
          </ul>

        </div>

        <div class="listeMattis">

          <ul>
            <li><p><a href="0">Ludvik Hembre</a></p></li>
            <li><a href="1">Best results</a></li>
            <li><a href="2">Average</a></li>
            <li><a href="3">Nr of starts</a></li>
            <li><a href="4">Events this year</a></li>
          </ul>

        </div>

        <div class="listeTim">

          <ul>
            <li><p><a href="0"> Tim Leo Hembre</a></p></li>
            <li><a href="1">Best results</a></li>
            <li><a href="2">Average</a></li>
            <li><a href="3">Nr of starts</a></li>
            <li><a href="4">Events this year</a></li>
          </ul>

        </div>

          <ul>
            <li><p id="footer_contact"><a href="#">Contact Us</a></p></li>
          </ul>

      </div>

      <div class="footer-container-two">


        <div class="contact">

          <p>Mail: pal.hembre@gmail.com</p>
          <p>Phone: +47 42069666</p>
          <p>Fax: +47 323 555 1234</p>

        </div>

        <p></p>

        <div class="nasjonalStat">

          <a href="#">Link til nasjonal pistol statistikk: fsu.no</a>

        </div>


      </div>

    </footer>`)

    let athletesArray = ["palhembre","mattishembre","ludvikhembre","timleohembre"]
    athleteCount = 0
    let div = document.querySelector("div")
    let ul = document.querySelector("ul")

    function editLink() {
      console.log("asdas")
        for(let a in document.getElementsByTagName("a")){
          console.log("adas")
          a.href="asda"
          if (a.href == "0") {
            a.href = 'skyttere.html?skytter='+ athletesArray[athleteCount]
          }
          else if (true) {

          }
          else if (true) {

          }
          else if (true) {

          }
          else if (true) {

          }

        }
    }
    editLink()
