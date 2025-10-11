const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');
const sendMessageBtn = document.getElementById('send-message');

// Hamburger menu toggle 
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');
});

sendMessageBtn.addEventListener('click', () => {
    localStorage.setItem('formType', 'send-message');
});

document.querySelector("form").addEventListener("submit", (e) => {
    localStorage.setItem("submitted", "true");
    e.target.reset();
}); 