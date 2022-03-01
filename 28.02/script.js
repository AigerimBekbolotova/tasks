// class work
/*
function letters (a,b){
    if(a < b){
        return a;
    }else {
        return b;
    }

}
let result = (letters);
function get (result){
    alert(result);
}
get(result);*/

//1) Напишите функцию hello(), которая при вызове будет возвращать строку
//    «Привет, JavaScript!»


function hello(text) {
    return text;
}
let greeting = hello('Hello, JavaScript!');
alert(greeting);


// 2) Нужно создать функцию, которая будет выводить куб числа на страничку.
//    Число должно передаваться параметром.

function cube(num=5) {
    return num * num * num
}
cube();
console.log(cube());

// 3) Напишите функцию getName(), которая при вызове будет принимать переменную
//    name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
//    В случае отсутствующего параметра выводить «Привет, гость»
let name = prompt('Имя') ;
function getName() {
    if (name ===''){
        alert ('Привет, гость');
    }else {
        alert ('Привет, ' + name);
    }
}
getName();

// 4) На старте вы получаете массив. Необходимо написать функцию, которая будет
//    возвращать массив удвоенных значений исходного массива.
//    Пример кода:
//    example([1, 2, 3]) => [2, 4, 6]
//    example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
//    example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]

const num2 =  [];
 function calc(num3){
     for (let i = 0; i < num3.length; i++) {
         let sum = num3[i] + num3[i];
         num2.push(sum);
     }
     return num2;
 }
 calc([5,10,15,20,25]);
 calc([6,8,10,12,14]);

console.log(num2);



