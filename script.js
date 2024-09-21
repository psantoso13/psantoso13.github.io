let typed = new Typed(".runningtext", {
  strings: [
    "- a Son a Father and a Husband",
    "- full time Student in the University of life",
    "- your partner for tougher team in your business",
    "- let's merge your ideas with our crativities",
  ],
  typeSpeed: 90,
  backSpeed: 1,
  loop: true,
});

let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) {
  slideIndex = index;
  showSlides();
}
function plusSlides(step) {
  if (step < 0) {
    slideIndex -= 2;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  showSlides();
}
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.getElementById("button1");
function a(img) {
  img.src = "img/detailOn.png";
}
function aOut(img) {
  img.src = "img/detailOff.png";
}

document.getElementById("button2");
function b(img) {
  img.src = "img/certOn.png";
}
function bOut(img) {
  img.src = "img/certOff.png";
}

document.getElementById("button3");
function c(img) {
  img.src = "img/contactOn.png";
}
function cOut(img) {
  img.src = "img/contactOff.png";
}

document.getElementById("tombol4");
function d(img) {
  img.src = "img/instaOn.png";
}
function dOut(img) {
  img.src = "img/instaOff.png";
}

const elTitle1 = document.getElementById("title1");

elTitle1.addEventListener("click", () => {
  const elText1 = document.getElementById("text1");
  elText1.style.display = elText1.style.display === "block" ? "none" : "block";
  const elIcon1 = document.getElementById("icon1");
  elIcon1.src =
    elText1.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle2 = document.getElementById("title2");

elTitle2.addEventListener("click", () => {
  const elText2 = document.getElementById("text2");
  elText2.style.display = elText2.style.display === "block" ? "none" : "block";
  const elIcon2 = document.getElementById("icon2");
  elIcon2.src =
    elText2.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle3 = document.getElementById("title3");

elTitle3.addEventListener("click", () => {
  const elText3 = document.getElementById("text3");
  elText3.style.display = elText3.style.display === "block" ? "none" : "block";
  const elIcon3 = document.getElementById("icon3");
  elIcon3.src =
    elText3.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle4 = document.getElementById("title4");

elTitle4.addEventListener("click", () => {
  const elText4 = document.getElementById("text4");
  elText4.style.display = elText4.style.display === "block" ? "none" : "block";
  const elIcon4 = document.getElementById("icon4");
  elIcon4.src =
    elText4.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle5 = document.getElementById("title5");

elTitle5.addEventListener("click", () => {
  const elText5 = document.getElementById("text5");
  elText5.style.display = elText5.style.display === "block" ? "none" : "block";
  const elIcon5 = document.getElementById("icon5");
  elIcon5.src =
    elText5.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle6 = document.getElementById("title6");

elTitle6.addEventListener("click", () => {
  const elText6 = document.getElementById("text6");
  elText6.style.display = elText6.style.display === "block" ? "none" : "block";
  const elIcon6 = document.getElementById("icon6");
  elIcon6.src =
    elText6.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});
