
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

// ABOUT ME

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typewriter-text');
    
    const phrases = [ 
        "MCA Final year", 
        "Software Developer", 
        "Creative Problem Solver",
        "Generative AI Certified",
        "Full Stack Developer",
        "Tech Savvy",
        "Gemini Certified University Student",
        "Building Modern Web Apps",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function loopTypewriter() {
        const currentPhrase = phrases[phraseIndex];
        const chars = [...currentPhrase]; 

        if (isDeleting) {
            textElement.textContent = chars.slice(0, charIndex - 1).join("");
            charIndex--;
            typeSpeed = 50; 
        } else {
            textElement.textContent = chars.slice(0, charIndex + 1).join("");
            charIndex++;
            typeSpeed = 100; 
        }

        if (!isDeleting && charIndex === chars.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; 
            typeSpeed = 500; 
        }

        setTimeout(loopTypewriter, typeSpeed);
    }

    loopTypewriter();
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

// BACK TO TOP BUTTON

const backToTopBtn = document.querySelector('.back2top');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

observer.observe(footer);


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// SMOOTH SCROLL

function smoothScrollTo(element) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = progress < 0.5
      ? 4 * Math.pow(progress, 3)
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startPosition + distance * ease);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}