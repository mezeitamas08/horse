let slideHorse = 1;
showHorses(slideHorse);

function plusSlides(n) {
  showHorses(slideHorse += n);
}

function currentSlide(n) {
  showHorses(slideHorse = n);
}

function showHorses(n) {
  let i;
  let slides = document.getElementsByClassName("horse_alone-left-slides");
  let dots = document.getElementsByClassName("gallery-small");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideHorse = 1}
  if (n < 1) {slideHorse = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideHorse-1].style.display = "block";
  dots[slideHorse-1].className += " active";
  captionText.innerHTML = dots[slideHorse-1].alt;
}