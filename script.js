// togel class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Ketika diskrolakan berubah warna
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const slider = document.getElementById("heroSlider");
const slides = document.querySelectorAll(".single-slider");
const totalSlides = slides.length;

let index = 0;
let interval;

function showSlide(i) {
  const slideWidth = 100 / totalSlides;
  slider.style.transform = `translateX(-${i * slideWidth}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

document.querySelector(".next").onclick = () => {
  nextSlide();
  resetAutoSlide();
};

document.querySelector(".prev").onclick = () => {
  prevSlide();
  resetAutoSlide();
};

startAutoSlide();

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
