"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

// document.addEventListener("keydown", (event) => {
//   if (event.code === "Escape" && !modalWindow.classList.contains("hidden")) {
//     hiddenMode(modalWindowFirst);
//   }
// });

const openBtn = document.querySelectorAll(".show-modal");
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".close-modal");
const overley = document.querySelector(".overlay");
// function refreshModal(model){
//     modal.forEach((item , index) => {
//         item.classList.toggle('hidden');
//     })
// }
// refreshModal(modal)

openBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    modal[index].classList.toggle("hidden");
    overley.classList.toggle("hidden");
  });
});
closeBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    modal[index].classList.toggle("hidden");
    overley.classList.toggle("hidden");
  });
});
overley.addEventListener("click", (event) => {
  if (!event.target.closest('modal')) {
    modal.forEach((item) => {
      item.classList.add('hidden')
    })
    overley.classList.toggle("hidden");
  }
});
document.addEventListener('keydown' , (event) => {
  if (event.code === 'Escape' && !modal.forEach((item) => item.classList.contains('hidden'))){
    modal.forEach((item) => {
      item.classList.add("hidden")
    })
    overley.classList.add("hidden")
  }
})

// openBtn.forEach((item, index) => {
//   item.addEventListener("click", (event) => {
//     if (index === 0) {
//         modal.forEach((item, index) => {
//           if (index === 0) {
//             item.classList.toggle("hidden");
//           }
//         });
//       }
//       if (index === 1) {
//         modal.forEach((item, index) => {
//           if (index === 1) {
//             item.classList.toggle("hidden");
//           }
//         });
//       }
//       if (index === 2) {
//         modal.forEach((item, index) => {
//           if (index === 2) {
//             item.classList.toggle("hidden");
//           }
//         });
//       }
//   });
// })

// openBtn.forEach((item , index) => {
//     if (index === 0){
//         console.log('hello')
//     }
