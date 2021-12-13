// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let mainDiv = document.createElement('div');
mainDiv.classList.add('favorite-users');
document.body.appendChild(mainDiv);
mainDiv.style.border = '2px solid blue';
mainDiv.style.padding = '10px';
mainDiv.style.width = '400px';

for (const user of users) {
    let div = document.createElement('div');
    div.innerText = `${user.name}, ${user.age} years, status - ${user.status}`;
    let btnFavorite = document.createElement('button');
    btnFavorite.innerText = 'Add to Favorite';

    mainDiv.appendChild(div);
    div.appendChild(btnFavorite);

    btnFavorite.onclick = () => {
        let arrOfFavorites = JSON.parse(localStorage.getItem('favoriteUser')) || [];
        arrOfFavorites.push(user);
        localStorage.setItem('favoriteUser',JSON.stringify(arrOfFavorites));
    }
}

let btnGoToFav = document.createElement('button');
btnGoToFav.innerText = 'Go to Favorites'
mainDiv.appendChild(btnGoToFav);

btnGoToFav.onclick = () => {
    let url = document.getElementById('aFovorites');
    window.open(url)
}
