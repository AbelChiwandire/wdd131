const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  // toggle the hamburger/X icon
  menuButton.classList.toggle('open');

  // toggle the nav visibility
  nav.classList.toggle('open');
});
