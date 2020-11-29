function random(){
    let m = Math.random();
        m = m * 100;
        m = Math.round(m);
        console.log(m);
    let x = 10;
        function guess(){
            let ask = +prompt('Угадай число от 1 до 100') ;
            let user = ask;
                user = parseInt(user);
                console.log(user);
                if(user === m){
                    +confirm('Поздравляю. Вы угадали');
                    console.log(typeof(user));
                } else if (user > m){
                    +confirm('Загаданное число больше');
                    return guess();   
                } else if (user < m){
                    +confirm('Загаданное число меньше');
                    return guess();   
                }else {
                    return alert('Игра окончена');
                }   
        } 
        return guess();
}
random();
