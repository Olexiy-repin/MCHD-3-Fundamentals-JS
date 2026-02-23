/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function () {
//   console.log('Hello world!');
// };

// fn.test = 'hello';

// console.dir(fn);
// console.log(fn.length);
// console.log(fn.name);
// console.log(fn.test);

// TODO: Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(num);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Welcome', 200);
// showFullName.apply(user, ['Hello', 100]);

// TODO: Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'red');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['yellow']);

// console.log(sweater);

// TODO: Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('pink');

// console.log(hat);

// TODO: Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showName.bind(user));
// someFunction(() => {
//   user.showThis();
// });
