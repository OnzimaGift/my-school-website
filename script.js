JavaScript
// Contact form submission
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.elements[0].value;
    const email = contactForm.elements[1].value;
    const message = contactForm.elements[2].value;

    // Send data to server or email service
    // For demonstration purposes, we'll just display a response
    formResponse.innerText = `Thank you, ${name}! Your message has been sent.`;
    contactForm.reset();
});