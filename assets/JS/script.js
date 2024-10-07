// JavaScript for toggling the mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-gray-900', 'shadow-lg');
    } else {
        nav.classList.remove('bg-gray-900', 'shadow-lg');
    }
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero');
    const heroSectionTop = heroSection.offsetTop;

    if (window.scrollY >= heroSectionTop - navbar.offsetHeight) {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-dark');
    }
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const loadingSpinner = document.getElementById('loading-spinner');
    const successMessage = document.getElementById('success-message');

    // Show loading spinner
    submitBtn.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');

    // Simulate form submission delay
    setTimeout(() => {
        // Hide loading spinner
        loadingSpinner.classList.add('hidden');
        // Show success message
        successMessage.classList.remove('hidden');
        // Clear form fields
        document.getElementById('contact-form').reset();
        // Show submit button again after a short delay
        setTimeout(() => {
            successMessage.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        }, 3000);
    }, 2000);
});