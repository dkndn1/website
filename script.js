document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // "Email Me" button functionality
    const emailMeBtn = document.getElementById('email-me-btn');
    if (emailMeBtn) {
        emailMeBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            // **** IMPORTANT: Change this to your email address! ****
            const emailAddress = 'your-email@example.com';
            // **** IMPORTANT: Change [Your Product Name] ****
            const subject = 'Inquiry about [Your Product Name]';
            const body = 'Hello,\n\nI am interested in learning more about [Your Product Name].\n\n[Please add your questions here]\n\nThanks!';

            window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    // "Contact Me" button - smooth scroll to contact section
    const contactMeBtn = document.getElementById('contact-me-btn');
    const contactSection = document.getElementById('contact');

    if (contactMeBtn && contactSection) {
        contactMeBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor link behavior
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- Placeholder for 3D Model Initialization (if needed) ---
    // If your 3D models require JavaScript to initialize (e.g., using Three.js directly),
    // you would put that code here, targeting #model-container-1 and #model-container-2.
    //
    // function initModel1(containerId) {
    //     const container = document.getElementById(containerId);
    //     // ... your Three.js or Babylon.js initialization code ...
    //     console.log(`Initializing 3D model in ${containerId}`);
    // }
    // initModel1('model-container-1');
});