// - Дано натуральное число n. Выведите все числа от 1 до n.

let numberN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(`${i}`);
    }
}
numberN(6);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let numberList = (a,b) => {
    let n = a;
    if (a < b) {
        while (n <= b) {
            console.log(n);
            n++;
        }
    } else if (a > b) {
        while (n >= b)    {
            console.log(n);
            n--;
        }
    }
}
numberList(8,6);

//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

let foo = [9,8,0,4];

let indexSwapper = (arr, i) => {
    let n = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = n;
    return arr;
}

console.log(indexSwapper(foo,2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arrayWithNulls = [0,0,1,0];

let nullsRemover = (arr, limit) => {
    if (limit > 2 && limit < 100) {
        for (let i of arr) {
            if (arr[i] === 0) {
                arr[i] = arr[i + 1];
                arr.push(0);
                arr[i + 1] = arr[limit];
                arr[i+1] = arr[i-1];
            } else {
                arr[i] = arr[i];
            }
        }
        }
    return arr;
}
console.log(nullsRemover(arrayWithNulls, arrayWithNulls.length));