// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let mainHeaderElement = document.getElementById('main_header');
mainHeaderElement.classList.add('sept-21');
console.log(mainHeaderElement.classList);

// b) робить шириниу елементу ul 400px

let ulElements = document.getElementsByTagName('ul');
console.log(ulElements);
for (let ul of ulElements) {
    ul.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementsByLinkList = document.getElementsByClassName('linkList');
for (let lili of elementsByLinkList) {
    lili.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let elementsOfListEl2 = document.getElementsByClassName('listElement2');
for (let e of elementsOfListEl2) {
    console.log(e.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allLiList = document.getElementsByTagName('li');
for (let li of allLiList) {
    li.style.background = 'lightgrey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let allAList = document.getElementsByTagName('a');
for (let a of allAList) {
    a.classList.add('anchor')
}
console.log(allAList);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let a of allAList) {
    let aText = a.textContent;
    if (aText === 'link3') {
        a.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let a of allAList) {
    let aText = a.textContent;
    a.classList.add(`element_${aText}`)
}
console.log(allAList);


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsSubHeader = document.getElementsByClassName('sub-header');
// let yourColor = prompt('Text your favourite colour?');
// for (let e of elementsSubHeader) {
//     e.style.background = `${yourColor}`
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let newColorFor2Seg = prompt('Text another color');
// for (let e of elementsSubHeader) {
//     let elementText = e.textContent;
//     if (elementText === 'content 2 segment') {
//         e.style.color = `${newColorFor2Seg}`
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elementContent1 = document.getElementsByClassName('content_1');
// elementContent1[0].innerText = prompt('Write some text');
// console.log(elementContent1[0].innerText);

// l) отримати елементи p та змінити їм padding на 20px

let pElements = document.getElementsByTagName('p');
for (let p of pElements) {
    p.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let elementsText2 = document.getElementsByClassName('text2');
for (let i of elementsText2) {
    i.textContent = 'sept-2021'
}
