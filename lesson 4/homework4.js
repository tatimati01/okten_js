// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function SqOfRectangle (a, b) {
//     let res = a * b;
//     return res;
// }
// let result = SqOfRectangle (5, 8);
// console.log(result);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function SqOfCircle (r) {
//     const pi = 3.14;
//     let res = (r**2)*pi;
//     return res;
// }
// let result = SqOfCircle (5);
// console.log(result);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function SqOfCylinder (r, h) {
//     const pi = 3.14;
//     let res = 2*pi*r*h;
//     return res;
// }
//
// let result = SqOfCylinder (2, 4);
// console.log(result);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function ElementsOfArray (array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${array[i]}`);
//     }
// }
//
// let SomeArray = [2, 4, 7, 66, 33, 9, 34];
// ElementsOfArray (SomeArray);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function SomeParagraph (a) {
//     document.write('<div>');
//     document.write(`<p>${a}</p>`);
//     document.write('</div>');
// }
//
// SomeParagraph('Створити функцію яка створює параграф з текстом.');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulistCreator (a) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write('</ul>');
// }
//
// ulistCreator('text')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulistCreator2 (a, size) {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${a}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ulistCreator2('text', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function listOfArrayElements (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arr[i]}</li>`);
//         document.write(`</ul>`);
//     }
// }
// let simpleArray = ['Jingle Bells', 'Jingle Bells', 'Jingle all the Way', 2021<2022, 'h', 0, 'h', 0, 'h', 0]
// listOfArrayElements(simpleArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arrayOfUsers (arr) {
//     for (let elemOfArr of arr) {
//         document.write(`<div class="arrayOfUsersStyle">`);
//             document.write(`<div>`);
//                 document.write(`${elemOfArr.id}`);
//             document.write(`</div>`);
//             document.write(`<div>`);
//                 document.write(`${elemOfArr.name}`);
//             document.write(`</div>`);
//             document.write(`<div>`);
//                 document.write(`${elemOfArr.age}`);
//             document.write(`</div>`);
//         document.write(`</div>`);
//     }
// }
//
// let users = [
//     user1 = {
//         id : 1,
//         name : 'Oleh',
//         age : 25
//     },
//     user2 = {
//         id : 2,
//         name : 'Olena',
//         age : 28
//     },
//     user3 = {
//         id : 3,
//         name : 'Oleksiy',
//         age : 34
//     },
//     user4 = {
//         id : 4,
//         name : 'Olha',
//         age : 21
//     }
// ];
//
// arrayOfUsers(users);