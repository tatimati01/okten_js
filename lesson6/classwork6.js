// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

let NameNormalizer = (str) => {
    return str.replaceAll('.',' ')
        .replaceAll('-',' ')
        .replaceAll('_',' ')
        .replaceAll('   ',' ')
        .replaceAll('  ', ' ')
}
console.log(NameNormalizer(n1));
console.log(NameNormalizer(n2));
console.log(NameNormalizer(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arrayOfNumsMaker = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr
}
console.log(arrayOfNumsMaker(4));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let someArray = arrayOfNumsMaker(6);
console.log(someArray.sort((a, b) => {
    return a - b
}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let someArray2 = arrayOfNumsMaker(5);
console.log(someArray2);
console.log(someArray2.filter(value => {return (value % 2 === 0)}));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayOfNums = arrayOfNumsMaker(6);
console.log(arrayOfNums);
console.log(arrayOfNums.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (array, direction) => {
    if (direction === '+') {
        return array.sort((a, b) => a - b)
    } else if (direction === '-') {
        return array.sort((a, b) => b - a)
    }
}
console.log(sortNums(nums, '-'));

//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let sortedArray = coursesAndDurationArray
    .sort((a, b) => {return (b.monthDuration - a.monthDuration)})
    .filter(value => value.monthDuration > 5)
console.log(sortedArray);
