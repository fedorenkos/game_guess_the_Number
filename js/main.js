function random() {
    let rand = Math.random() * 100;
    rand = Math.round(rand);
    console.log('Число - ' + rand);

    function guess() {
        let ask = prompt('Угадай число от 1 до 100');
        ask = parseInt(ask);
        if (ask === 0) {
            alert('Игра окончена');
            return guess();
        }
        if (isNaN(ask)) {
            console.log(typeof(ask));
            alert('Введи число');
        }
        console.log(ask);
        if (+ask === rand) {
            alert('Поздравляю. Вы угадали');
            console.log(typeof(ask));
        } else if (ask > rand) {
            confirm('Загаданное число больше');
            guess();
        } else if (ask < rand) {
            confirm('Загаданное число меньше');
            guess();
        } else {
            guess();
        }
    }
    guess();
}
random();
