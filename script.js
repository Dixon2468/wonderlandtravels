// Add interactive features here
document.addEventListener('DOMContentLoaded', () => {
    // For example, a simple alert for contact form submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});
