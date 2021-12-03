// Все робити за допомоги js.
// - створити блок,

let divElement = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta

divElement.classList.add('wrap', 'collapse', 'alpha', 'beta')
console.log(divElement);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

divElement.style.height = '200px';
divElement.style.background = 'lightblue';
divElement.style.color = 'darkblue';
divElement.style.fontSize = '40px';
divElement.innerText = 'Header'

// - додати цей блок в body.

document.body.appendChild(divElement);

// - клонувати його повністю, та додати клон в body.

let clonedDiv = divElement.cloneNode(true);
document.body.appendChild(clonedDiv);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menuListArray = ['Main','Products','About us','Contacts'];
let divMenu = document.createElement('div')
let ulMenu = document.createElement('ul');
for (const menuItem of menuListArray) {
    let li = document.createElement('li');
    li.innerText = `${menuItem}`;
    ulMenu.appendChild(li);

}
document.body.appendChild(divMenu);
divMenu.classList.add('menu');
divMenu.appendChild(ulMenu);

//
// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration

for (const course of coursesAndDurationArray) {
    let divOfCourses = document.createElement('div');
    document.body.appendChild(divOfCourses);
    divOfCourses.style.border = '2px solid blue';
    divOfCourses.style.padding = '10px';
    divOfCourses.innerText = `${course.title} - ${course.monthDuration}`
}

// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let div1 = document.createElement('div');
    document.body.appendChild(div1);
    div1.classList.add('item');
    let h1 = document.createElement('h1');
    div1.appendChild(h1);
    h1.classList.add('heading');
    h1.innerText = `${course.title}`;
    let p = document.createElement('p');
    h1.appendChild(p);
    p.classList.add('description');
    p.innerText = `${course.monthDuration}`
}