let slideIndex = -1;
showSlides()


const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click", btnClick)
prev.addEventListener("click", btnClick)

function btnClick(event) {
    eventType = event.target.id
    if (eventType == 'next') {
        nextSlide(1)
    } else {
        nextSlide(-1)
    }
}

function showSlides() {
    nextSlide(1)
    setTimeout(showSlides, 5000); // Change image every 5000 milliseconds
}

function nextSlide(n) {
    const slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex += n

    if (slideIndex >= slides.length) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }
    slides[slideIndex].style.display = "block";
}