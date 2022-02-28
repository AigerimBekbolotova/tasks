/********************* Class work ************************/
/*
let name = prompt('Кто такой пришел');
if ( name === 'Admin') {
    let password = prompt('Пароль');
    if (password === 'Your Lord') {
        alert('Welcome!');
    } else if (password === null) {
        alert('Login canceled');
    } else {
        alert('wrong password');
    }
} else if ( name === null) {
    alert('Login Canceled');
} else {
    alert('I dont know you');
}
*/
/********************* Class work ************************/
/*1) Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.*/

let numbers = [2,4,6,8,10,12,14,16];
for (let i=0; i < numbers.length; i++){
    if(numbers[i] > 10){
        continue;
    }
    console.log(numbers[i]);
}

/*2) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/

let num = [1,2,5,6,88,5];
let result = 0;
for( let i =0; i < num.length; i++){
    result += num[i];
}
console.log(result);//107


/*
3) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.*/

let rate = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let square = 0;
for (let i = 0; i < rate.length; i++) {
    square += rate[i] * rate[i];

}
console.log(square);


