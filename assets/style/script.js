// ============== Home page Hero section ===============
const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

// Start autoplay after DOM is ready
setInterval(changeSlide, 4000);

// ============= Learn More button ====================
const btn = document.querySelector(".btn");
const arrow = document.querySelector(".btn .arrow");

if (btn && arrow) {
  btn.addEventListener("mouseenter", () => {
    arrow.style.transform = "translateX(0)";
    arrow.style.opacity = "1";
  });

  btn.addEventListener("mouseleave", () => {
    arrow.style.transform = "translateX(-15px)";
    arrow.style.opacity = "0";
  });
}

// ============= Tech Partner =======================