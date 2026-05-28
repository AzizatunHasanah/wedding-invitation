// TYPING EFFECT
const text = "A journey of love begins forever...";
const typingText = document.getElementById("typingText");

let i = 0;

function typeText() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeText, 70);
  }
}

setTimeout(typeText, 3000);

// FLOWER EFFECT
function createFlower() {
  const flower = document.createElement("div");

  flower.classList.add("flower");

  flower.style.left = Math.random() * window.innerWidth + "px";

  flower.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 500);

// OPEN INVITATION
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
  intro.classList.add("fade-out");

  music.play();

  document.body.style.overflow = "auto";
});

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    ctx.beginPath();

    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

    ctx.fillStyle = "rgba(255,255,255,.4)";

    ctx.fill();

    p.y -= p.speed;

    if (p.y < 0) {
      p.y = canvas.height;
    }
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// COUNTDOWN
const targetDate = new Date("2026-06-10T08:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `

    <div class="time-box">
      <h3>${days}</h3>
      <span>Days</span>
    </div>

    <div class="time-box">
      <h3>${hours}</h3>
      <span>Hours</span>
    </div>

    <div class="time-box">
      <h3>${minutes}</h3>
      <span>Minutes</span>
    </div>

    <div class="time-box">
      <h3>${seconds}</h3>
      <span>Seconds</span>
    </div>

  `;
}, 1000);

// SCROLL ANIMATION
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

const fadeElements = document.querySelectorAll(".fade-up, .timeline-card");

fadeElements.forEach((el) => {
  observer.observe(el);
});

const galleryItems =
document.querySelectorAll('.gallery-item img');

const modal =
document.getElementById('galleryModal');

const modalImage =
document.getElementById('modalImage');

const closeModal =
document.getElementById('closeModal');

galleryItems.forEach((img)=>{

  img.addEventListener('click',()=>{

    modal.classList.add('show');

    modalImage.src = img.src;
  })
})

closeModal.addEventListener('click',()=>{

  modal.classList.remove('show');
})

const urlParams =
new URLSearchParams(window.location.search);

const guest =
urlParams.get('to');

const guestName =
document.getElementById('guestName');

if(guest){

  guestName.innerHTML =
  decodeURIComponent(guest);

}else{

  guestName.innerHTML =
  "Special Guest";
}