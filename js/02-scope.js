/*
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const greetUser = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};

greetUser('Oleksii', 'Repin');

const createFullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};

console.log(createFullName('Oleksii', 'Repin'));
