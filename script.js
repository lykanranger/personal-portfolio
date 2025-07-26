
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
  const loadingButton = document.querySelector('.loading-button');
  const loadingContainer = document.querySelector('.loading-container');
  
  setTimeout(() => {
    loadingButton.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    loadingContainer.style.display = 'none';
    // window.location.href = 'https://your-website-url.com';
  }, 3500); 
});

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


// CERTIFICATES LOGOS

var logos = document.querySelectorAll(".cert-logos");
logos.forEach(function(logoContainer) {
  var copy = logoContainer.querySelector(".cert-logos-slide").cloneNode(true);
  logoContainer.appendChild(copy);
});
