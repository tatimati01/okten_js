// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з параграфа з id "content"

let contentIdElement = document.getElementById('content');
console.log(contentIdElement.innerText);

// -- отримує текст з блоку з id "rules"

let rulesIdElement = document.getElementById('rules');
console.log(rulesIdElement.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

contentIdElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti\n' +
    '    molestias mollitia pariatur porro saepe!'

// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesIdElement.innerText = 'Dolorem eaque earum eligendi, iste maxime molestias quam vitae.\n' +
    '    Dolore hic in quae sed.'

// -- змініть кожному елементу колір фону на червоний

let allElements = document.body.children;
console.log(allElements);
for (let elem of allElements) {
    elem.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (let elem of allElements) {
    elem.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesClassList = rulesIdElement.classList;
console.log(rulesClassList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRulesElements = document.getElementsByClassName('fc_rules');
for (let lmnt of fcRulesElements) {
    lmnt.style.color = 'red';
}