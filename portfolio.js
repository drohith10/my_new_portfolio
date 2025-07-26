const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const id = link.getAttribute('href').substring(1);
    sections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === id) sec.classList.add('active');
    });
  });
});

// On load, show Home
window.addEventListener('DOMContentLoaded', () => document.querySelector('#home').classList.add('active'));
