
// TOGGLEMENU 

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// TYPEING

const typingText = document.getElementById("typing-text");
const text = "KARUN BINNY";
let index = 0;

function typeText() {
  if (index < text.length) {
    typingText.innerHTML += text[index];
    index++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(() => {
      typingText.innerHTML = "";
      index = 0;
      typeText();
    }, 1000);
  }
}

typeText();

// LOADING ANIMATION

document.addEventListener('DOMContentLoaded', function() {
  const loadingContainer = document.querySelector('.loading-container');
  
  setTimeout(() => {
    loadingContainer.style.display = 'none';
  }, 3500); 
});

// LOGO SLIDE

const logosSlide = document.querySelector('.logos-slide');
const clonedLogosSlide = logosSlide.cloneNode(true);
document.querySelector('.logos').appendChild(clonedLogosSlide);

// CONTACT

const form = document.querySelector('.app-form');

form.addEventListener('submit', (e) => {
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const contact = form.querySelector('input[name="contact"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  if (!name || !email || !contact || !message) {
    alert('Please fill out all fields');
    e.preventDefault();
  }
});