// Retrieve stored values
const storedStep = localStorage.getItem('selectedStep');
const storedAccount = localStorage.getItem('selectedAccount');
const storedPrice = localStorage.getItem('selectedPrice');

const challengeType = document.getElementById('challenge-type');
const accountSize = document.getElementById('account-size');
const price = document.getElementById('price');

// Validate that stored values existance
if (storedStep !== null && storedAccount !== null && storedPrice !== null) {
    const stepNames = ['1Step', '2Step', 'Instant']; 
    challengeType.textContent = stepNames[parseInt(storedStep, 10)] ?? '';

    const accountSizes = ['5K', '10K', '25K', '50K', '100K'];
    accountSize.textContent = accountSizes[parseInt(storedAccount, 10)] ?? '';

    // Inject price
    price.textContent = `$${storedPrice}`;
}

const placeOrderBtn = document.getElementById('place-order');

placeOrderBtn.addEventListener('click', () => {
    localStorage.setItem('formType', 'place-order');
});

document.querySelector("form").addEventListener("submit", (e) => {
    localStorage.setItem("submitted", "true");
    e.target.reset();
}); 