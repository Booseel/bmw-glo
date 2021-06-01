import blockScrolled from './blockScrolled.js';

const {enableScroll, disableScroll} = blockScrolled;

const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

export default function modal() {
    const openModal = () => {
        modalElem.classList.remove('hidden');
        disableScroll();
    }

    const closeModal = () => {
        modalElem.classList.add('hidden');
        enableScroll();
    }

    moreElems.forEach((btn) => {
        btn.addEventListener('click', openModal)
    })

    // moreElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('overlay') || 
            target.classList.contains('modal__close')) {
            closeModal();
        }
    })

}
