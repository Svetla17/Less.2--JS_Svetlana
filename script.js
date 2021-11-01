// -6- / Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false. 

const obj  = {};
function isEmpty(obj){

for (const key in obj) {
    return false;    
}
    return true;    
}

console.log(isEmpty(obj));


// -7- / Создать объект selfGeneratedUser с методами: 1) getInfo(), при вызове которого 
// мы через prompt() поочередно получим данные об имени (name), емейле (email) 
// и телефоне (phone) пользователя и запишем их в соответствующие свойства объекта. 
// 2) introduce(), при вызове которого мы поочередно выводим c помощью alert name, email и phone. 
// Если поля нет - не выводим его, переходим к другому полю.

let selfGeneratedUser = {
        name : 'name' ,
        email : 'email' ,
        phone : 'phone' ,

            getInfo() {                 
        selfGeneratedUser.name = prompt('name?');
        selfGeneratedUser.email = prompt('email?');
        selfGeneratedUser.phone = prompt('phone?');              
        },
            introduce(){
                if (selfGeneratedUser.name != null && selfGeneratedUser.name != '') {
                    alert(selfGeneratedUser.name)
                } 
                
                if (selfGeneratedUser.email != null && selfGeneratedUser.email != '') {
                    alert(selfGeneratedUser.email)
                } 

                if (selfGeneratedUser.phone != null && selfGeneratedUser.phone != '') {
                    alert(selfGeneratedUser.phone)
                }           
        }
};
selfGeneratedUser.getInfo();
console.log(selfGeneratedUser);
selfGeneratedUser.introduce();



// -2-/ Существует ul список на странице. Получить все текстовые значения элементов списка. 
// Создать из них массив и к каждому элементу массива добавить его порядковый номер. 
// Вывести полученный массив

const ul = document.getElementById('ul');
let li_1 = document.getElementById("li_1").innerText;
let li_2 = document.getElementById("li_2").innerText;
let li_3 = document.getElementById("li_3").innerText;
let li_4 = document.getElementById("li_4").innerText;
let li_5 = document.getElementById("li_5").innerText;

// Дальше решения нет


//-3-/ Есть объект prices с произвольным количеством свойств, содержащих цены продуктов.
// Напишите функцию sumPrices(prices), которая возвращает сумму всех цен 
// с помощью метода Object.values

let prices = {
    'apple': 1,
    'orange': 4,
    'lime': 7,
}
    
function sumPrices(prices)  {
        let sum = 0;
        for (let price of Object.values(prices)) {
        sum += price;       
}
  return sum;
  
}
console.log(sumPrices(prices));

    

//-5-/ Есть массив [ ‘Tony’, ‘Stark’,  1 , 45, 2, 5, 34, 9, 11]
// Присвоить первое и второе значения массива к соответствующим переменным, 
// а остальные значения сложить 

let [name1,name2, ...rest] = ['Tony', 'Stark',  1 , 45, 2, 5, 34, 9, 11];

console.log(name1);
console.log(name2);
console.log(rest);

function arraySum(rest){
    let sum = 0;
    for(let i = 0; i < rest.length; i++){
        sum += rest[i];     
    }
    console.log(sum); 
};
arraySum(rest);

//-1-/ Создать функцию, которая которая возводит x в степень n.

function result (x,n){
    let rez = Math.pow(x,n);
    console.log(rez);
}
result (5,2);
result (3,3);
result (8,2);

//-2-/ Напишите функцию, которая выводит через 5 секунд на экран сообщение 
// “прошло 5 секунд”

setTimeout(
    () => {
      console.log('прошло 5 секунд');
    },
    5000
  );

// -3-/ Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
// начиная от from и заканчивая to.

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
    
  printNumbers(1, 4);


// -4-/ По нажатию на кнопку показывать сообщение через 5 секунд, во время этих 5 секунд 
// должно появляться слово “loading”, а после появления сообщения - скрываться

const button = document.createElement("button");
document.body.prepend(button)
button.innerText = 'КНОПКА'

