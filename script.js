let slides = Array.from(document.querySelectorAll(".slider__item"));
let prevSlideButton = document.querySelector("#prev_button");
let nextSlideButton = document.querySelector("#next_button");
let sliderNavItems = Array.from(document.querySelectorAll(".slider__nav-item"));
let currentIdx = 0;


prevSlideButton.addEventListener("click", function(event) {
    slides[currentIdx].classList.toggle("d-none");
    sliderNavItems[currentIdx].classList.toggle("theme-yellow");
    // if current slide is first than jump to the last slider
    if (currentIdx === 0) {
        prevSlide(currentIdx = slides.length - 1);
    } else {
        prevSlide(currentIdx--);
    }
})

nextSlideButton.addEventListener("click", function(event) {
    slides[currentIdx].classList.toggle("d-none");
    sliderNavItems[currentIdx].classList.toggle("theme-yellow");

        // if current slide is last than jump to the first slider    
    if (currentIdx === slides.length - 1) {
        nextSlide(currentIdx = 0);
    } else {
        nextSlide(currentIdx++);
    }   
});

function nextSlide() {
    // slides[currentIdx].classList.add("d-flex");
    slides[currentIdx].classList.toggle("d-none");
    sliderNavItems[currentIdx].classList.toggle("theme-yellow");    
}

function prevSlide() {
    // slides[currentIdx].classList.add("d-flex");
    slides[currentIdx].classList.toggle("d-none");
    sliderNavItems[currentIdx].classList.toggle("theme-yellow");

}


function onSliderNavItemClick(event) {
    // make all slides invisible
    for (slide of slides) {
        slide.classList.add("d-none");
    }

    for (sliderNavItem of sliderNavItems) {
        sliderNavItem.classList.remove("theme-yellow");
    }

    for (let i = 0; i < slides.length; i++) {
        if (event.target.dataset.num === slides[i].dataset.id) {
            event.target.closest("LI").classList.add("theme-yellow");
            slides[i].classList.toggle("d-none");
            currentIdx = i;
        }
    }
}

// add slider nav items listeners
for (let i = 0; i < sliderNavItems.length; i++) {
    sliderNavItems[i].addEventListener("click", onSliderNavItemClick);
}



