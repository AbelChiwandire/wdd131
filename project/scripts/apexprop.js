const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

const challengeButtons = document.querySelectorAll('.challenge-btn');
const stepButtons = document.querySelectorAll('.step-btn');

const subscribeBtn = document.getElementById('subscribe');

const buyBtn = document.querySelector('.buy-challenge-btn');
const accountsPerStep = 5;

let selectedStep = 0;     
let selectedAccount = 0; 
let selectedPrice = 0; 

// Challenge data array (scaled and diversified)
const challengeData = [
  // 1Step Challenges
  { step: "1Step", account: 5000,  profitTarget: "10%", maxLoss: "5%",  maxDailyLoss: "2%",  minTradingDays: 5, leverage: "1:50",  profitShare: "70%", eaAllowed: "Yes", price: 79  },
  { step: "1Step", account: 10000, profitTarget: "10%", maxLoss: "6%",  maxDailyLoss: "2.5%",minTradingDays: 5, leverage: "1:50",  profitShare: "72%", eaAllowed: "Yes", price: 149 },
  { step: "1Step", account: 25000, profitTarget: "9%",  maxLoss: "6%",  maxDailyLoss: "2.5%",minTradingDays: 6, leverage: "1:75",  profitShare: "74%", eaAllowed: "Yes", price: 349 },
  { step: "1Step", account: 50000, profitTarget: "8%",  maxLoss: "7%",  maxDailyLoss: "3%",  minTradingDays: 7, leverage: "1:75",  profitShare: "76%", eaAllowed: "Yes", price: 599 },
  { step: "1Step", account: 100000,profitTarget: "7%",  maxLoss: "8%",  maxDailyLoss: "3%",  minTradingDays: 8, leverage: "1:100", profitShare: "78%", eaAllowed: "Yes", price: 999 },

  // 2Step Challenges
  { step: "2Step", account: 5000,  profitTarget: "8%",  maxLoss: "4.5%",maxDailyLoss: "2%",  minTradingDays: 8, leverage: "1:50",  profitShare: "75%", eaAllowed: "Yes", price: 99  },
  { step: "2Step", account: 10000, profitTarget: "8%",  maxLoss: "5%",  maxDailyLoss: "2%",  minTradingDays: 8, leverage: "1:50",  profitShare: "76%", eaAllowed: "Yes", price: 199 },
  { step: "2Step", account: 25000, profitTarget: "7%",  maxLoss: "5%",  maxDailyLoss: "2.5%",minTradingDays: 9, leverage: "1:75",  profitShare: "78%", eaAllowed: "Yes", price: 449 },
  { step: "2Step", account: 50000, profitTarget: "6%",  maxLoss: "6%",  maxDailyLoss: "2.5%",minTradingDays: 10,leverage: "1:75",  profitShare: "80%", eaAllowed: "Yes", price: 799 },
  { step: "2Step", account: 100000,profitTarget: "6%",  maxLoss: "6.5%",maxDailyLoss: "3%",  minTradingDays: 10,leverage: "1:100", profitShare: "82%", eaAllowed: "Yes", price: 1299 },

  // Instant Funding Challenges
  { step: "Instant", account: 5000,  profitTarget: "—",  maxLoss: "4%",  maxDailyLoss: "1.5%",minTradingDays: "—", leverage: "1:50",  profitShare: "80%", eaAllowed: "Yes", price: 199 },
  { step: "Instant", account: 10000, profitTarget: "—",  maxLoss: "5%",  maxDailyLoss: "2%",  minTradingDays: "—", leverage: "1:75",  profitShare: "82%", eaAllowed: "Yes", price: 399 },
  { step: "Instant", account: 25000, profitTarget: "—",  maxLoss: "6%",  maxDailyLoss: "2.5%",minTradingDays: "—", leverage: "1:100", profitShare: "85%", eaAllowed: "Yes", price: 599 },
  { step: "Instant", account: 50000, profitTarget: "—",  maxLoss: "7%",  maxDailyLoss: "3%",  minTradingDays: "—", leverage: "1:125", profitShare: "87%", eaAllowed: "Yes", price: 899 },
  { step: "Instant", account: 100000,profitTarget: "—",  maxLoss: "8%",  maxDailyLoss: "3.5%",minTradingDays: "—", leverage: "1:150", profitShare: "90%", eaAllowed: "Yes", price: 1299 }
];


// List of element IDs in the table in the correct order
const elementIds = [
  "profit-target",
  "max-loss",
  "max-daily-loss",
  "min-days",
  "leverage",
  "profit-share",
  "ea-allowed",
  "account-price"
];

// Hamburger menu toggle 
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');
});

// Inject values into html
function updateChallengeTable(selectedIndex) {
    elementIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;

        const value = Object.values(challengeData[selectedIndex])[i + 2];
        el.textContent = value;
    });
}

// Select Initial Step and Account
function setInitialSelection(stepButtons, challengeButtons) {
    stepButtons[0].classList.add('selected');
    challengeButtons[0].classList.add('selected');
}

if (stepButtons.length && challengeButtons.length) {
    setInitialSelection(stepButtons, challengeButtons);
}

const initialIndex = selectedStep * accountsPerStep + selectedAccount;
updateChallengeTable(initialIndex);

const initialChallenge = challengeData[initialIndex];
selectedPrice = initialChallenge.price ?? 0;

localStorage.setItem("selectedStep", selectedStep);
localStorage.setItem("selectedAccount", selectedAccount);
localStorage.setItem("selectedPrice", selectedPrice);

// FAQ Button selection 
function btnSelection(buttons, type) {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            if (type === "step") {
                selectedStep = parseInt(btn.dataset.step, 10);
            } else if (type === "account") {
                selectedAccount = parseInt(btn.dataset.account, 10);
            }

            const selectedIndex = selectedStep * accountsPerStep + selectedAccount;
            selectedPrice = challengeData[selectedIndex].price;

            updateChallengeTable(selectedIndex);
        });
    });
}

// Apply selection 
btnSelection(stepButtons, "step");
btnSelection(challengeButtons, "account");
 
// Save buy details to localStorage
buyBtn.addEventListener('click', () => {
    localStorage.setItem('selectedStep', selectedStep);
    localStorage.setItem('selectedAccount', selectedAccount);
    localStorage.setItem('selectedPrice', selectedPrice);

    // Navigate to checkout
    window.location.href = 'checkout.html';
});

subscribeBtn.addEventListener('click', () => {
    localStorage.setItem('formType', 'subscribe');
});

document.querySelector("form").addEventListener("submit", (e) => {
    localStorage.setItem("submitted", "true");
    e.target.reset();
});    
