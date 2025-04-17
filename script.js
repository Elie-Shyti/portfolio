document.addEventListener('DOMContentLoaded', () => {
  // ===== Révélation des sections avec IntersectionObserver =====
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    threshold: 0.2
  };
  
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(revealSection, observerOptions);
  sections.forEach(section => observer.observe(section));

  // ===== Smooth scrolling pour les liens de navigation =====
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // ===== Effet de machine à écrire pour le titre =====
  function typeWriter(element, speed) {
    const text = element.innerText;
    element.innerText = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerText += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  const headerTitle = document.querySelector('.header-container h1');
  if (headerTitle) {
    typeWriter(headerTitle, 150);
  }

  // ===== Bouton "Retour en haut" =====
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'backToTop';
  backToTopButton.innerText = '↑';
  document.body.appendChild(backToTopButton);

  // Style initial du bouton (peut être ajusté dans le CSS pour centraliser le style)
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.display = 'none';
  backToTopButton.style.padding = '10px';
  backToTopButton.style.fontSize = '18px';
  backToTopButton.style.backgroundColor = '#1ABC9C';
  backToTopButton.style.color = '#0e0e12';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '50%';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
