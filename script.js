let slides = document.querySelectorAll(".slide");

function nextSlide(currentIndex,nextIndex) {
    slides[currentIndex].style.display = "none";
    slides[nextIndex].style.display = "flex";
}

function previousSlide(currentIndex,previousIndex) {
    slides[currentIndex].style.display = "none";
    slides[previousIndex].style.display = "flex";
}

