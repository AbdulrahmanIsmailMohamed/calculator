(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num; // to get number
            screen.value += value;
        })
    });

    equal.addEventListener("click", (e) => {
        if (screen.value === '') {
            screen.value = 'please enter'
        } else {
            let answar = eval(screen.value);
            screen.value = answar
        }
    });

    clear.addEventListener("click", () => {
        screen.value = ''
    })
})();