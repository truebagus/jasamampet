const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Fungsi untuk toggle menu saat hamburger diklik
hamburger.addEventListener('click', function () {
  if (window.innerWidth <= 768) { // Hanya aktif saat layar kecil
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  }
});

// Fungsi untuk menutup menu saat kursor keluar dari area menu
navLinks.addEventListener('mouseleave', function () {
  if (window.innerWidth <= 768) { // Hanya aktif saat layar kecil
    navLinks.style.display = 'none';
  }
});

// Fungsi untuk memastikan menu tetap tampil pada layar besar saat di-resize
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex'; // Kembalikan menu pada layar besar
  } else {
    navLinks.style.display = 'none'; // Sembunyikan menu pada layar kecil
  }
});
