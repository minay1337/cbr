const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Функция для переключения темы
function toggleTheme() {
body.classList.toggle('dark-theme');
const isDarkTheme = body.classList.contains('dark-theme');
themeToggle.textContent = isDarkTheme ? 'Светлая тема' : 'Темная тема';
}

// Обработчик события для переключения темы
themeToggle.addEventListener('click', toggleTheme); 
