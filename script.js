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
    const textElement = document.getElementById('reveal-text');
    const container = document.querySelector('.scroll-container');
    
    const text = textElement.innerText;
    const chars = text.split(''); 
    
    textElement.innerHTML = '';
    
    chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter'); 
        textElement.appendChild(span);
    });

    const letterSpans = document.querySelectorAll('.letter');
    const totalChars = letterSpans.length;

    window.addEventListener('scroll', () => {
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        let progress = (scrollY - containerTop) / (containerHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        const charsToReveal = Math.floor(progress * totalChars);

        letterSpans.forEach((span, index) => {
            if (index < charsToReveal) {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        });
    });
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