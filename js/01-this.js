/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах.
// const user = {
//   firstName: 'Luis',
//   lastName: 'Neal',
//   age: 30,

//   showThis() {
//     console.log('this =', this);
//   },

//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// console.log(user);

// user.showThis();
// user.showFullName();

//* Розглянемо як this поводиться у звичайних функціях.
//~ Function expression
// const showThis = function () {
//   console.log('this =', this);
// };

// showThis();

//~ Function declaration
// function showThis() {
//   console.log('this =', this);
// }

// showThis();

//* Присвоєння функції, як методу об'єкта.
// const showThis = function () {
//   console.log('this =', this);
// };

// showThis();

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: showThis,
// };

// user.showUserThis();

//* Виклик методу об'єкта без контексту.
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('this =', this);
//   },
// };

// user.showUserThis();

// const showThis = user.showUserThis;

// showThis();

//* This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('this =', this);
//   },
// };

// const someFunction = callback => {
//   // let callback = ref ---> function () {console.log('this =', this);}
//   callback();
// };

// someFunction(user.showThis);

/*
 * This в стрілочних функціях. Стрілочні функції не мають свого this,
 * this в стрілках завжди посилається на батьківський this.
 */
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: () => {
//     console.log('this =', this);
//   },
// };

// user.showThis();
