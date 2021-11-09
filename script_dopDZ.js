// Задача 5 Классы

// function Modal(title, style) {
//     this.title = title;
//     this.style = style;
//     this.show = function () { };
//     this.hide = function () { };
// }

// function WarnModal(title) {
//     Modal.call(this, title, "background:orange; border: 1px solid orange");
// }

// function InfoModal(title) {
//     Modal.call(this, title, "background:blue; border: 1px solid blue");
// }

// function ErrorModal(title) {
//     Modal.call(this, title, "background:red; border: 1px solid red");
// }

// let warnModal = new WarnModal("Warn modal");
// let infoModal = new InfoModal("Info modal");
// let errorModal = new WarnModal("Error modal");

// console.log(warnModal);


// // 2 задача Объекты

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showInfo() {
//         console.log(this.name, this.age);

//     }
// }
// let person1 = new Person("Andry", 25)
// person1.showInfo()
// console.log(person1);



// Задача 5 Классы


// class Modal {
//     constructor(title, style) {

//     }
//     show() { }
//     hide() { }

// }

// class WarnModal extends Modal {
//     constructor(title) {
//         super(title, "background: red");
//     }
// }

// let warnModal = new WarnModal("Warn")
// warnModal.show();


// Задача 7 Классы

// class Ball {
//     constructor(type) {
//         this.type = type === undefined ? "super" : "superBall"
//     }
// }

// let ball1 = new Ball();
// let ball2 = new Ball("new Ball");

// Задача 2 Сетевые запросы

// const fetchUsers = async (names) => {
//     let result = await Promise.all(
//         names.map((name) =>
//             fetch(`https://api.github.com/users/${name}`).then((response) =>
//                 response.json()
//             )
//         )
//     );
//     console.log(result);
// };

// fetchUsers(["KazakEvgeniy", "MaksZhukov"]);

// Задача 2 LocalStorage

// let dontShow = localStorage.getItem("dontShow");

// if (dontShow) {
//   div.style.display = "none";
// } else {
//   div.style.display = "block";
// }

// checkbox.addEventListener("change", (event) => {
//   localStorage.setItem("dontShow", event.target.checked);
// });