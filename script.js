// Run after DOM is loaded
window.onload = function() {
  // Initialize particles.js with a simple configuration
  particlesJS('particles-js', {
    particles: {
      number: { value: 60 },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'repulse' }
      }
    }
  });


  // Smooth scroll for sidebar links
  const navLinks = document.querySelectorAll('nav.sidebar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};
