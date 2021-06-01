const disableScroll = () => {
    document.body.dataset.scrollY = window.scrollY;
    // вычисляем размер полосы прокрутки справа
    const scrollWidth = window.innerWidth - document.body.offsetWidth;
    // убираем возврат к началу страницы при открытии модального окна
    document.body.style.cssText = `
        overflow:hidden;
        position:fixed;
        top:-${window.scrollY}px;
        left:0;
        width:100%;
        height:100vh;
        padding-right:${scrollWidth}px;
    `;
}

const enableScroll = () => {
    document.body.style.cssText = '';
    // возвращаем позицию прокрутки при закрытии модального окна
    window.scroll({
        top: document.body.dataset.scrollY
    })
}

export default {enableScroll, disableScroll};