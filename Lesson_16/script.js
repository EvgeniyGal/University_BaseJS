// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// console.log("A");
// // setTimeout(()=> console.log('C'),0)
// // console.log('B');

// setTimeout(() => console.log("B"), 0);

// console.time('for')
// for (let i = 0; i < 30000; i++) {
//   console.log(i);
// }
// console.timeEnd('for')

// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 1000)
// console.log('setTimeout', id);

// // Видалення Timeout за необхідністю
// console.log(id);
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// ***********setInterval*********** \\

// const id1 = setInterval(() => {
// console.log('setInterval');
// }, 1000)
// console.log('setInterval', id1);
// // Видалення Timeout за необхідністю
// clearInterval(id)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const content = document.querySelector(".js-content");
// const text = document.querySelector(".js-text");

// let counter = 10;

// text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;
//   console.log(counter);
//   text.textContent = `Залишилось ${counter} секунд`;

//   if (!counter) {
//     // counter === 0
//     content.style.display = "none";
//     clearInterval(id);
//   }
// }, 1000);

// setTimeout(() => {
//   content.style.display = "none";
//   clearInterval(id)
// }, 1000 * counter); // 10000

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('start');

// setTimeout(() => {
//     console.log(setTimeout);
// }, 0)

// console.log('finish');

// ***********Class Date*********** \\
// const currentDate = new Date();
// console.log(currentDate);
// const targetDate = new Date('12/12/2023');
// console.log(targetDate);

// console.log(targetDate - currentDate);
// console.log(currentDate.toLocaleDateString('uk'));
// console.log(currentDate.toLocaleTimeString('uk'));
// console.log(currentDate.toTimeString());
// console.log(currentDate.getTime());
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

// const arrDays = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П`ятниця",
//   "Субота",
// ];
// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];

// const elements = {
//   day: document.querySelector(".date-day"),
//   date: document.querySelector(".date"),
//   month: document.querySelector(".date-month"),
//   year: document.querySelector(".date-year"),
//   digital: document.querySelector(".digital-clock"),
//   hours: document.querySelector(".clock-hours__arrow"),
//   minutes: document.querySelector(".clock-minutes__arrow"),
//   seconds: document.querySelector(".clock-seconds__arrow"),
// };

// setInterval(() => {
//   const currentDate = new Date();
//   const day = arrDays[currentDate.getDay()];
//   const date = currentDate.getDate();
//   const month = namesOfMonth[currentDate.getMonth()];
//   const year = currentDate.getFullYear();
//   const time = currentDate.toLocaleTimeString("uk");
//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();
//   const seconds = currentDate.getSeconds();

//   const secDeg = (360 / 60) * seconds;
//   const minutesDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
//   const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;
//   console.log(secDeg);

//   elements.day.textContent = day;
//   elements.date.textContent = date;
//   elements.month.textContent = month;
//   elements.year.textContent = year;
//   elements.digital.textContent = time;

//   elements.seconds.style.transform = `rotate(${secDeg}deg)`;
//   elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//   elements.hours.style.transform = `rotate(${hoursDeg}deg)`;
// }, 1000);

const elements = {
  weekDay: document.querySelector(".date-day"),
  day: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  secArrow: document.querySelector(".clock-seconds__arrow"),
  minArrow: document.querySelector(".clock-minutes__arrow"),
  hourArrow: document.querySelector(".clock-hours__arrow"),
};
const curDate = new Date();

setInterval(() => {
  const curDate = new Date();
  elements.weekDay.textContent = curDate.getDay();
  elements.day.textContent = curDate.getDate();
  elements.month.textContent = curDate.getMonth();
  elements.year.textContent = curDate.getFullYear();
  elements.clock.textContent = curDate.toLocaleTimeString();
}, 1000);

setInterval(() => {
  const curDate = new Date();
  elements.secArrow.style.transform = `rotate(${
    6 * curDate.getSeconds() + (6 / 1000) * curDate.getMilliseconds()
  }deg)`;
  elements.minArrow.style.transform = `rotate(${
    6 * curDate.getMinutes() +
    0.1 * curDate.getSeconds() +
    (0.1 / 1000) * curDate.getMilliseconds()
  }deg)`;

  elements.hourArrow.style.transform = `rotate(${
    30 *
      (curDate.getHours() > 12 ? curDate.getHours() - 12 : curDate.getHours()) +
    0.5 * curDate.getMinutes() +
    (0.5 / 60) * curDate.getSeconds() +
    (0.5 / 60 / 1000) * curDate.getMilliseconds()
  }deg)`;
}, 0.1);

new Promise((f, r) => f("All ok!"))
  .then((f) => console.log(f))
  .catch((r) => console.error(r));
