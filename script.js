// JS file for OUR SUCCESS STORY

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;
let autoplay = true; // run autoplay only once on refresh
let interval = setInterval(autoSlide, 4000);

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function showSlide(i) {
  index = i;
  if (index < 0) index = 0; // stop at first
  if (index >= images.length) index = images.length - 1; // stop at last
  slides.style.transform = `translateX(${-index * 100}%)`;
  updateDots();
}

function autoSlide() {
  if (autoplay) {
    index++;
    if (index >= images.length) {
      index = images.length - 1; // stop at last image
      clearInterval(interval); // stop autoplay forever until refresh
      autoplay = false;
    }
    showSlide(index);
  }
}

// Restarting autoplay is disabled — only manual navigation works after first run
prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});


// hamburger

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });
});
