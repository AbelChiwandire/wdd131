const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

const faqButtons = document.querySelectorAll('.faq-question');
const faqText = document.querySelector('.tag');

// Hamburger menu toggle 
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');
  faqText.classList.toggle('open');
});

faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
    });
});