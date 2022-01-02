// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function concat (arr) {
//     let sum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
//
// someArr = [2,4,6]
// concat(someArr);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let array1 = [1,2,3,4,5];
// let array2 = [3,4,5,6,7];
// function arrayElementsSum (arr1, arr2) {
//     let newArray = [];
//     for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//         if (arr1.length === arr2.length) {
//             let sum = arr1[i] + arr2[i];
//             newArray.push(sum);
//         } else if (arr1.length > arr2.length) {
//             newArray.push(arr1[i]);
//         } else if (arr1.length < arr2.length) {
//             newArray.push(arr2[i]);
//         }
//     }
//     return newArray;
// }
//
// console.log(arrayElementsSum (array1, array2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function keyArrCreator (arr) {
    let newKeyArr = [];
    for (const element of arr) {
        let propertyArr = Object.getOwnPropertyNames(element);
        for (const property of propertyArr) {
            newKeyArr.push(property);
        }
    }
    return newKeyArr;
}

let bigArray = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(keyArrCreator(bigArray));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function valueArrCreator (arr) {
    let newValueArr = [];
    for (const element of arr) {
        let valueArr = Object.values(element);
        for (const value of valueArr) {
            newValueArr.push(value);
        }
    }
    return newValueArr;
}

console.log(valueArrCreator(bigArray));