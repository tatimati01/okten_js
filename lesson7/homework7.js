// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arrayOfUsers = [
    new User(1,'Alfred','Hitchcock', 'ahitchcock@gmail.com','+380996758499'),
    new User(2,'Santa','Claus','writetosanra@gmail.com','+380776754455'),
    new User(3,'Sweet','Marmelade','sweetmar@gmail.com','=30665758822'),
    new User(4,'Lenny','Kravitz','lennyk@gmail.com','+380956117171'),
    new User(5,'Dexter','Morgan','killmesoftly@gmail.com','+380657833564'),
    new User(6,'Lilu','Dallas','multipasport@gmail.com','+380998765432'),
    new User(7,'Red','Hot','chillypeppers@gmail.com','+380678905544'),
    new User(8,'Peanut','Butter','andjelly@gmail.com','-'),
    new User(9,'Claude','Monet','cmartist@gmail.com','+380996745123'),
    new User(10,'Henry','Ford','gowithhenry@gmail.com','+380651230099')
];

console.log(arrayOfUsers);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let sortedArrayOfUsers = arrayOfUsers.filter(value => value.id % 2 === 0);
console.log(sortedArrayOfUsers);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let ascSortedArrayOfUsers = sortedArrayOfUsers.sort((a, b) => {return a - b});
console.log(ascSortedArrayOfUsers);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let someClientArray = [
    new Client(1,'Alfred','Hitchcock', 'ahitchcock@gmail.com','+380996758499',['smart-watch','tablet','book']),
    new Client(2,'Santa','Claus','writetosanra@gmail.com','+380776754455',['candles','glasses']),
    new Client(3,'Sweet','Marmelade','sweetmar@gmail.com','+30665758822',['sugar','honey']),
    new Client(4,'Lenny','Kravitz','lennyk@gmail.com','+380956117171',['guitar','clavecin','organ']),
    new Client(5,'Dexter','Morgan','killmesoftly@gmail.com','+380657833564',['knife','plastic package','containers']),
    new Client(6,'Lilu','Dallas','multipasport@gmail.com','+380998765432',['water','earth','fire','air']),
    new Client(7,'Red','Hot','chillypeppers@gmail.com','+380678905544',['do','re','mi','fa','sol','la']),
    new Client(8,'Peanut','Butter','andjelly@gmail.com','-',['bread','knife']),
    new Client(9,'Claude','Monet','cmartist@gmail.com','+380996745123',['brushes','paints']),
    new Client(10,'Henry','Ford','gowithhenry@gmail.com','+380651230099',['wheels','horn','handlebar'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClientArray = someClientArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClientArray);