const MenuContainer = document.querySelector('.menu_container');
const MenuOpen = document.querySelector('.menu_open');
const MenuClose = document.querySelector('.menu_close');
const SPMenu = document.querySelector('.sp_menu');	

MenuContainer.addEventListener('click', () => {
    MenuOpen.classList.toggle('active');
    MenuClose.classList.toggle('active');
    SPMenu.classList.toggle('active');
});
SPMenu.addEventListener('click', () => {
    MenuOpen.classList.toggle('active');
    MenuClose.classList.toggle('active');
    SPMenu.classList.toggle('active');
});