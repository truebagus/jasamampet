// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Background Image Rotator
const hero = document.querySelector('.hero');
const backgrounds = [
    'url("https://www.gainesvilleleakexpert.com/wp-content/uploads/2022/09/Plumbing-installation-first-choice-plumbing-gainesville-florida-29.69117033952106-82.33139223068727.jpg")',
    'url("https://smartguy.com/webservice/storage/category/plumbing-plan-services.jpg")',
    'url("https://allnoneplumbing.com/wp-content/uploads/2019/03/all-n-one-plumbing-toilet-installation-residential-plumbing-2.jpeg")'
];
let currentBg = 0;

function changeBackground() {
    hero.style.backgroundImage = backgrounds[currentBg];
    currentBg = (currentBg + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000); // Background change every 5 seconds
changeBackground(); // Initial call to set the first background

// Carousel with Infinite Loop and Dots
document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelector('.services');
    const dots = document.querySelectorAll('.dot');
    const cardWidth = 300 + 32; // Width of card + margin
    let totalCards = services.children.length;
    let currentIndex = 0;
    let intervalId;

    // Clone first few cards to the end for seamless looping
    const clonedCards = [];
    for (let i = 0; i < totalCards; i++) {
        const clone = services.children[i].cloneNode(true);
        services.appendChild(clone);
        clonedCards.push(clone);
    }
    totalCards = services.children.length; // Update total cards after cloning

    // Function to move carousel to a specific slide
    function goToSlide(index, transition = true) {
        if (!transition) {
            services.style.transition = 'none';
        } else {
            services.style.transition = 'transform 0.3s ease';
        }
        services.style.transform = `translateX(-${index * cardWidth}px)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index % (totalCards / 2)].classList.add('active'); // Reset dot when index is beyond original card set
        currentIndex = index;
    }

    // Auto-play function
    function startAutoPlay() {
        intervalId = setInterval(() => {
            currentIndex++;
            if (currentIndex >= totalCards / 2) {
                goToSlide(totalCards / 2, true); // Smoothly transition to the cloned set
                setTimeout(() => {
                    goToSlide(0, false); // Jump back to the original set without transition
                }, 300);
            } else {
                goToSlide(currentIndex);
            }
        }, 3000); // Move every 3 seconds
    }

    // Stop auto-play when a dot is clicked
    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay(); // Stop the autoplay on click
            goToSlide(index);
        });
    });

    // Start auto-play on page load
    startAutoPlay();
});

