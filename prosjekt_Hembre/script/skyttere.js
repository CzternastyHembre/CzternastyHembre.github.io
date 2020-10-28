function createSite(skytterIndex) {
    const index = getIndex()//GETING THE INDEX OF THE SHOOTER
    if (index == -1) return //Retruns if it doesnt find an index

    const skytter = skyttere[skytterIndex]
    const main = document.querySelector('main')
    main.id = 'skytter'
//    main.innerHTML = ''

//CHANGING TITLE------------------------------------------------------------
    changeTitle(skytter)

//MAKING THE TOP DIV--------------------------------------------------------
    const divtop = maketopDiv(skytter)
    main.appendChild(divtop)

//MAKING THE BOTTOM DIV-----------------------------------------------------
    const divBottom = makeBottomDiv(skytter)
    main.appendChild(divBottom)
}

function changeTitle(skytter) {//CHANGING THE TOP DIV-----------------------------
    document.title = skytter.about.surName + ' ' + skytter.about.lastName
}
function maketopDiv(skytter) {//CREATING THE TOP DIV
//MAIKNG TOP-DIV-ELEMNT--------------------------------------------------------
    const topDiv = document.createElement('div')
    topDiv.id = 'person_side_top'

//MAKING THE ABOUTDIV----------------------------------------------------------
    const aboutDiv = makeAboutDiv(skytter)


//MAKING 'person_side_info' DIV--------------------------------------------------------
    const infoDiv = makeInfoDiv(skytter)
    
    //Making familydiv------------------------------------------------
    const familyDiv = makeFamilyDiv(skytter)

    
    
//APPENDING------------------------------------------------------------------------
    topDiv.appendChild(aboutDiv)
    topDiv.appendChild(infoDiv)
    topDiv.appendChild(familyDiv)


    return topDiv
}
function makeBottomDiv(skytter) {
//StatsDiv-------------------------------------------
    const statsDiv = document.createElement('div')
    statsDiv.id = 'grid_container_stats'
//MERITS-------------------------------------------------

   const meritsDiv = makeMeritsDiv(skytter)
   statsDiv.appendChild(meritsDiv)

//PERSONAL RECORDS----------------------------------------
    const recordsDiv = makeRecordsDiv(skytter)
    statsDiv.appendChild(recordsDiv)

    return statsDiv

}

//Functions for topDiv--------------------------------------------------
function getYears(skytter) {//cALCUTATING THE AGE FOR THE BIRTHDAY----------------
    let today = new Date()
    let dd = Number(String(today.getDate()+1).padStart(2, '0')) - skytter.about.birthDay
    let mm = Number(String(today.getMonth() + 1).padStart(2, '0')) - skytter.about.birthMonth//January is 0!
    let yyyy = today.getFullYear() - skytter.about.birthYear

    if (mm<0) if (mm<1 || dd<0) yyyy--
    return yyyy

}
function makeAboutDiv(skytter,local = false) {
//CREATING ABOUTDIV-----------------------------------------
    const aboutDiv = document.createElement('div')
    aboutDiv.id = 'person_bilder'
//IMG---------------------------------------------------
    const img = makeMainImage(skytter)
    aboutDiv.appendChild(img)

//FAMILY----------------------------------------------------------
    // const familyDiv = makeFamilyDiv(skytter,local)
    // aboutDiv.appendChild(familyDiv)
    return aboutDiv
}
function makeInfoDiv(skytter) {//Ikke ferdig
    //MAKING 'person_side_info' DIV--------------------------------------------------------
        const infoDiv = document.createElement('div')
        infoDiv.id = 'person_side_info'

    //Overskrift--------------------------------------------------------
        const overskrift = document.createElement('h1')
        overskrift.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName
        infoDiv.appendChild(overskrift)

    //Beskrivelse kort--------------------------------------------------------
        const descritonP = document.createElement('p')
        descritonP.innerHTML = skytter.description.short
        infoDiv.appendChild(descritonP)

    //Alder--------------------------------------------------------
        const age = getYears(skytter)
        const ageP = document.createElement('p')
        ageP.innerHTML = 'Age: ' + age + ' years'
        infoDiv.appendChild(ageP)

    //Bithday--------------------------------------------------------
        const brithdayP = document.createElement('p')
        brithdayP.innerHTML = 'Birth: ' + skytter.about.birthDay +'/'+ skytter.about.birthMonth +'/'+ skytter.about.birthYear + ', ' + skytter.about.birthPlace
        infoDiv.appendChild(brithdayP)

    //medlem i bpk med linken--------------------------------------------------------
        const memberShipP = document.createElement('p')
        memberShipP.innerHTML = 'membership: '
        const link = document.createElement('a')
        link.id = 'medlemskap'
        link.href = skytter.memberShip.link
        link.innerHTML = skytter.memberShip.name
        link.target = '_blank'
        memberShipP.appendChild(link)
        infoDiv.appendChild(memberShipP)

    //legger til select-element------------------------------------------------------
        const select = document.createElement('select')
        select.id = 'dp_meny'

        let opt = document.createElement('option')
        opt.disabled = true
        opt.selected = true
        opt.innerHTML = 'Competition Statistics'
        select.appendChild(opt)

        for (const stat of skytter.yearlyStatistics) {
            opt = document.createElement('option')
            opt.value = stat[0]
            opt.innerHTML = 'Events in ' + stat[1]
            select.appendChild(opt)
        }
        infoDiv.appendChild(select)

        select.onchange = function () {
            const valgt = this.options[this.selectedIndex] // js property
            window.open(valgt.value)
        }
        return infoDiv
}
function makeMainImage(skytter) {
    const img = document.createElement('img')
    img.src = skytter.image.mainImage
    return img
}
function makeFamilyDiv(skytter, local) {
    const familyDiv = document.createElement('div')
    familyDiv.id = 'familyDiv'

    for (const obj in skytter.family) {
        const familyType = skytter.family[obj]
        if (skytter.family.hasOwnProperty(obj) && familyType.length>0) {
            const familyTypeDiv = document.createElement('div')
            familyTypeDiv.id = 'familyType'

            const p = document.createElement('p')
            p.innerHTML = obj.charAt(0).toUpperCase() + obj.substring(1) + ' who compete:' //For å for føste bokstav Stor
            familyTypeDiv.appendChild(p)

            familyTypeDiv.appendChild(makeFamilyTypeLinks(familyType, local))

            familyDiv.appendChild(familyTypeDiv)
        }
    }
    return familyDiv
}
function makeFamilyTypeLinks(familyType, local) {
    const div = document.createElement('div')
    div.id = 'familyTypeLinks'
    for (let i = 0; i < familyType.length; i++) {
        const individual = familyType[i];
        const a = makePersonLink(individual, local)
        div.appendChild(a)
    }
    return div
}
function makePersonLink(individual, local) {
    const a = document.createElement('a')
    a.href = 'skyttere.html?skytter='+ individual[1]
    if (local) a.href = '#'+individual[1]
    a.innerHTML = individual[0]
    return a
}

