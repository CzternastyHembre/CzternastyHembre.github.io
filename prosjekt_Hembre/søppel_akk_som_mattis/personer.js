//For å siste url del
const url_string = window.location.href; //window.location.href
const url = new URL(url_string);
const personId = url.searchParams.get('id');

function getIndex(value, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i].id;
        if (element == value) {
            return i;
        }
    }
}

const index = getIndex(personId, personer)
const person = personer[index]
const main = document.querySelector('main')

main.innerHTML = ''

function createSite() {
//endrer tittelen
    document.title = person.surName + ' ' + person.lastName

//Leger til hoved-div-elementet
    let mainDiv = document.createElement('div')
    mainDiv.id = 'person_side_topp'
    main.appendChild(mainDiv)

//Lager bilde med en div inni
    let imgDiv = document.createElement('div')
    imgDiv.id = 'person_bilder'
    let img = document.createElement('img')
    img.src = person.image.mainImage
    imgDiv.appendChild(img)
    mainDiv.appendChild(imgDiv)

//Lager div id=mattis_side_info
    infoDiv = document.createElement('div')
    infoDiv.id = 'person_side_info'
    mainDiv.appendChild(infoDiv)

//Overskrift
    let overskrift = document.createElement('h1')
    overskrift.innerHTML = person.surName + ' ' + person.lastName
    infoDiv.appendChild(overskrift)

//Beskrivelse kort
    let p = document.createElement('p')
    p.innerHTML = person.description.short
    infoDiv.appendChild(p)

//Beskrivelse lang
    p = document.createElement('p')
    p.innerHTML = person.description.long
    infoDiv.appendChild(p)

//Alder
    p = document.createElement('p')
    p.innerHTML = 'Age: '+person.age+' years'
    infoDiv.appendChild(p)

    p = document.createElement('p')
    p.innerHTML = 'Birth: '+person.birthDay+person.birthYear+', '+person.birthPlace
    infoDiv.appendChild(p)

//Startet å skyte
    p = document.createElement('p')
    p.innerHTML = person.description.statedShooting
    infoDiv.appendChild(p)

//medlem i bpk med linken
    p = document.createElement('p')
    p.innerHTML = 'membership: '
    let link = document.createElement('a')
    link.id = 'medlemskap'
    link.href = person.memberShip.link
    link.innerHTML = person.memberShip.name
    p.appendChild(link)
    infoDiv.appendChild(p)

//legger til select-element
    let select = document.createElement('select')
    select.id = 'dp_meny'

    let opt = document.createElement('option')
    opt.disabled = true
    opt.selected = true
    opt.innerHTML = 'Events'
    select.appendChild(opt)

    for (const stat of person.yearlyStatistics) {
        opt = document.createElement('option')
        opt.value = stat[0]
        opt.innerHTML = 'Events in '+stat[1]
        select.appendChild(opt)
    }
    infoDiv.appendChild(select)

    let dp_list = document.getElementById("dp_meny") // Global variable that refers to element in HTML
    dp_list.onchange = function() {
    let valgt = this.options[this.selectedIndex] // js property
      window.open(valgt.value)

    }

    h1 = document.createElement('h1')
    h1.innerHTML = 'MERITS'
    main.appendChild(h1)

    //div = document.createAttribute('div') OBS MEKK MERITTER

    h1 = document.createElement('h1')
    h1.innerHTML = 'PERSONAL RECORDS'
    main.appendChild(h1)

    let tabellRekorder = document.createElement('table')
    tabellRekorder.id = 'person_rekorder'
    main.appendChild(tabellRekorder)

    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.innerHTML = 'Event'
    tr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Score'
    tr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Year'
    tr.appendChild(th)

    tabellRekorder.appendChild(tr)

    for (let i = 0; i < person.bestStatistics.length; i++) {
        const element = person.bestStatistics[i];
        tr = document.createElement('tr')

        let tdEvent = document.createElement('td')
        tdEvent.innerHTML = element.event
        tr.appendChild(tdEvent)

        let tdScore = document.createElement('td')
        tdScore.innerHTML = element.score
        tr.appendChild(tdScore)


        let tdYear = document.createElement('td')
        tdYear.innerHTML = element.year
        tr.appendChild(tdYear)

        tabellRekorder.appendChild(tr)

    }

}
createSite()
