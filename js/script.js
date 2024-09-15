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
            'url("https://www.gainesvilleleakexpert.com/wp-content/uploads/2022/09/Plumbing-installation-first-choice-plumbing-gainesville-florida-29.69117033952106-82.33139223068727.jpg")',
            'url("https://smartguy.com/webservice/storage/category/plumbing-plan-services.jpg")',
            'url("https://allnoneplumbing.com/wp-content/uploads/2019/03/all-n-one-plumbing-toilet-installation-residential-plumbing-2.jpeg")'
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