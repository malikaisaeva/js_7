/*let man = {
    name: 'Roma',
    age: 23,
    ismaried: false,
    car: {
        model:'BMW',
        color: 'black'
    }
}
Object.freeze(man) //
man.age = man.age + 1
man.house = true // создание ключа
man.ismaried = true

delete man.house //удаление ключа
man.car.color = 'pink'
man.car.model = man.car.model.replace(/BMW/, 'Kia') //изменение
man.car.garant = true

console.log(man);

console.log(typeof(man));


let arr = [1, true, man, 26, 'hi', [1,2,3,4,5,6]]
console.log(typeof(arr));
console.log(Array.isArray(arr)); // проверка на подлинность массива
console.log(Array.isArray(man));

let keys = Object.keys(man)
let values = Object.values(man)*/

//Object.assign(target, source) // объединение объектов

// у вас есть 3 вопроса 
// спрашивает ваше имя
// фамилию 
// женаты ли вы 
// вы создать объекь с этими значениями

// let a = 2                  a = 3
// let b = 3                  b = 2
// поменяйте значения а и b местами
// поменяйте значения а и b местами 
// не используя дополнительных переменых

// из банковской системы создать 2 аккаунта 
// 2 объекта
// и сделать банкувскую систему на 2 человек
//let a = {price: 30}
//let b = {price: -40}
//let c = {price: 50}
// объеденить и посмотреть ответ
// в переменую тотал сложить все прайсы и дать ответ

//1
let question = prompt('wha`s your name')
let question2 = prompt('what`s your surname')
let boolean = confirm('is married?')

let obj = {
    question,
    question2,
    boolean
}
console.log(obj);

//2
let ab = 2
let cd = 3
ab = 3
cd = 2
console.log(ab, cd);



//3
let ask = prompt('what`s your name?')
let man = {
    name: 'Doni',
    password: 7777,
    cash: 15000
}

let woman = {
    name: 'Liora',
    password: 1212,
    cash: 25000
}


if (ask === man.name.toLocaleLowerCase()) {
    console.log('next');
    let ask2 = +prompt('enter your password')
    if (ask2 === man.password) {
        console.log('next');
    } else {
        console.log('not rigth');
    }

    let ask3 = +prompt('Withdraw volume:')
    if (ask3 <= man.cash) {
        console.log(`Withdraw: ${ask3}, ${man.cash - ask3}`);
    } else {
        console.log('not rigth');
    }

} else {
    console.log('go home');
}

let ask6 = prompt('what`s your name')

if (ask6 === woman.name.toLocaleLowerCase()) {
    console.log('next');
    let ask4 = +prompt('enter your password')
    if (ask4 === woman.password) {
        console.log('next');
    } else {
        console.log('not rigth');
    }

    let ask5 = +prompt('Withdraw volume:')
    if (ask5 <= woman.cash) {
        console.log(`Withdraw: ${ask5}, ${woman.cash - ask5}`);
    } else {
        console.log('not rigth');
    }

} else {
    console.log('go home');
}


//4
let a = {price: 30}
let b = {price: -40}
let c = {price: 50}
let total = a.price + (b.price) + c.price
console.log(total);
// объеденить и посмотреть ответ
// в переменую тотал сложить все прайсы и дать ответ*/