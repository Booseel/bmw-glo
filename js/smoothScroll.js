
export default function smoothScroll(SPEED) {
    const scroll = event => {

        const target = event.target;
    
        if (target.matches('[href^="#"]')) {
            // console.log(target);
            event.preventDefault();
            let start = 0;
    
            const pageY = window.pageYOffset;
            const hash = target.getAttribute('href');    
            if (hash === '#') return;    
            const elem = document.querySelector(hash);
            const coordinateElem = elem.getBoundingClientRect().top;
            const step = time => {
                if (!start) start = time;
                const progress = time - start;
                const r = (coordinateElem < 0 ? Math.max(pageY - progress/SPEED, pageY + coordinateElem) 
                : 
                Math.min(pageY + progress/SPEED, pageY + coordinateElem) );
    
                scrollTo(0, r);
    
                if (r < pageY + coordinateElem) requestAnimationFrame(step);
            }
    
            requestAnimationFrame(step);
        }
    }
    
    document.body.addEventListener('click', scroll);
}
