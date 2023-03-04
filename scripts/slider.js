let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slidesOdd = document.getElementsByClassName("slideOdd");
    let slidesEven = document.getElementsByClassName("slideEven");
    if (n > slidesOdd.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesOdd.length}
    for (i = 0; i < slidesOdd.length; i++) {
        slidesOdd[i].style.display = "none";
        slidesEven[i].style.display = "none";
    }
    
    slidesOdd[slideIndex-1].style.display = "block";
    slidesEven[slideIndex-1].style.display = "block";
}