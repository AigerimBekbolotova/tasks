/*1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
    С помощью цикла for найдите произведение элементов этого массива.
    Общий результат сохранить в объекте с соответствующим свойством.
    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.*/
///Цикл
let number = [2,3,4,5,6,7];
let sum = 1;
for (let i = 0; i < number.length; i++){
    result1 = sum *= number[i];
}
let obj = {
    sum:result1
}
console.log(sum);
console.log(obj);

///Reduce
const elements = [2,3,4,5,6,7];
let result2 = elements.reduce((sum, currentValue) => {
    return  sum * currentValue;
}, 1)
console.log(result2);
let obj2 = {
    sum:result2
};
console.log(obj2);


/*2) Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/


const myFunk = (letter, arrSize) => {
    return new Array(arrSize).fill(letter);
};
console.log(myFunk('a', 3));

/*
3) Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];*/

//reverce
function array(){
    let data = [1,2,3];
    data.reverse();
    console.log(data);
}
array();

//

