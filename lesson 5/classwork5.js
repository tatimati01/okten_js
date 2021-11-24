// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minOfThreeNum = (a,b,c) => {
    if (a < b && a < c) {
        console.log(a);
    }
    if (b < a && b < c) {
        console.log(b);
    }
    if (c < a && c < b) {
        console.log(c);
    }
}

minOfThreeNum(23, -7, 40);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxOfThreeNum = (a,b,c) => {
    if (a > b && a > c) {
        console.log(a);
    }
    if (b > a && b > c) {
        console.log(b);
    }
    if (c > a && c > b) {
        console.log(c);
    }
}

maxOfThreeNum(23, -7, 40);

// - створити функцію яка повертає найбільше число з масиву

let maxNumberReturner = (array) => {
    let maxNum = array[0];
    for (let number of array) {
        if (number > maxNum) {
            maxNum = number;
        }
    }
    return maxNum;
}

let someArray = [3, 6, 66, -8, -46, 0, 56];
console.log(maxNumberReturner(someArray));

// - створити функцію яка повертає найменьше число з масиву

let minNumberReturner = (array) => {
    let minNum = array[0];
    for (let arrayElement of array) {
        if (arrayElement < minNum) {
            minNum = arrayElement;
        }
    }
    return minNum;
}
// let someArray = [3, 6, 66, -8, -46, 0, 56];
console.log(minNumberReturner(someArray));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
let someArray3 = [1,2,10];
console.log(sumOfArray(someArray3));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageOfArray = (array) => {
    let res = 0;
    for (let i of array) {
        res = res + i;
    }
    return res / array.length;
}

// let someArray3 = [1,2,10];
console.log(averageOfArray(someArray3));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMaxReturher = (array) => {
    let minNum = array[0];
    let maxNum = array[0];
    for (let arrayElement of array) {
        if (arrayElement < minNum) {
            minNum = arrayElement;
        }
        if (arrayElement > maxNum) {
            maxNum = arrayElement;
        }
    }
    console.log(`Max number is ${maxNum}`);
    return minNum;
}

// let someArray3 = [1,2,10];
console.log(`Min number is ${minMaxReturher(someArray3)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrayRandomizer = (size) => {
    let arrayEmpty = [];
    for (let i = 0; i < size; i++) {
        arrayEmpty[i] = Math.round(Math.random(i)*100);
    }
    return arrayEmpty;
}
console.log(arrayRandomizer(6));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrRandomizer2 = (size, limit) => {
    let arrEmpty = [];
    for (let i = 0; i < size; i++) {
        arrEmpty[i] = Math.round(Math.random(i)*limit);
    }
    return arrEmpty;
}
console.log(arrRandomizer2(5,200));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrBackwards = (arr) => {
    let arrBack = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        arrBack[ri] = arr[i];
    }
    return arrBack;
}

let someArr = [1,2,3];
console.log(arrBackwards(someArr));