// Ambil elemen hamburger dan menu navigasi
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('#nav-list li a'); // Ambil semua link dalam menu
const navbar = document.querySelector('.navbar'); // Ambil elemen navbar untuk fungsi scroll

// Toggle kelas 'active' ketika hamburger di klik
hamburger.addEventListener('click', function() {
    navList.classList.toggle('active'); // Menampilkan atau menyembunyikan menu
    hamburger.classList.toggle('toggle'); // Menambahkan animasi 'X' pada hamburger
});

// Tutup menu ketika salah satu item menu diklik
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navList.classList.remove('active'); // Sembunyikan menu setelah item diklik
        hamburger.classList.remove('toggle'); // Kembalikan ikon hamburger ke posisi semula
    });
});

// Fungsi untuk menyembunyikan navbar saat scroll down dan menampilkan saat scroll up
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('hidden');  // Navbar muncul ketika scroll ke atas
    } else {
        navbar.classList.add('hidden');  // Navbar hilang ketika scroll ke bawah
    }

    prevScrollPos = currentScrollPos; // Update posisi scroll sebelumnya
};
