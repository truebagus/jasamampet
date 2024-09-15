const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const hero = document.querySelector('.hero');
        const services = document.querySelector('.services');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        const backgrounds = [
            'url("https://source.unsplash.com/random/1600x900?service")',
            'url("https://source.unsplash.com/random/1600x900?business")',
            'url("https://source.unsplash.com/random/1600x900?work")'
        ];
        let currentBg = 0;

        function changeBackground() {
            hero.style.backgroundImage = backgrounds[currentBg];
            currentBg = (currentBg + 1) % backgrounds.length;
        }

        setInterval(changeBackground, 5000);
        changeBackground(); // Initial call

        let currentIndex = 0;
        const cardWidth = 300 + 32; // Width of card + margin

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                services.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < services.children.length - 1) {
                currentIndex++;
                services.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        });