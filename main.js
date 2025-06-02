// copy code 
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.nextElementSibling.textContent.trim();
        navigator.clipboard.writeText(code).then(() => {
            button.textContent = '✓';
            setTimeout(() => button.textContent = '©', 1500);
        }).catch(() => {
            alert('Gagal menyalin ke clipboard');
        });
    });
});

// copy code end


// Sapa pengguna
function sapa() {
  alert('Halo, selamat belajar JavaScript!');
}

function haloNama() {
  const namaInput = document.getElementById('nama');
  const output = document.getElementById('output');
  if (namaInput.value.trim() === '') {
    output.textContent = 'Tolong masukkan nama kamu dulu ya.';
  } else {
    output.textContent = `Halo, ${namaInput.value.trim()}! Semangat belajar JavaScript! 🎉`;
  }
}
// sapa pengguna end


const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Fungsi update preview & simpan ke localStorage
function updatePreview() {
    const code = editor.value;
    preview.srcdoc = code;
    localStorage.setItem('htmlCode', code);
}

// Muat kode terakhir dari localStorage saat halaman dibuka
window.onload = () => {
    const savedCode = localStorage.getItem('htmlCode');
    if (savedCode) {
        editor.value = savedCode;
        preview.srcdoc = savedCode;
    }
};

// Update preview setiap ada input di editor
editor.addEventListener('input', updatePreview);


// Show header animation after page load
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').classList.add('visible');
});

// Animate cards when they enter viewport
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Atur .active hanya pada link yang diklik
const navLinks = document.querySelectorAll('.sidebar nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});