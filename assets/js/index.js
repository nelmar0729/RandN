
// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme controls
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyThemeIcon(theme) {
    themeIcon.className = 'bi ' + (theme === 'dark' ? 'bi-moon-stars' : 'bi-brightness-high');
    themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    themeToggle.title = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
}
function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    applyThemeIcon(theme);
}
(function initTheme() {
    const current = document.documentElement.getAttribute('data-bs-theme') || 'light';
    applyThemeIcon(current);
})();
themeToggle.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-bs-theme') || 'light';
    setTheme(curr === 'dark' ? 'light' : 'dark');
});

// Filters
const buttons = document.querySelectorAll('.filter-btns .btn');
const cards = document.querySelectorAll('.project-item');
buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    cards.forEach(c => {
        const cats = c.dataset.cats.split(' ');
        c.classList.toggle('d-none', !(cat === 'all' || cats.includes(cat)));
    });
}));

// Bootstrap form validation
(function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            alert('Thanks! Your message is queued for follow-up.');
            form.reset();
        }
        form.classList.add('was-validated');
    });
})();