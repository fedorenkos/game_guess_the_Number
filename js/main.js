function random() {
    let m = Math.random();
    m = m * 100;
    m = Math.round(m);
    console.log(m);

    function guess() {
        let ask = prompt('Угадай число от 1 до 100');
        let user = ask;
        user = parseInt(user);
        if (user === 0) {
            alert('Игра окончена');
            return guess();
        }
        if (isNaN(user)) {
            console.log(typeof(user));
            alert('Введи число');
        }
        console.log(user);
        if (user === m) {
            confirm('Поздравляю. Вы угадали');
            console.log(typeof(user));
        } else if (user > m) {
            confirm('Загаданное число больше');
            return guess();
        } else if (user < m) {
            confirm('Загаданное число меньше');
            return guess();
        } else {
            return guess();
        }
    }
    return guess();
}
random();