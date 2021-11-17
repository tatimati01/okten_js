// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let num = [4, 7, 77, 123, 564];
// console.log(num);
// let str = ['red', 'green', 'blue', 'yellow', 'purple'];
// console.log(str);
// let com = [true, 66, 'blue', 0, 'whale'];
// console.log(com);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 90;
// arr[1] = true;
// arr[2] = 'window';
// arr[3] = '20';
// arr[4] = 4>5;
// console.log(arr);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 1; i <=10; i++) {
//     document.write('<div>post</div>');
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i <=10; i++) {
//     document.write(`<div>day ${i}</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let k = 0;
// while (k<20) {
//     document.write('<h1>Зараз листопад</h1>');
//     k++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let k = 1;
// while (k <= 20) {
//     document.write(`<h1>Сьгодні ${k} листопада</h1>`);
//     k++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1, 4, 5, 2, 12, 7, 31, 7, 90, 4];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let products = ['milk', 'kefir', 'yogurt', 'butter', 'ghee', 'sour cream', 'cheese', 'ice cream', 'fermented milk', 'koumiss'];
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let common = ['one', 'yellow', 'milk', 2**3 > 6, '1' === 1, 16.9, 0.9675, 777, 'boolean', 'world'];
// for (let i=0; i < common.length; i++) {
//     console.log(common[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let common = ['one', 'yellow', 'milk', 2**3 > 6, '1' === 1, 16.9, 0.9675, 777, 'boolean', 'world'];
// for (let i = 0; i < common.length; i++) {
//     if (typeof common[i] === 'boolean') {
//         console.log(common[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let common = ['one', 'yellow', 'milk', 2**3 > 6, '1' === 1, 16.9, 0.9675, 777, 'boolean', 'world'];
// for (let i = 0; i < common.length; i++) {
//     if (typeof common[i] === 'number') {
//         console.log(common[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let common = ['one', 'yellow', 'milk', 2**3 > 6, '1' === 1, 16.9, 0.9675, 777, 'boolean', 'world'];
// for (let i = 0; i < common.length; i++) {
//     if (typeof common[i] === 'string') {
//         console.log(common[i]);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 'fhgfj';
// array[1] = 'hjgfgh';
// array[2] = 12<90;
// array[3] = 2+3;
// array[4] = 'dyity';
// array[5] = 0;
// array[6] = 0.5;
// array[7] = 3.87;
// array[8] = 7===9;
// array[9] = 'fftf';
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     if ('true') {
//         console.log(`Поточний крок - ${i}`);
//         document.write(`<h2>Поточний крок - ${i}</h2>`);
//     }
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 1; i <= 100; i++) {
//     if ('true') {
//         console.log(`Крок ${i}`);
//         document.write(`<h2>Крок ${i}</h2>`);
//     }
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i = i+2) {
//     if ('true') {
//         console.log(`Крок ${i}`);
//         document.write(`<h2>Крок ${i}</h2>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 1; i <= 100; i++) {
//     if (i%2 === 0) {
//         console.log(`Крок ${i}`);
//         document.write(`<h2>Крок ${i}</h2>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if (i%2 !== 0) {
//         console.log(`Крок ${i}`);
//         document.write(`<h2>Крок ${i}</h2>`);
//     }
// }