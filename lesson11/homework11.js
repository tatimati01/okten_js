// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
let nameValue = document.forms.nameAge.nameInp;
let ageValue = document.forms.nameAge.ageInp;
let submitBtn = document.getElementById('submitInp');
let key = 'key';


let savingKey = (userName,userAge) => {
    let user = {
        name : userName,
        age : userAge
    };
    localStorage.setItem(key, JSON.stringify(user));
};

submitBtn.onclick = () => {
    savingKey(nameValue.value,ageValue.value)
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.forms.carForm.carModel;
let type = document.forms.carForm.carType;
let volume = document.forms.carForm.carVolume;
let btn = document.getElementById('btn');

let savingCar = (carModel,carType,carVolume) => {
    let carsArray = JSON.parse(localStorage.getItem(carKey)) || [];
    let car = {
        model : carModel,
        type : carType,
        volume : carVolume
    };
    carsArray.push(car);
    localStorage.setItem('car key', JSON.stringify(carsArray));
}

btn.onclick = () => {
    savingCar(model.value,type.value,volume.value)
}
console.log(carsArray);

// let model = document.forms.carForm.carModel;
// console.log(model);
// let type = document.forms.carForm.carType;
// let volume = document.forms.carForm.carVolume;
// let btn = document.getElementById('btn');
// let item = 'keyCar';
//
// let saveCar = (carModel, carType, carVolume) => {
//     let newArr = JSON.parse(localStorage.getItem(item)) || [];
//
//     newArr.push({carModel, carType, carVolume})
//     localStorage.setItem(item, JSON.stringify(newArr));
// };
//
// btn.onclick = () => {
//     saveCar(model.value, type.value, volume.value);
// }