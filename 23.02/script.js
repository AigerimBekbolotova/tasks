/***********  1 zadanie   ***********/
/*1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/

let userSalaries = {
      Ella: 50000,
      Sophia: 60000,
      Ellie: 55000
}
console.log(${userSalaries Ella} ${userSalaries Sophia});


/***********  2 zadanie   ***********/
/*2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.*/

let num = {
    a: 5,
    b: 6,
    c: 10
}
let result = (num.a +num.b + num.c);
console.log(result);

/***********  3 zadanie   ***********/

/*let number;
if (data === true){
    number = 3;
} else{
    number = 5;
}*/
let data = true;
let number = data === true ? 3 : 5;
alert(number);


/***********  4 zadanie   ***********/

let name = prompt('Кто такой В.В.Путин?');
if ( name === 'Президент'){
    alert ('Верно');
}
else {
    alert ('Не знаете?');
}
console.log(name)

