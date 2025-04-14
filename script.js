// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Utilisation de l'Intersection Observer pour révéler les sections animées lors du scroll.
    const sections = document.querySelectorAll('.section');
  
    const observerOptions = {
      threshold: 0.2
    };
  
    const revealSection = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(revealSection, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  