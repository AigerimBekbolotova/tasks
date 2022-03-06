/*1) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
(не считая значения 99) и вывести эту информацию на экран.
    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4*/
/*let btnStart = document.getElementById('start-btn');
let btnResult = document.getElementById('result-btn');
let result;
let prog;
result = 0;

let function1 = () => {
   prog = prompt('Введите число');
   while(prog != 99){
       result += 1;
       prog = prompt('Введите число');
   }return result;
}

btnStart.onclick = function1;
btnResult.onclick = () => {
    alert(`кол-во чисел - ${result}`);
}*/

/*2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
    чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
на экран.
    ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290*/

let btnStart = document.getElementById('start-btn');
let btnResult = document.getElementById('result-btn');

let a = 0;
let  question;
let sum = 0;

let function2 = () => {

    let question = prompt('Введите число');
    while(question != 999){
         sum += Number(question);
         console.log(sum);
         a++;
         question = prompt('Введите другое число');
    }
    return sum;
}

btnStart.onclick = function2;
btnResult.onclick = () => {
    alert(`Кол-во чисел - ${a}`);
    alert(`Сумма - ${sum}`);

}


/*3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
    а второе – нынешний (текущий) год.
    Программа должна вывести на экран возраст ученика (в целых годах).

ввод: 2006, 2018 ⇒ вывод: вам 12 лет)*/

/*let date = new Date;

function getDate () {
    let year=prompt('Введите год рождения');
    let fullYear = date.getFullYear() - Number(year);
    return fullYear;
}
alert(`Тебе ${getDate()}  лет`);*/
