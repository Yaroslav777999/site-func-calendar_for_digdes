'use strict';

let elInput = document.querySelector('.input');
let elBtn = document.querySelector(".btn");
let elH1 = document.querySelector(".header");

function getDayInfo(string) {
    const month = {
        "Января": "0",
        "Февраля": "1",
        "Марта": "2",
        "Апреля": "3",
        "Мая": "4",
        "Июня": "5",
        "Июля": "6",
        "Августа": "7",
        "Сентября": "8",
        "Октября": "9",
        "Ноября": "10",
        "Декабря": "11"
    }

    const week = {
        "Воскресенье": "0",
        "Понедельник": "1",
        "Вторник": "2",
        "Среда": "3",
        "Четверг": "4",
        "Пятница": "5",
        "Суббота": "6"
    }
    let arr = string.split('.');
    let result = [];
    let getResult = "";

    arr.forEach((elem) => {
        if (elem[0] === '0') {
            result.push(elem[1])
        } else {
            result.push(elem)
        }
    });

    let date = new Date(result[2], result[1] - 1, result[0]);

    for (let key in week) {
        if (Number(week[key] == date.getDay())) {
            getResult += " " + key + ", ";
        }
    };

    getResult += Math.ceil(result[0] / 7) + " неделя ";

    arr.forEach((key, month) => {
        if (Number(month[key]) + 1 == result[1]) {
            getResult += " " + key + " ";
        }
    });

    getResult += result[2] + " года";
    console.log(getResult);
    return (elH1.innerText = getResult);
};

elBtn.onclick = () => {
    if (elInput.value !== '' && elInput.value.includes(".")) {
        getDayInfo(elInput.value);
    }
}
