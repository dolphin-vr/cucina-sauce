let indexVertical = 1;
let indexHorizontal = 1;
showVertical(indexVertical);
showHorizontal(indexHorizontal);

// Next/previous controls
function plusVertical(n) {
    showVertical(indexVertical += n);
}

function plusHorizontal(n) {
    showHorizontal(indexHorizontal += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showHorizontal(indexHorizontal = n);
}


function showVertical(n) {
    let i;
    let slidesOdd = document.getElementsByClassName("slideOdd");
    let slidesEven = document.getElementsByClassName("slideEven");
    if (n > slidesOdd.length) {indexVertical = 1}
    if (n < 1) {indexVertical = slidesOdd.length}
    for (i = 0; i < slidesOdd.length; i++) {
        slidesOdd[i].style.display = "none";
        slidesEven[i].style.display = "none";
    }
    
    slidesOdd[indexVertical-1].style.display = "block";
    slidesEven[indexVertical-1].style.display = "block";
}

function showHorizontal(n) {
    let i;
    let slides = document.getElementsByClassName("slideHorizont");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {indexHorizontal = 1}
    if (n < 1) {indexHorizontal = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexHorizontal-1].style.display = "block";
    dots[indexHorizontal-1].className += " active";
}