const sendMessageBtn = document.getElementById('send-message');

sendMessageBtn.addEventListener('click', () => {
    localStorage.setItem('formType', 'send-message');
});

document.querySelector("form").addEventListener("submit", (e) => {
    localStorage.setItem("submitted", "true");
    e.target.reset();
}); 