//Functions for bottomDiv-------------------------------------------------------
function makeMeritsDiv(skytter) {
    meritsDiv = document.createElement('div')
    meritsDiv.id = 'merits'

    const meritsTitle = document.createElement('h1')
    meritsTitle.innerHTML = 'MERITS'
    meritsDiv.appendChild(meritsTitle)

 //WRITING OUT ALL THE MERITS
    for (let i = 0; i < skytter.merits.length; i++) {
        const element = skytter.merits[i]
        const div = document.createElement('div')
        div.id = 'merit'

        const kursive = document.createElement('i')
        kursive.innerHTML = element.merit
        div.appendChild(kursive)

        let strengInd = '<b>Ind:</b>'
        let tomStreng = true

        for (let medalje in element.results.ind){
            const antallMedaljer = element.results.ind[medalje]
            if (antallMedaljer > 0) {
                strengInd+= ' | '+antallMedaljer+' '+medalje
                tomStreng = false
            }
        }
        if (!tomStreng) {
            p = document.createElement('p')
            p.innerHTML = strengInd
            div.appendChild(p)
        }

        let strengTeam = '<b>Team:</b>'
        tomStreng = true

        for (let medalje in element.results.team){
            const antallMedaljer = element.results.team[medalje]
            if (antallMedaljer > 0) {
                strengTeam+= ' | '+antallMedaljer+' '+medalje
                tomStreng = false
            }
        }
        if (!tomStreng) {
            p = document.createElement('p')
            p.innerHTML = strengTeam
            div.appendChild(p)
        }
        meritsDiv.appendChild(div)
    }
    return meritsDiv

}
function makeRecordsDiv(skytter) {
    const recordsDiv = document.createElement('div')
    recordsDiv.id = 'personal-records'

    const titlereDiv = document.createElement('h1')
    titlereDiv.innerHTML = 'PERSONAL RECORDS'
    recordsDiv.appendChild(titlereDiv)

    const recordsTable = document.createElement('table')
    recordsTable.id = 'person_rekorder'
    recordsDiv.appendChild(recordsTable)

    const headerTableRow = document.createElement('tr')
    const eventTableHeader = document.createElement('th')
    eventTableHeader.innerHTML = 'Event'

    const scoreTableHeader = document.createElement('th')
    scoreTableHeader.innerHTML = 'Score'

    const yearTableHeader = document.createElement('th')
    yearTableHeader.innerHTML = 'Year'

    headerTableRow.appendChild(eventTableHeader)
    headerTableRow.appendChild(scoreTableHeader)
    headerTableRow.appendChild(yearTableHeader)

    recordsTable.appendChild(headerTableRow)

    for (let i = 0; i < skytter.bestStatistics.length; i++) {
        const obj = skytter.bestStatistics[i]
        let tr = document.createElement('tr')

        for (const ovelse in obj) {
            if (obj.hasOwnProperty(ovelse)) {
                const element = obj[ovelse];
                let td = document.createElement('td')
                td.innerHTML = element
                tr.appendChild(td)

            }
        }
        recordsTable.appendChild(tr)
    }

    return recordsDiv
}

//Getting index functions
function getIndex() {//FUNCTION TO FETCH THE SHOOTER INDEX FOR SHOOTER ID---
    const url_string = window.location.href //window.location.href
    const url = new URL(url_string)
    const personId = url.searchParams.get('skytter')
    return findIndex(personId)
}
function findIndex(id) {
    for (let i = 0; i < skyttere.length; i++) {
        const element = skyttere[i].id
        if (element == id) {
            return i
        }
    }
    return -1
}


function writeStatsOmOss() {
const persons = document.querySelectorAll('.hembre')
const alleSpillere = document.querySelectorAll('#alle_spillere')
for (let i = 0; i < persons.length; i++) {
    const skytter = skyttere[findIndex(persons[i].id)]
    const person = persons[i]

    const infoDiv = makeInfoDiv(skytter)
    infoDiv.appendChild(makeAthleteLink(skytter))
    
    const familyDiv = makeFamilyDiv(skytter,true)
    const img = makeMainImage(skytter)
    
    person.appendChild(infoDiv)
    person.appendChild(familyDiv)
    person.appendChild(img)
}
}
function makeAthleteLink(skytter) {//OBS ikke komplett************************************************
    const a = document.createElement('a')
    a.href = 'skyttere.html?skytter='+skytter.id
    a.innerHTML = 'Mer om ' +skytter.about.surName + ' ' + skytter.about.lastName
    return a
}
