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
    let totalCards = services.children.length;
    let currentIndex = 0;
    let intervalId;
    let restartTimeoutId; // Timeout ID for restarting autoplay

    // Function to get the current width of each card
    function getCardWidth() {
        return document.querySelector('.service-card').offsetWidth;
    }

    // Function to move carousel to a specific slide
    function goToSlide(index, transition = true) {
        const cardWidth = getCardWidth(); // Get the updated width dynamically
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
        clearTimeout(restartTimeoutId); // Clear any scheduled restart to avoid conflicts
    }

    // Restart auto-play after 5 seconds of inactivity
    function restartAutoPlay() {
        stopAutoPlay(); // Ensure it's stopped before scheduling a restart
        restartTimeoutId = setTimeout(() => {
            startAutoPlay(); // Restart autoplay after 5 seconds
        }, 5000);
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay(); // Stop the autoplay on click
            goToSlide(index);
            restartAutoPlay(); // Schedule the restart after the click
        });
    });

    // Start auto-play on page load
    startAutoPlay();

    // Resize event listener to update card width when the window is resized
    window.addEventListener('resize', () => {
        goToSlide(currentIndex, false); // Re-calculate position after resizing
    });
});
