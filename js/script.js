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

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
