/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

//~ Через цикл for
/*
  1 Ітерація
    i = 0;
    courses[0]

  2 Ітерація
    i = 1;
    courses[1]

  3 Ітерація
    i = 2;
    courses[2]
*/
// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

//~ Через цикл for...of
/*
  1 Ітерація
    const item = 'HTML';
    console.log('HTML');

  2 Ітерація
    const item = 'CSS';
    console.log('CSS');
  
  3 Ітерація
    const item = 'JavaScript';
    console.log('JavaScript');
*/
// for (const item of courses) {
//   console.log(item);
// }

/*
TODO: Напиши скрипт для перебора масиву fruits.
TODO: Для кожного елемента масиву виведи в консоль рядок
TODO: у форматі номер_елемента: значення_елемента.
TODO: Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   const idxOfFruit = fruits.indexOf(fruit);

//   console.log(`${idxOfFruit + 1}: ${fruit}`);
// }
