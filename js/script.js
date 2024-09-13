document.addEventListener('DOMContentLoaded', function () {
    // Hero section image slider
    const heroSection = document.querySelector('.hero-section');

    const images = [
        'url(https://www.southsurreyplumbing.com/wp-content/uploads/2020/03/drain-clogging-1.jpg)',
        'url(https://www.emergencyplumbingsquad.com/wp-content/uploads/2021/01/plumber-after-unclogging-sink-drain-photo-768x512.jpg)',
        'url(https://novinkhadamat.com/wp-content/uploads/2021/08/profesional-clogging-work-using-machine.jpg)',
        'url(https://aceplumbingbaltimore.com/wp-content/uploads/2022/12/clogged-toilet.jpg)'
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        heroSection.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change background every 5 seconds
    setInterval(changeBackgroundImage, 5000);

    // Initial background setup
    changeBackgroundImage();

    // Service cards scrolling
    const serviceCards = document.querySelector('.service-cards');
    const cards = document.querySelectorAll('.card');

    if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth + 20; // Width of a card + gap
        const totalScrollWidth = cardWidth * cards.length;
        let scrollAmount = 0;

        function autoScroll() {
            scrollAmount += cardWidth;
            if (scrollAmount >= totalScrollWidth) {
                scrollAmount = 0; // Kembali ke awal saat mencapai akhir
            }
            serviceCards.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }

        // Set interval untuk menggulir otomatis setiap 5 detik
        setInterval(autoScroll, 5000);
    }

    // Toggle menu
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }

    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});
