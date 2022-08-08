const btn = document.getElementsByClassName('mobile-menu-button');
const sidebar = document.getElementsByClassName('sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle("-translate-x-full");
});