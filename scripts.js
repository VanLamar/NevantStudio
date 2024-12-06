function createParticles() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.opacity = Math.random();
        particles.appendChild(particle);
    }
}

createParticles();

// Language toggle functionality
const langButtons = document.querySelectorAll('.lang-btn');
const contentElements = document.querySelectorAll('.content');
const logoImage = document.querySelector('.comic-logo-img');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        langButtons.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get the selected language
        const lang = btn.dataset.lang;
        
        // Update content for all translatable elements
        contentElements.forEach(el => {
            el.textContent = el.dataset[lang];
        });

        // Update logo image
        logoImage.src = logoImage.dataset[lang];
    });
});

// Comic logo click handler (replace with actual link)
document.querySelector('.comic-logo').addEventListener('click', () => {
    window.open('https://www.webtoons.com/en/canvas/vutharials-environs-/list?title_no=951882', '_blank');
});