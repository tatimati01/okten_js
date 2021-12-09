// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

let formSubmitBtn = document.getElementById('formSubmitBtn');
formSubmitBtn.onclick = function () {
    let form1Name = document.forms.form1.form1Name.value;
    let form1Surname = document.forms.form1.form1Surname.value;
    let form2Name = document.forms.form2.form2Name.value;
    let form2Surname = document.forms.form2.form2Surname.value;
    console.log(form1Name + ' ' + form1Surname + ' is friend with ' + form2Name + ' ' + form2Surname);
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let table = document.createElement('table');
document.body.appendChild(table);

let tableCreator = document.forms['tableCreator']
tableCreator.onsubmit = function (e) {
    e.preventDefault();
    let row = +tableCreator.rowNumber.value;
    let column = +tableCreator.columnNumber.value;
    let content = tableCreator.cellContent.value;
    console.log(row,column,content);

    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

}
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
let badWordsArr = ['wordd','worrd','woord'];
let checkBtn = document.getElementById('checkBtn');
checkBtn.onclick = function () {
    let badWord = document.getElementById('badWordsChecker').value;
    for (let word of badWordsArr) {
        if (word === badWord) {
            alert('Ви використали погане слово!');
        } else {
            console.log(badWord);
        }
    }
};

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let badArr = ['wordd','worrd','woord'];
let badCheck = document.getElementById('badCheck');
badCheck.onclick = function () {
    let content = document.getElementById('content').value;
    for (let word of badArr) {
        if (content.includes(word)) {
            alert('Ви використали погане слово!');
        } else {
            console.log(content);
        }
    }
}