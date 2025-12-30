// TOGGLEMENU 

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// TYPEING

const typingText = document.getElementById("typing-text");

const names = [
  "KARUN BINNY",
  "卡伦·宾尼",
  "كارون بيني",
  "카룬 비니"
];

let nameIndex = 0;
let charIndex = 0;

function typeText() {
  if (nameIndex === 0) {
    typingText.style.fontWeight = "300";
  } else {
    typingText.style.fontWeight = "600";
  }

  let currentName = names[nameIndex];

  if (charIndex < currentName.length) {
    typingText.innerHTML += currentName[charIndex];
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(() => {
      typingText.innerHTML = "";
      charIndex = 0;
      nameIndex++;
      if (nameIndex >= names.length) {
        nameIndex = 0;
      }
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

    // --- 1. HORIZONTAL SCROLL ---
    
    const track = document.querySelector('.ticker-scroll-track');
    const stickyWrap = document.querySelector('.ticker-sticky-wrap');
    const scroller = document.querySelector('.ticker-move');
    const progressBar = document.querySelector('.ticker-progress');

    let currentScrollX = 0;
    let targetScrollX = 0;
    let maxTranslate = 0;
    let animationFrameId;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    function initTicker() {
        if (!track || !scroller) return;
        const contentWidth = scroller.scrollWidth;
        const viewportWidth = window.innerWidth;
        maxTranslate = contentWidth - viewportWidth;

        if (maxTranslate <= 0) {
            maxTranslate = 0;
            track.style.height = '100vh';
            return;
        }
        track.style.height = `${maxTranslate + window.innerHeight}px`;
    }

    function animateTicker() {
        currentScrollX = lerp(currentScrollX, targetScrollX, 0.08);
        
        if (scroller) {
            scroller.style.transform = `translateX(-${currentScrollX}px)`;
        }

        if (progressBar && maxTranslate > 0) {
            const progress = Math.max(0, Math.min(1, currentScrollX / maxTranslate));
            progressBar.style.transform = `scaleX(${progress})`;
        }

        if (Math.abs(targetScrollX - currentScrollX) > 0.5) {
            animationFrameId = requestAnimationFrame(animateTicker);
        }
    }

    function onScroll() {
        if (!track) return;
        
        const rect = track.getBoundingClientRect();
        const start = 0;
        const scrollDistance = -rect.top;
        targetScrollX = Math.max(0, Math.min(scrollDistance, maxTranslate));

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animateTicker);
    }

    initTicker();
    window.addEventListener('resize', initTicker);
    window.addEventListener('scroll', onScroll, { passive: true });


    // --- 2. PARALLAX TEXT REVEAL ---

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

// UPDATE YEAR IN FOOTER

document.getElementById("year").textContent = new Date().getFullYear();