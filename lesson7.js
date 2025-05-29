// Задание 1

/* <div class="block"> </div>
1 Дан блок, внутри него необходимо создать
элемент div с классом item, разместить текст
“Элемент внутри” и задать стили
● Цвет текста синий
● Рамка сплошная черная
● Цвет фона #f8f8f8
● Внутренний отступ 16px
2 Добавить данному блоку класс item_1
(использовать setAttribute)*/

const blockEl = document.querySelector('.block');
const divEl = document.createElement('div');
divEl.classList.add('item');
blockEl.appendChild(divEl);
divEl.textContent = 'Элемент внутри';

divEl.style.color = 'blue';
divEl.style.border = 'solid black';
divEl.style.backgroundColor = 'f8f8f8';
divEl.style.padding = '16px';

divEl.setAttribute('class', 'item_1');

// Задание 2

/* Дан код
<div class="elem">
<img src="photo.png" alt="photo">
<div class="content">
<h2 class="heading">Lorem, ipsum dolor.</h2>
<p class="text">Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Recusandae, ea!</p>
</div>
</div>
1 Необходимо с помощью querySelector найти параграф с
классом text
2 Вывести в консоль соседний элемент h2
3 Вывести в консоль родительский элемент content
4 Вывести в консоль картинку
5 Вывести в консоль родительский элемент elem*/

const pEl = document.querySelector('.text');

console.log(pEl.previousElementSibling); // PreviousElementSibling — свойство, которое возвращает предыдущий элемент на том же уровне дерева

const parEl = pEl.parentElement;
console.log(parEl);

const imgEl = parEl.previousElementSibling;
console.log(imgEl);

console.log(pEl.parentElement.parentElement);

// Задание 3

/* С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей */

let parh2 = document.querySelector('.subtitle');

console.log(parh2.parentElement.parentElement.parentElement.parentElement.parentElement);

// или

while (parh2.parentElement) {
    parh2 = parh2.parentElement;
    console.log(parh2);
}

// Задание 4

/* 1 Дано поле ввода и кнопка отправить, необходим
реализовать функционал, если пользователь нажимает на
кнопку отправить, а поле ввода пустое, то под полем ввода
и кнопкой должен появиться заголовок h2 с текстом вы не
заполнили поле ввода
2 Цвет у рамки сделать красным */

const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('.input')
const btnEl = formEl.querySelector('.btn');

const h2El = document.createElement('h2');
h2El.textContent = 'Вы не заполнили поле ввода';

btnEl.onclick = function () {
    if (inputEl.value) {
        console.log('Шо то написано');
    } else {
        formEl.appendChild(h2El);
        inputEl.style.borderColor = 'red';
    }
}

// Задание 5

/* 1 Дан тег <div class="content"></div>
2 Создайте с помощью javascript новый элемент button
3 Добавьте текст для кнопки “Отправить”
4 При клике на данную кнопку необходимо чтобы текст
поменялся на “Текст отправлен” */

const contEl = document.querySelector('.content');
const btnEl = document.createElement('button');
btnEl.textContent = "Отправить";
contEl.appendChild(btnEl);
btnEl.onclick = function () {
    btnEl.textContent = "Текст отправлен";
}