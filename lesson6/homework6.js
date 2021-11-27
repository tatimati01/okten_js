// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upperStr1 = str1.toUpperCase();
console.log(upperStr1);

let upperStr2 = str2.toUpperCase();
console.log(upperStr2);

let upperStr3 = str3.toUpperCase();
console.log(upperStr3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowerStr1 = upperStr1.toLowerCase();
console.log(lowerStr1);

let lowerStr2 = upperStr2.toLowerCase();
console.log(lowerStr2);

let lowerStr3 = upperStr3.toLowerCase();
console.log(lowerStr3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   ';
console.log(str.length);
let cleanStr = str.trim();
console.log(cleanStr.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let somestr = 'Каждый охотник желает знать';
let stringToarray = (str) => { return str.split(' ');};
let splitArr = stringToarray(somestr);
console.log(splitArr);


//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.slice(0,length);
};
console.log(delete_characters(somestr,7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    return str.toUpperCase().replaceAll(' ','-')
};
let newStr = "HTML JavaScript PHP";
console.log(insert_dash(newStr));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let someString = 'some text';
let firstSymtoUp = (str) => {
    return str.charAt(0).toUpperCase()+str.slice(1)
};
let newString = firstSymtoUp(someString);
console.log(newString);

//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let justAString = 'january, february, march, april, may, june, july';
let capitalize = (ss) => {
    return ss.split(' ').map(value => value.charAt(0).toUpperCase()+value.slice(1)).join(' ');
};
console.log(capitalize(justAString));
