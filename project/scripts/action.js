// Retrieve formType 
const formType = localStorage.getItem('formType');

const feedback = document.getElementById('feedback');

// Determine feedback according to formType
if (formType && feedback) {
    switch (formType) {
        case 'subscribe':
            feedback.textContent = `Thank you for subscribing to our newsletter!`;
            break;
        case 'place-order':
            feedback.textContent = `Your order has been placed successfully!`;
            break;
        case 'send-message':
            feedback.textContent = `Your message has been sent. We'll get back to you shortly!`;
            break;
        default:
            feedback.textContent = `Form submitted.`;
            break;
    }
} else if (feedback) {
    feedback.textContent = `Form submitted.`;
}

localStorage.removeItem('formType');

