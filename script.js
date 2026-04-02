// TOGGLEMENU 

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const blur = document.querySelector(".blur-overlay");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
  blur.classList.toggle("open");

  document.body.classList.toggle("stop-scrolling");
}

// DARK MODE


function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    if (isLight) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }

  });
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
});

// ABOUT ME

document.addEventListener("DOMContentLoaded", function () {

  // LOADING ANIMATION

  const loadingContainer = document.querySelector('.loading-container');
  if (loadingContainer) {
    setTimeout(() => {
      loadingContainer.style.display = 'none';
    }, 3000);
  }

  // --- STICKY TEXT ---

  const revealElement = document.getElementById('reveal-text');
  const scrollContainer = document.querySelector('#about');

  if (revealElement && scrollContainer) {
    const originalText = revealElement.innerText;
    const revealChars = originalText.trim().split('');
    revealElement.innerHTML = '';

    revealChars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
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
  }
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
const isSmallScreen = window.innerWidth <= 520;

const observerOptions = {
  threshold: isSmallScreen ? 0.05 : 0.2,
  rootMargin: isSmallScreen
    ? '0px 0px -120px 0px'
    : '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
}, observerOptions);

observer.observe(footer);
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// UPDATE YEAR IN FOOTER

document.getElementById("year").textContent = new Date().getFullYear();
