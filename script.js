// Toggle menu mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Lightbox gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const galleryImages = document.querySelectorAll('.gallery-img');

if (lightbox && lightboxImg) {
  galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src.replace('&w=800', '&w=1600');
      lightbox.classList.add('active');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
}

// Handle login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    const user = JSON.parse(localStorage.getItem('laplandUser'));

    if (user && user.email === email && user.password === password) {
      alert(`Selamat datang, ${user.name}!`);
      window.location.href = 'index.html';
    } else {
      alert('Email atau password salah.');
    }
  });
}

// Handle register form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = registerForm.name.value.trim();
    const email = registerForm.email.value.trim();
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;

    if (password.length < 6) {
      alert('Password minimal 6 karakter.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok.');
      return;
    }

    const user = { name, email, password };
    localStorage.setItem('laplandUser', JSON.stringify(user));
    alert('Akun berhasil dibuat! Silakan login.');
    window.location.href = 'login.html';
  });
}
