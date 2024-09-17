// Ambil elemen hamburger dan menu navigasi
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// Toggle kelas 'active' ketika hamburger di klik
hamburger.addEventListener('click', function() {
    navList.classList.toggle('active'); // Menampilkan atau menyembunyikan menu
    hamburger.classList.toggle('toggle'); // Menambahkan animasi 'X' pada hamburger
});

// Scroll functionality for hiding navbar
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('hidden');  // Navbar appears when scrolling up
    } else {
        navbar.classList.add('hidden');  // Navbar hides when scrolling down
    }

    prevScrollPos = currentScrollPos;
};
