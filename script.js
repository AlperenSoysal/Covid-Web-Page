var haber1 = document.getElementById("yanhaberler1");
var haber2 = document.getElementById("yanhaberler2");
var haber3 = document.getElementById("yanhaberler3");
var haber4 = document.getElementById("yanhaberler4");
var haber5 = document.getElementById("yanhaberler5");
var haber6 = document.getElementById("yanhaberler6");

var carouselIndex = 0;

function showCarousels() {
  var slides = document.getElementsByClassName("item");
  //console.log(slides);
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  carouselIndex++;
  if (carouselIndex > slides.length) {
    slideIndex = 1;
  }

  slides[carouselIndex - 1].style.display = "block";

  setTimeout(showCarousels, 2500); //foto kaç saniye sürecek
}

function initHandlers() {
  haber1.addEventListener("mouseover", changeOpacity);
  haber2.addEventListener("mouseover", changeOpacity);
  haber3.addEventListener("mouseover", changeOpacity);
  haber4.addEventListener("mouseover", changeOpacity);
  haber5.addEventListener("mouseover", changeOpacity);
  haber6.addEventListener("mouseover", changeOpacity);

  haber1.addEventListener("mouseout", backOpacity);
  haber2.addEventListener("mouseout", backOpacity);
  haber3.addEventListener("mouseout", backOpacity);
  haber4.addEventListener("mouseout", backOpacity);
  haber5.addEventListener("mouseout", backOpacity);
  haber6.addEventListener("mouseout", backOpacity);

  showCarousels();
}

function changeOpacity() {
  event.target.style.opacity = "0.5";
}

function backOpacity() {
  event.target.style.opacity = "1";
}

initHandlers();
