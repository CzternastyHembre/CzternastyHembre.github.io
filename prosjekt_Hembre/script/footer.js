 document.write(`
    <footer>

      <div class="footer-container-one">
      </div>

      <div class="footer-container-two">


        <div class="contact">

          <p>Mail: pal.hembre@gmail.com</p>
          <p>Phone: +47 42069666</p>
          <p>Fax: +47 323 555 1234</p>

        </div>

        <p></p>

        <div class="nasjonalStat">

          <a href="http://www.fsu.no/issf/index.htm">Link til nasjonal pistol statistikk: fsu.no</a>

         </div>


      </div>

    </footer>`)

    function makeFooter(){
      const footer = document.querySelector(".footer-container-one")
      footer.innerHTML = ""
      // footer.innerHTML += `
      // <div>
      // <img class="logo_footer" src="bilder/logo2.svg" alt="">
      // </div>

      // `
      
      for(i in skyttere){
        // console.log(i);
        if (skyttere[i].isShown) {
            
          const listeDiv = document.createElement('div')
          // footer.innerHTML += `

          // <div class="liste${i} listeFooter">

          //   <ul>
          //     <li><p><a href="skyttere.html?skytter=${skyttere[i].id}">${skyttere[i].about.surName} ${skyttere[i].about.lastName}</a></p></li>
          //     <li><a href="${skyttere[i].stasticsLinks[0][0]}">${skyttere[i].stasticsLinks[0][1]}</a></li>
          //     <li><a href="${skyttere[i].stasticsLinks[1][0]}">${skyttere[i].stasticsLinks[1][1]}</a></li>
          //     <li><a href="${skyttere[i].stasticsLinks[2][0]}">${skyttere[i].stasticsLinks[2][1]}</a></li>
          //     <li><a href="${skyttere[i].stasticsLinks[3][0]}">${skyttere[i].stasticsLinks[3][1]}</a></li>
          //   </ul>

          //  </div>

          // `
          const ul = document.createElement('ul')
          const p = document.createElement('p')
          const liName = document.createElement('li')
          p.appendChild(makePersonLink(skyttere[i].id))
          liName.appendChild(p)
          ul.appendChild(liName)

          for (j in skyttere[i].stasticsLinks){
            const element = skyttere[i].stasticsLinks[j]
            const a = document.createElement('a')
            const liLinks = document.createElement('li')

            a.innerHTML = element[1]
            a.href = element[0]
            liLinks.appendChild(a)
            ul.appendChild(liLinks)
          }
          listeDiv.appendChild(ul)
          footer.appendChild(listeDiv)
        }
      } 
      footer.innerHTML += `
        </div>

          <ul>
            <li><p id="footer_contact"><a href="kontakt.html">Contact Us</a></p></li>
          </ul>

        </div>
      `
    }
    makeFooter()
