const burger = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu');
const menuLink = document.querySelector('.menu-list__link');

const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {

}

burger.addEventListener('click', toggleMenu);
menuLink.addEventListener('click', closeMenu);