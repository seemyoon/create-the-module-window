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
const btnOne = document.body.children[0];
const btnTwo = document.body.children[1];
const btnThree = document.body.children[2];
const btnCloseModal = document.querySelector(".close-modal");
// const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

btnOne.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnTwo.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnThree.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

const body = document.body;
body.addEventListener("keyup", function (event) {
  if (event.key == "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
});
