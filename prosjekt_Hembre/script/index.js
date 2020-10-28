function main() {
    const main = document.querySelector('main')
    const gch =  document.createElement('div')
    gch.className = 'grid-container-hjem'

    // main.innerHTML = ""
//Sporsors------------------------------------------------
    const sponsors = document.createElement('div')
    sponsors.id = 'sponsors'
    sponsors.appendChild(createSponsors())


    gch.appendChild(sponsors)



//Center--------------------------------------------------
    const center = document.createElement('div')
    center.id = 'center'

    center.appendChild(createSlideshow())
    center.appendChild(createSlideshowButtons())
    center.appendChild(createAtletes())
    gch.appendChild(center)

//Supporters----------------------------------------------
    const  supporters = document.createElement('div')
        supporters.id = 'supporters'
        supporters.appendChild(createSupporters())


    gch.appendChild(supporters)





//Main----------------------------------------------------
    main.appendChild(gch)



}

//Sponsors functions--------------------------------------
function createSponsors() {
    const container = document.createElement('div')
    container.className = 'grid-container-sponsors'

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Sponsors'
    container.appendChild(h1)

    for (let i = 0; i < sponsors.length; i++) {
        container.appendChild(makeSponsor(i))
    }
    return container
}
function makeSponsor(i) {
    const sponsor = sponsors[i]
    const a = document.createElement('a')
    a.href = sponsor.link

    const div = document.createElement('div')
    div.className = 'sponsor'

    const img = document.createElement('img')
    img.src = sponsor.img

    const h4 = document.createElement('h4')
    h4.innerHTML = sponsor.name

    a.appendChild(h4)
    a.appendChild(img)
    div.appendChild(a)
    return div

}




//Center functions----------------------------------------

function createAtletes() {
    const container = document.createElement('div')
    container.className = 'grid-container-athletes'

    for (let i = 0; i < skyttere.length; i++) {
        const element = skyttere[i]
        if (element.isShown) {
            container.appendChild(makeAthlete(i))
        }
    }
    return container
}
function makeAthlete(i) {
    const skytter = skyttere[i]


    const img = document.createElement('img')
    img.src = skytter.image.mainImage

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName

    const divAthlete = document.createElement('div')
    divAthlete.appendChild(img)
    divAthlete.appendChild(textDiv)

    const a = document.createElement('a')
    a.className = 'athlete'
    a.href = 'skyttere.html?skytter='+skytter.id

    a.appendChild(divAthlete)

    return a

}
function createSlideshow() {
    const container = document.createElement('div')
    container.className = 'slideshow-container'

    for (let i = 0; i < bilder.slideShow.length; i++) {
        container.appendChild(makeSlide(i))
    }
    return container
}
function makeSlide(i) {
    const src = bilder.slideShow[i]

    const divSlides = document.createElement('div')
    divSlides.className = 'slides fade'

    const img = document.createElement('img')
    img.src = src

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = 'Tekst her'

    divSlides.appendChild(img)
    divSlides.appendChild(textDiv)

    return divSlides
}
function createSlideshowButtons() {

    const buttonSlidesDiv = document.createElement('div')
    buttonSlidesDiv.className = 'buttonsSlides'

    const prevSpan = document.createElement('span')
    prevSpan.innerHTML = '<'
    prevSpan.id = 'prev'

    buttonSlidesDiv.appendChild(prevSpan)

    const nextSpan = document.createElement('span')
    nextSpan.innerHTML = '>'
    nextSpan.id = 'next'

    buttonSlidesDiv.appendChild(nextSpan)

    return buttonSlidesDiv

}



// supporters functions--------------------------------------
function createSupporters() {
    const container = document.createElement('div')
    container.className = 'grid-container- supporters'

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Supporters'
    container.appendChild(h1)

    for (let i = 0; i <  supporters.length; i++) {
        container.appendChild(makeSupporters(i))
    }
    return container
}
function makeSupporters(i) {
    const stottespiller =  supporters[i]
    const a = document.createElement('a')

    const div = document.createElement('div')
    div.className = 'stottespiller'

    const h3 = document.createElement('h3')
    h3.innerHTML = stottespiller.name

    const alder = document.createElement('h5')
    alder.innerHTML = stottespiller.alder
    const klubb = document.createElement('h5')
    klubb.innerHTML = stottespiller.klubb
    const meritter = document.createElement('h5')
    meritter.innerHTML = stottespiller.meritter


    a.appendChild(h3)
    a.appendChild(alder)
    a.appendChild(klubb)
    a.appendChild(meritter)
    div.appendChild(a)
    return div

}
