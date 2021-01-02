const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
toggle.addEventListener('click', () => {
    sidebar.classList.toggle('compact-sidebar');
    toggle.classList.toggle('compact-toggle');
    mainContent.classList.toggle('compact-main-content');
});