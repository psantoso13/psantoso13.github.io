let typed = new Typed(".runningtext", {
    strings: ["- a Son a Father and a Husband", "- full time Student in the University of life", "- your partner for tougher team in your businesses"],
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
    
    if(step < 0) {
        slideIndex -= 2;
        
        if(slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
    }
    
    showSlides();
 }
  function showSlides() {
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove('active');
    }
    slideIndex++;
    if(slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
     if(timeoutId) {
        clearTimeout(timeoutId);
     }
    timeoutId = setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

document.getElementById('button1');
    function a(img)
        {
        img.src = "img/detailOn.png"
        }
    function aOut(img)
        {
        img.src = "img/detailOff.png"
        }

document.getElementById('button2');
    function b(img)
        {
        img.src = "img/certOn.png"
        }
    function bOut(img)
        {
        img.src = "img/certOff.png"
        }

document.getElementById('button3');
    function c(img)
        {
        img.src = "img/contactOn.png"
        }
    function cOut(img)
        {
        img.src = "img/contactOff.png"
        }

document.getElementById('tombol4');
    function d(img)
        {
        img.src = "img/gitOn.png"
        }
    function dOut(img)
        {
        img.src = "img/gitOff.png"
        }