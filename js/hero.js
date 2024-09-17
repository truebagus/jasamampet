const hero = document.querySelector('.hero');

// Array of background image URLs
const images = [
    'https://th.bing.com/th/id/OIG4.A7D4QS7TtJAUuSJ8igKU?w=1024&h=1024&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.0vNYQG1D1H6K2easQuDMEAHaEy?rs=1&pid=ImgDetMain',
    'https://procrewschedule.com/wp-content/uploads/2020/06/plumber-at-work-in-a-bathroom-1024x683-1.jpg',
    'https://th.bing.com/th/id/OIG4.9I0nAy.EK4lSD1RWX5vW?w=1024&h=1024&rs=1&pid=ImgDetMain'
];

let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Change image every 5 seconds
setInterval(changeBackgroundImage, 5000);
