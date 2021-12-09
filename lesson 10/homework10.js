// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let idTextElement = document.getElementById('text');
let btn1 = document.getElementsByClassName('btn1');
btn1[0].onclick = function () {
    idTextElement.hidden = true;
};

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.getElementsByClassName('btn2');
btn2[0].onclick = function () {
    btn2[0].hidden = true;
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let ageButton = document.getElementById('inputAgeButton');
ageButton.onclick = function () {
    let ageValue = document.getElementById('inputAge').value;
    if (ageValue >= 18) {
        alert('Вам більше, ніж 18 років!')
    } else if (ageValue < 18) {
        alert('Вам менше 18 років!')
    } else {
        alert('Введіть коректне значення віку')
    }
}

//
// - Создайте меню, которое раскрывается/сворачивается при клике

let menuTitle = document.getElementById('menuTitle');
let menuList = document.getElementsByClassName('menuList');
menuTitle.onclick = function () {
    menuList[0].classList.toggle('hideItem')
}
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentsArray = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem6', body:'lorem ipsum dolo sit ameti'}
];

for (let comment of commentsArray) {
    let divComment = document.createElement('div');
    let divTitleAndButton = document.createElement('div');
    divTitleAndButton.style.display = 'flex';
    let title = document.createElement('h3');
    title.innerText = comment.title;
    let button = document.createElement('button');
    button.innerText = '>'
    button.style.width = '30px';
    button.style.height = '30px';
    divTitleAndButton.style.alignItems = 'center';
    let body = document.createElement('p');
    body.innerText = comment.body;
    divTitleAndButton.onclick = function () {
        body.classList.toggle('hideItem')
    }

    document.body.appendChild(divComment)
    divComment.append(divTitleAndButton,body)
    divTitleAndButton.append(title,button)
}
