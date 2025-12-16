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
  }, 3000); 
});

// ABOUT ME

document.addEventListener("DOMContentLoaded", function() {
    
    // PARALLAX SCROLL REVEAL ---

    const revealElement = document.getElementById('reveal-text');
    const scrollContainer = document.querySelector('.scroll-container');
    
    const originalText = revealElement.innerText;
    const revealChars = originalText.split(''); 
    revealElement.innerHTML = '';
    
    revealChars.forEach(char => {
        const span = document.createElement('span');
        if (char === ' ') {
            span.textContent = ' '; 
        } else {
            span.textContent = char;
        }
        span.classList.add('letter'); 
        revealElement.appendChild(span);
    });

    const letterSpans = document.querySelectorAll('.letter');
    const totalRevealChars = letterSpans.length;

    window.addEventListener('scroll', () => {
        const containerTop = scrollContainer.offsetTop;
        const containerHeight = scrollContainer.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        let progress = (scrollY - containerTop) / (containerHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        const charsToReveal = Math.floor(progress * totalRevealChars);

        letterSpans.forEach((span, index) => {
            if (index < charsToReveal) {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        });
    });

    //TYPEWRITER EFFECT ---

    const typeElement = document.getElementById('typewriter-text');
   
    const phrases = [
      "Final Year MCA Student",
      "Software Developer",
      "Full Stack Developer",
      "Creative Problem Solver",
      "Strong Communicator",
      "Analytical Thinker",
      "Time Management Expert",
      "Adaptable Learner",
      "Team Player",
      "Building Modern Web Apps",
      "Gemini Certified",
      "Nvidia Certified",
      "Generative AI Certified",
      "UI/UX Focused",
      "Tech Savvy",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function loopTypewriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typeElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
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