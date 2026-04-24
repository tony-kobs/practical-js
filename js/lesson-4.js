//1 отримай body елемент і виведи його в консоль;
const bodyElement = document.querySelector('.container').parentElement;
//console.log(bodyElement);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElem = document.getElementById('title');
//console.log(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listElem = document.querySelector('.list');
//console.log(listElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]');
//console.log(dataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicFirst = document.querySelector('[data-topic]');
//console.log(dataTopicFirst);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicLast = document.querySelector('[data-topic]:last-of-type');
//console.log(dataTopicLast);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleNextElem = document.getElementById('title').nextElementSibling;
//console.log(titleNextElem);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titleTag = document.querySelectorAll('h3');
//console.log(titleTag);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
titleTag.forEach(el => {
  el.classList.add('active');
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigationTopic = document.querySelector('[data-topic="navigation"]');
//console.log(navigationTopic);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigationTopic.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textTopicNav = navigationTopic.querySelector('p');
textTopicNav.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const element = document.querySelector(`[data-topic="${currentTopic}"]`);
//console.log(element);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
element.style.backgroundColor = 'lightblue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompleted = document.querySelector('.completed');
//console.log(titleCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const parentTitle = titleCompleted.parentElement;
parentTitle.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const p = document.createElement('p');
p.textContent = "Об'єктна модель документа (Document Object Model)";
titleElem.insertAdjacentElement('afterend', p);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newElementList = document.createElement('li');
newElementList.innerHTML = `<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`;
listElem.append(newElementList);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
listElem.insertAdjacentHTML(
  'beforeend',
  `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево - 
      це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
  `
);
// 20 - очисти список
listElem.innerHTML = '';

/* --------------------------------------------TASK 2------------------------------------------- */

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.createElement('div');
numberContainer.classList.add('number-container');
bodyElement.append(numberContainer);

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const num = randomNumber();

  const div = document.createElement('div');
  div.classList.add('number');
  div.textContent = num;

  if (num % 2 === 0) {
    div.classList.add('even');
  } else {
    div.classList.add('odd');
  }

  numberContainer.append(div);
}

/* --------------------------------------------TASK 3------------------------------------------- */
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.
const enterName = document.querySelector('.js-username-input');

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
enterName.addEventListener('input', () => {
  const isValid = enterName.value.length >= 6;

  enterName.classList.toggle('success', isValid);
  enterName.classList.toggle('error', !isValid);
  /* if (enterName.value.length <= 6) {
    enterName.classList.add('error');
    enterName.classList.remove('success');
  } else {
    enterName.classList.add('success');
    enterName.classList.remove('error');
  } */
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

enterName.addEventListener('focus', () => {
  const isEmpty = enterName.value.trim() === '';

  enterName.style.outline = isEmpty ? '3px solid red' : '3px solid green';
  /*  if (enterName.value.length === 0) {
    enterName.style.outline = '3px solid red';
  } else {
    enterName.style.outline = '3px solid green';
  } */
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
enterName.addEventListener('blur', () => {
  const isEmpty = enterName.value.trim() === '';

  enterName.style.outline = isEmpty ? '3px solid red' : '3px solid lime';
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const formName = document.querySelector('.js-contact-form');
const formCheck = document.querySelector('.js-policy-checkbox');
const anonymusName = document.querySelector('.js-username-output');

enterName.addEventListener('input', () => {
  anonymusName.textContent = enterName.value.trim() || 'Anonymous';
});

formName.addEventListener('submit', e => {
  e.preventDefault();

  const userName = enterName.value.trim();
  const isChecked = formCheck.checked;

  if (!userName || !isChecked) {
    console.log('Enter your name and agree with policy');
    return;
  }
  const userData = {
    userName,
  };

  console.log(userData);

  formName.reset();
  enterName.classList.remove('success', 'error');
  enterName.style.outline = '';
  anonymusName.textContent = 'Anonymous';
});

/* --------------------------------------------TASK 4------------------------------------------- */

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const little = document.querySelector('.js-decrease');
const big = document.querySelector('.js-increase');
const box = document.querySelector('.box');

const getSize = () => box.offsetWidth;
console.log(box);

little.addEventListener('click', () => {
  const newSize = getSize() - 20;

  if (newSize > 0) {
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
  }
});

big.addEventListener('click', () => {
  const newSize = getSize() + 20;

  box.style.width = `${newSize}px`;
  box.style.height = `${newSize}px`;
});
