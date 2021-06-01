export default function burger() {
    const burger = document.querySelector('.humburger-menu')
    const menu = document.querySelector('.menu');
    const menuLinkElems = document.querySelectorAll('.menu-list__link');

    const toggleMenu = () => {
        menu.classList.toggle('menu-active');
        burger.classList.toggle('humburger-menu-active');
    }

    menuLinkElems.forEach((btn) => {
        btn.addEventListener('click', () => {
            toggleMenu();
        })
    })

    burger.addEventListener('click', toggleMenu);
}