// 1.1 Создать форму в HTML с 2 полями ввода и кнопкой отправки. 
// Получить эту форму на событие отправки этой формы (т е нажатие кнопки), 
// сделать кнопку неактивной и очистить форму

const form = document.forms['form'];
const input1 = form.elements['input1'];
const input2 = form.elements['input2'];
const input3 = form.elements['input3'];

form.addEventListener('submit', function (event){
    event.preventDefault();
    console.log(input1.value);
    console.log(input2.value);
    input3.disabled = true;
    form.reset()
});


//2.1 
// Создать форму в HTML с полем ввода и кнопкой отправки, 
// на submit формы менять значение поля ввода на произвольное

const form1 = document.forms['form1'];
let input4 = form1.elements['input4'];
const input5 = form1.elements['input5'];

form1.addEventListener('submit', function (event){
    event.preventDefault();
    input4.value = 'proizvolnoe'    
      
});

//3.1 Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки. 
// На submit формы вывести значения поля ввода и имена всех отмеченных полей checkbox.

const form2 = document.forms['form2'];
const input6 = form2.elements['input6'];
const input7 = form2.elements['input7'];
const input8 = form2.elements['input8'];
const button = form2.elements['button'];

form2.addEventListener('submit', function (event){
    event.preventDefault();
    console.log(input6.value);
    if (input7.checked) {
        console.log(input7.value);
    }
    if (input8.checked) {
        console.log(input8.value);
    }
    
});

//4.1 Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, 
// если поля ввода пустое, делать фокус на поле ввода.

const form3 = document.forms['form3'];
let input9 = form3.elements['input9'];
const input10 = form3.elements['input10'];

form3.addEventListener('submit', function (event){
    event.preventDefault();
    if (input9.value = ' '){
        input9.focus();
    }          
});

//5.1 Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения. 
// Для поля телефона задать максимальное количество символов 13, сообщение может быть большим. 
// При submit формы создавать объект со всеми значениями формы и выводить его.

const form4 = document.forms['form4'];
const input11 = form4.elements['input11'];
const input12 = form4.elements['input12'];
const input13 = form4.elements['input13'];
const input14 = form4.elements['input14'];
const button1 = form4.elements['button1'];

form4.addEventListener('submit', function (event){
    event.preventDefault();
    
    let person = {
        name : input11.value,
        lastName : input12.value,
        phone : input13.value,
        message : input14.value,
    }
    console.log(person);
});

// 1.2 Создать калькулятор расхода и дохода. 
// Пользователь вводит число в поле ввода и выбирает с помощью radio кнопки доход это или расход. 
// На нажатие кнопки нужно рассчитать текущее значение счета,  
// а также отрисовать  столбики диаграммы дохода и расхода разными цветами. 
// При нажатии кнопки поля ввода очищаются

const form5 = document.forms['form5'];
const input15 = form5.elements['input15'];
const input16 = form5.elements[1];
const input17 = form5.elements[2];
const input18 = form5.elements['input18'];
const input19 = form5.elements['input19'];

form5.addEventListener('click', function (){
       
    if (input16.checked) {
        input18.value = Number (input18.value) + Number(input15.value)
        
    }   
    else {  (input17.checked) 
        input18.value = Number(input18.value) - Number(input15.value)
    } 
   
})

// 2.2
// Создать функцию, которая создает модальное окно с вопросом о имени и возрасте пользователя. 
// Поля обязательные для заполнения. В окне 2 кнопки - отмена и добавить. 
// При нажатии отмены, окно закрывается, при нажатии на добавить, проверяется, 
// если возраст больше 18, то на странице появляется новый элемент списка с именем и возрастом 
// пользователя, если нет выводится красное текстовое сообщение. 
// Функция вызывается на нажатие кнопки - Добавить пользователя

const form8 = document.forms['form8'];
const button6 = form8.elements['button6'];
const div = document.querySelector("div");

form8.addEventListener('click', function (event){
    event.preventDefault();    
    if (button6.focus) {
        div.style.visibility = "visible";
    }    
});

const form6 = document.forms['form6'];
const input20 = form6.elements['input20'];
const input21 = form6.elements['input21'];
const button2 = form6.elements['button2'];
const button3 = form6.elements['button3'];
const newInput = document.createElement("input");

newInput.type = "text";
newInput.name = "input22"; 
form6.append(newInput)

form6.addEventListener('click', function (event){ 
    event.preventDefault();     
    if (button3.checked) {
        div.style.display = "none";
          
    } else { (button2.checked)
        if (input21.value >=18) {
            newInput.value = (input20.value + input21.value)
        } else { (input21.value < 18)
            newInput.value = " "
        }
    }   
});

// 3 Создать собственную валидацию поля емейл:
// При потере фокуса или отправке формы, проверять с помощью 
// регулярного выражения значение поля email и показывать ошибку, 
// если оно не соответствует
 function validate () {
     let mail = document.getElementsById('text').value;
     let textValue = /^([a-zA-Z0-9\._]+)@([a-z])+.([a-z])/
     if (textValue.text(mail)){
         alert('ok')
         return true
     } else{
         alert("sorry")
         return false
     }
     
 }
 