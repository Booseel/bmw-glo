const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callBack(response.id);
        } else {
            falseCallBack(request.status);
            throw new Error(request.status);
        }
    });

    request.send(data);
}

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    const smallElem = document.createElement('small');
    form.append(smallElem);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};
        let flag = true;
        const submitButton = form.querySelector('.button[type="submit"]');

        for (const elem of form.elements) {
            const {name, value} = elem;
            if (name) {
                if (value.trim()) {
                    data[name] = value.trim();
                    elem.style.border = '';
                } else {
                    elem.style.border = '1px solid red';
                    flag = false;
                    elem.value = '';
                }
            }
        }
        
        if (!flag) {            
            return smallElem.textContent = 'Заполните все поля';
        }

        sendData(JSON.stringify(data),
        (id) => {
            smallElem.innerHTML = 'Ваша заявка №' + id +
                '!<br> В ближайшее время с вами свяжемся!';
                smallElem.style.color = 'green';
            submitButton.disabled = true;

            setTimeout(() => {
                smallElem.textContent = '';
                submitButton.disabled = false;
                form.reset();
            }, 5000)
        },
        (err) => {
            smallElem.textContent = 'К сожалению возникли технические неполадки, попробуйте снова';
            smallElem.style.color = 'red';
        });

        // form.reset();
    })
};

formElems.forEach(formHandler);