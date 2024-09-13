function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);
