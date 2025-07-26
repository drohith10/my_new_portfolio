// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.sidebar nav ul li a');
  const sections = document.querySelectorAll('main section');

  function activateSection(id) {
    // Remove active classes
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Add to clicked link and section
    const targetLink = document.querySelector(`.sidebar nav ul li a[href="#${id}"]`);
    const targetSection = document.getElementById(id);
    if (targetLink && targetSection) {
      targetLink.classList.add('active');
      targetSection.classList.add('active');
      window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    }
  }

  // Attach click events
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      activateSection(id);
    });
  });

  // On load, activate home
  activateSection('home');
});
