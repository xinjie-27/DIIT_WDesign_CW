let slideIndex = 1;
let slideInterval;

// Show the first slide initially
showSlides(slideIndex);

// Start automatic slideshow
startAutoSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlides();
}

// Function to show the current slide and set the active dot
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to automatically show the next slide
function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slideInterval = setTimeout(autoShowSlides, 10000); // Change image every 10 seconds
}

// Start the automatic slideshow
function startAutoSlides() {
  slideInterval = setTimeout(autoShowSlides, 10000); // Start after initial delay
}

// Reset the automatic slideshow timer
function resetAutoSlides() {
  clearTimeout(slideInterval);
  startAutoSlides();
}


