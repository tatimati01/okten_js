// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, producer, year, maxspeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] !== "function") console.log(`${key} - ${this[key]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let newCar1 = new Car ('mazda6 top+','Japan',2021,239,231);
// console.log(newCar1);
// newCar1.drive();
// newCar1.info();
// newCar1.increaseMaxSpeed(10);
// console.log(newCar1.maxspeed);
// newCar1.changeYear(2022);
// console.log(newCar1.year);
// newCar1.addDriver({name: 'Tetiana', age: 31})
// console.log(newCar1.driver);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car {
    constructor(model, producer, year, maxspeed, engine) {
        this.model = model;
        this.produser = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info () {
        for (let key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed
    }
    changeYear (newValue) {
        this.year = newValue
    }
    addDriver (driver) {
        this.driver = driver
    }
}

let newCar2 = new Car('mazda6 top+','Japan',2021,239,231);
newCar2.drive();
newCar2.info();
newCar2.increaseMaxSpeed(10);
console.log(newCar2.maxspeed);
newCar2.changeYear(2022);
console.log(newCar2.year);
newCar2.addDriver({name: 'Tetiana', age: 31});
console.log(newCar2.driver);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize
}

let girls = [
    new Cinderella('Anna',21,37),
    new Cinderella('Beatrice',16,36),
    new Cinderella('Camilla',32,40),
    new Cinderella('Diana',18,34.5),
    new Cinderella('Eva',27,33),
    new Cinderella('Florence',17,32),
    new Cinderella('Galina Ivanivna',68,32.5),
    new Cinderella('Helen',22,35),
    new Cinderella('Isabella',25,37),
    new Cinderella('Julia',29,36.5)
];
console.log(girls);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize
    }
}

let prince1 = new Prince('Givi',36,40);
let prince2 = new Prince('Benjamin',19,32);
let prince3 = new Prince('Valeriy',19,33);

console.log(prince1);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let pair = (prince) => {
    for (let g = 0; g < girls.length; g++) {
        let footSizeOfGirl = girls[g].footSize;
        let shoeSize = prince.shoeSize;
        if (footSizeOfGirl === shoeSize) {
            console.log(`${girls[g].name} + ${prince.name} = LOVE`);
        }
    }
}
pair(prince3);


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(girls.find(value => value.footSize === prince3.shoeSize));

