let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function random() {
    let m = Math.random();
    m = m * 100;
    m = Math.round(m);
    console.log('Число: ' + m);

    function guess() {
        let ask = prompt('Угадай число от 1 до 100');
        if (ask === null) {
            alert('Игра окончена');
            return;
        }
        if (!isNumber(ask)) {
            console.log(typeof(ask));
            alert('Введи число');
        }
        console.log(ask);
        if (ask === m) {
            confirm('Поздравляю. Вы угадали');
            console.log(typeof(ask));
        } else if (ask > m) {
            confirm('Загаданное число больше');
            return guess();
        } else if (ask < m) {
            confirm('Загаданное число меньше');
            return guess();
        } else {
            return guess();
        }
    }
    return guess();
}
random();