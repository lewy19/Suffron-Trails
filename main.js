let current = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

// Start with first image
slides.forEach((slide, index) => {
    if (index !== 0) slide.style.display = 'none';
});
slides[0].classList.add('active');

// Change every 4 seconds
setInterval(nextSlide, 4000);
// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Light Mode';
    } else {
        toggleBtn.textContent = '🌙 Dark Mode';
    }
});
